/* ============================================================
 *  Med MCQ — single-page app (vanilla JS, no build step)
 *  Hash routes:
 *    #/                                  -> subjects
 *    #/:subject                          -> papers
 *    #/:subject/:paper                   -> chapters
 *    #/:subject/:paper/:chapter          -> quiz
 * ============================================================ */

const app = document.getElementById("app");
const crumbsEl = document.getElementById("crumbs");

/* ---------- helpers ---------- */
const el = (tag, props = {}, children = []) => {
  const node = document.createElement(tag);
  Object.entries(props).forEach(([k, v]) => {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
    else if (v !== null && v !== undefined) node.setAttribute(k, v);
  });
  (Array.isArray(children) ? children : [children]).forEach((c) => {
    if (c == null) return;
    node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  });
  return node;
};

const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const OPT_KEYS = ["A", "B", "C", "D", "E", "F"];

/* ---------- spaced repetition (Leitner-style, localStorage) ---------- */
/* Each question gets a "box" 0..4. Higher box = better known.
 * Wrong  -> box resets toward 0 (seen sooner / more often).
 * Right  -> box increases (seen less often). We weight the session
 * sample so low-box questions appear earlier and more frequently. */
const SR_KEY = "medmcq.sr.v1";
const srStore = (() => {
  try { return JSON.parse(localStorage.getItem(SR_KEY)) || {}; }
  catch { return {}; }
})();
const saveSR = () => {
  try { localStorage.setItem(SR_KEY, JSON.stringify(srStore)); } catch {}
};
const qid = (subject, paper, chapter, idx) => `${subject}/${paper}/${chapter}#${idx}`;
const getBox = (id) => (srStore[id] && srStore[id].box) || 0;
const recordAnswer = (id, correct) => {
  const cur = srStore[id] || { box: 0 };
  cur.box = correct ? Math.min(4, cur.box + 1) : 0;
  cur.last = Date.now();
  srStore[id] = cur;
  saveSR();
};

/* ---------- breadcrumbs ---------- */
function setCrumbs(parts) {
  crumbsEl.innerHTML = "";
  parts.forEach((p, i) => {
    if (i > 0) crumbsEl.appendChild(el("span", { class: "sep" }, "/"));
    crumbsEl.appendChild(
      p.href ? el("a", { href: p.href }, p.label) : el("span", {}, p.label)
    );
  });
}

/* ---------- router ---------- */
function parseHash() {
  const raw = location.hash.replace(/^#\/?/, "");
  return raw.split("/").filter(Boolean).map(decodeURIComponent);
}

function render() {
  const [subject, paper, chapter] = parseHash();
  app.innerHTML = "";
  window.scrollTo(0, 0);

  if (!subject) return renderSubjects();
  if (!QUIZ_DATA[subject]) return renderNotFound();
  if (!paper) return renderPapers(subject);
  if (!QUIZ_DATA[subject].papers[paper]) return renderNotFound();
  if (!chapter) return renderChapters(subject, paper);
  if (!QUIZ_DATA[subject].papers[paper].chapters[chapter]) return renderNotFound();
  return renderQuiz(subject, paper, chapter);
}

/* ---------- views ---------- */
function pageHead(title, subtitle) {
  return el("div", { class: "page-head" }, [
    el("h1", {}, title),
    subtitle ? el("p", {}, subtitle) : null
  ]);
}

function renderSubjects() {
  setCrumbs([{ label: "Home" }]);
  const grid = el("div", { class: "grid" });
  Object.entries(QUIZ_DATA).forEach(([key, s]) => {
    const enabled = s.enabled;
    grid.appendChild(
      el("a", {
        class: "card" + (enabled ? "" : " disabled"),
        href: enabled ? `#/${key}` : null
      }, [
        el("span", { class: "emoji" }, s.emoji || "📚"),
        el("span", { class: "title" }, s.name),
        enabled
          ? el("span", { class: "sub" }, "Start practising")
          : el("span", { class: "badge" }, "Coming soon")
      ])
    );
  });
  app.append(
    pageHead("Choose a subject", "Pick what you want to revise today."),
    grid
  );
}

function renderPapers(subject) {
  const s = QUIZ_DATA[subject];
  setCrumbs([{ label: "Home", href: "#/" }, { label: s.name }]);
  const grid = el("div", { class: "grid" });
  Object.entries(s.papers).forEach(([key, p]) => {
    const enabled = p.enabled;
    grid.appendChild(
      el("a", {
        class: "card" + (enabled ? "" : " disabled"),
        href: enabled ? `#/${subject}/${key}` : null
      }, [
        el("span", { class: "emoji" }, "📄"),
        el("span", { class: "title" }, p.name),
        enabled
          ? el("span", { class: "sub" }, `${Object.keys(p.chapters).length} chapters`)
          : el("span", { class: "badge" }, "Coming soon")
      ])
    );
  });
  app.append(pageHead(s.name, "Select a paper."), grid);
}

function chapterMastery(subject, paper, chapterKey, ch) {
  const n = ch.questions.length;
  if (!n) return { label: "Empty", cls: "new" };
  let mastered = 0;
  ch.questions.forEach((_, i) => {
    if (getBox(qid(subject, paper, chapterKey, i)) >= 3) mastered++;
  });
  if (mastered === 0) return { label: `${n} Q`, cls: "new" };
  if (mastered === n) return { label: "Mastered", cls: "mastered" };
  return { label: `${mastered}/${n} learned`, cls: "learning" };
}

function renderChapters(subject, paper) {
  const s = QUIZ_DATA[subject];
  const p = s.papers[paper];
  setCrumbs([
    { label: "Home", href: "#/" },
    { label: s.name, href: `#/${subject}` },
    { label: p.name }
  ]);
  const grid = el("div", { class: "grid" });
  Object.entries(p.chapters).forEach(([key, ch]) => {
    const m = chapterMastery(subject, paper, key, ch);
    const has = ch.questions.length > 0;
    grid.appendChild(
      el("a", {
        class: "card" + (has ? "" : " disabled"),
        href: has ? `#/${subject}/${paper}/${key}` : null
      }, [
        el("span", { class: "emoji" }, ch.emoji || "📘"),
        el("span", { class: "title" }, ch.name),
        has
          ? el("span", { class: `tag-mastery ${m.cls}` }, m.label)
          : el("span", { class: "badge" }, "No questions yet")
      ])
    );
  });
  app.append(pageHead(p.name, "Pick a chapter to start the quiz."), grid);
}

function renderNotFound() {
  setCrumbs([{ label: "Home", href: "#/" }]);
  app.append(
    pageHead("Not found", "That page doesn't exist."),
    el("div", { class: "btn-row" }, [
      el("a", { class: "btn btn-primary", href: "#/" }, "← Back home")
    ])
  );
}

/* ---------- quiz ---------- */
function buildSession(subject, paper, chapter, onlyIdxs) {
  const ch = QUIZ_DATA[subject].papers[paper].chapters[chapter];
  let items = ch.questions.map((q, idx) => ({ q, idx }));
  if (onlyIdxs) items = items.filter((it) => onlyIdxs.includes(it.idx));

  // Spaced-repetition ordering: lower box first, with randomness inside.
  items = shuffle(items).sort((a, b) => {
    const ba = getBox(qid(subject, paper, chapter, a.idx));
    const bb = getBox(qid(subject, paper, chapter, b.idx));
    return ba - bb;
  });

  // Each item carries its own shuffled option order.
  return items.map((it) => {
    const order = shuffle(it.q.options.map((_, i) => i));
    // `answer` may be a single index or an array of indices (multiple correct).
    const answerSet = Array.isArray(it.q.answer) ? it.q.answer : [it.q.answer];
    const correctPositions = order
      .map((origIdx, pos) => (answerSet.includes(origIdx) ? pos : -1))
      .filter((pos) => pos >= 0);
    return { idx: it.idx, q: it.q, order, correctPositions };
  });
}

function renderQuiz(subject, paper, chapter, onlyIdxs) {
  const s = QUIZ_DATA[subject];
  const p = s.papers[paper];
  const ch = p.chapters[chapter];
  setCrumbs([
    { label: "Home", href: "#/" },
    { label: s.name, href: `#/${subject}` },
    { label: p.name, href: `#/${subject}/${paper}` },
    { label: ch.name }
  ]);

  const session = buildSession(subject, paper, chapter, onlyIdxs);
  if (!session.length) {
    app.append(
      pageHead(ch.name, null),
      el("div", { class: "empty" }, "No questions to show here yet.")
    );
    return;
  }

  const state = { i: 0, correct: 0, missed: [], answered: false };

  const head = pageHead(ch.name, onlyIdxs ? "Review mode — questions you missed" : null);
  const bar = el("div", { class: "quiz-bar" });
  const progress = el("div", { class: "progress" }, el("span", {}));
  const slot = el("div", {});
  app.append(head, bar, progress, slot);

  function drawProgress() {
    bar.innerHTML = "";
    bar.append(
      el("span", {}, `Question ${state.i + 1} of ${session.length}`),
      el("span", {}, `Score ${state.correct}`)
    );
    progress.firstChild.style.width = `${(state.i / session.length) * 100}%`;
  }

  function showQuestion() {
    state.answered = false;
    drawProgress();
    const item = session[state.i];

    const optionsWrap = el("div", { class: "options" });
    item.order.forEach((origIdx, pos) => {
      const btn = el("button", { class: "option", type: "button" }, [
        el("span", { class: "key" }, OPT_KEYS[pos] + "."),
        el("span", {}, item.q.options[origIdx])
      ]);
      btn.addEventListener("click", () => choose(pos, item, optionsWrap, fb));
      optionsWrap.appendChild(btn);
    });

    const fb = el("div", { class: "feedback" });
    const nextBtn = el("button", { class: "btn btn-primary", type: "button" },
      state.i === session.length - 1 ? "See results" : "Next question →");
    nextBtn.addEventListener("click", () => {
      state.i++;
      if (state.i >= session.length) showResult();
      else showQuestion();
    });
    const actions = el("div", { class: "quiz-actions" }, nextBtn);
    actions.style.display = "none";

    const card = el("div", { class: "question" }, [
      el("p", { class: "q-text" }, item.q.q),
      optionsWrap,
      fb,
      actions
    ]);
    card._actions = actions;
    slot.innerHTML = "";
    slot.appendChild(card);
  }

  function choose(pos, item, optionsWrap, fb) {
    if (state.answered) return;
    state.answered = true;
    const isCorrect = item.correctPositions.includes(pos);
    if (isCorrect) state.correct++;
    else state.missed.push(item.idx);
    recordAnswer(qid(subject, paper, chapter, item.idx), isCorrect);

    [...optionsWrap.children].forEach((btn, p2) => {
      btn.disabled = true;
      if (item.correctPositions.includes(p2)) {
        btn.classList.add("correct");
        btn.appendChild(el("span", { class: "mark" }, "✓"));
      } else if (p2 === pos) {
        btn.classList.add("wrong");
        btn.appendChild(el("span", { class: "mark" }, "✗"));
      }
    });

    const multi = item.correctPositions.length > 1;
    fb.className = "feedback show " + (isCorrect ? "ok" : "no");
    fb.innerHTML = "";
    let head = isCorrect ? "✅ Correct!" : "❌ Not quite.";
    if (multi) head += " (this question has more than one correct answer)";
    fb.appendChild(el("div", {}, head));
    if (item.q.explanation) {
      fb.appendChild(el("div", { class: "why", html: `<b>Why:</b> ${item.q.explanation}` }));
    }
    const card = slot.firstChild;
    card._actions.style.display = "flex";
    card._actions.querySelector(".btn").focus();
  }

  function showResult() {
    progress.firstChild.style.width = "100%";
    bar.innerHTML = "";
    const pct = Math.round((state.correct / session.length) * 100);
    const msg =
      pct === 100 ? "Perfect — you've nailed this set! 🎯" :
      pct >= 70 ? "Solid work. A quick review of the misses will lock it in." :
      "Keep going — repetition is how it sticks. 💪";

    const actions = el("div", { class: "btn-row" });
    if (state.missed.length) {
      const reviewBtn = el("button", { class: "btn btn-primary", type: "button" },
        `Review ${state.missed.length} missed`);
      reviewBtn.addEventListener("click", () => {
        slot.innerHTML = "";
        bar.innerHTML = "";
        app.innerHTML = "";
        renderQuiz(subject, paper, chapter, state.missed.slice());
      });
      actions.appendChild(reviewBtn);
    }
    const againBtn = el("button", { class: "btn btn-ghost", type: "button" }, "Restart chapter");
    againBtn.addEventListener("click", () => { app.innerHTML = ""; renderQuiz(subject, paper, chapter); });
    actions.appendChild(againBtn);
    actions.appendChild(el("a", { class: "btn btn-ghost", href: `#/${subject}/${paper}` }, "Other chapters"));

    slot.innerHTML = "";
    slot.appendChild(el("div", { class: "result" }, [
      el("div", { class: "score", html: `${pct}<small>%</small>` }),
      el("p", {}, `${state.correct} / ${session.length} correct`),
      el("p", {}, msg),
      actions
    ]));
  }

  showQuestion();
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
render();
