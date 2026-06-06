# Med Students MCQ

A static MCQ practice site for medical students. No build step — plain HTML, CSS and
vanilla JavaScript, deployed on GitHub Pages.

**Live site:** https://sarikashirolkar.github.io/Med-Students-MCQ-web/

## Structure

```
Home → Micro · Patho · Pharma        (only Micro is live)
  Micro → Paper 1 · Paper 2          (only Paper 1 is live)
    Paper 1 → General Microbiology
              Immunology
              CVS & Blood
              GIT & Hepatobiliary
              Skin & Soft Tissue
```

## How the game helps you *remember* (not byheart)

- **Shuffled options & questions** — the position of the right answer changes every
  time, so you can't memorise "the answer is C".
- **Spaced repetition** — questions you get wrong come back sooner and more often
  (tracked in your browser via `localStorage`).
- **Immediate feedback + explanations** — every answer shows correct/wrong instantly,
  with an optional "Why" note.
- **Review missed** — after each round you can re-attempt just the ones you got wrong.

## Adding questions

Open [`js/data.js`](js/data.js) and add objects to a chapter's `questions` array:

```js
{
  q: "Question text?",
  options: ["First", "Second", "Third", "Fourth"],
  answer: 2,                        // index of the correct option (0 = first)
  explanation: "Why it's correct"   // optional — use "" if none
}
```

The on-screen option order is shuffled automatically, so `answer` always refers to the
original order above. Question and answer text are never modified by the app.

## Local preview

Just open `index.html` in a browser, or run a tiny server:

```
python3 -m http.server 8000
```

then visit http://localhost:8000.
