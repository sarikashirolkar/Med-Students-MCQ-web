/*
 * ============================================================
 *  QUIZ DATA
 * ============================================================
 *
 *  HOW TO ADD QUESTIONS
 *  --------------------
 *  Find the chapter you want, and add objects to its `questions` array.
 *  Each question looks like this:
 *
 *      {
 *        q: "What is the question text?",
 *        options: ["First choice", "Second choice", "Third choice", "Fourth choice"],
 *        answer: 2,                       // index of the correct option (0 = first)
 *        explanation: "Why it is correct" // OPTIONAL — leave "" if none
 *      }
 *
 *  Notes:
 *   - `answer` is the position in the ORIGINAL options array. The app shuffles
 *     options on screen automatically, so don't worry about display order.
 *   - You can have any number of options (2, 3, 4, 5...).
 *   - Do NOT edit the question or answer text — just paste them in.
 * ============================================================
 */

const QUIZ_DATA = {
  micro: {
    name: "Microbiology",
    emoji: "🦠",
    enabled: true,
    papers: {
      paper1: {
        name: "Paper 1",
        enabled: true,
        chapters: {
          "general-microbiology": {
            name: "General Microbiology",
            emoji: "🔬",
            questions: [
              // ── SAMPLE question so you can see the game working. Delete it once
              //    you paste in the real ones. ──
              {
                q: "Which structure is responsible for bacterial motility?",
                options: ["Pili", "Flagella", "Capsule", "Cell wall"],
                answer: 1,
                explanation: "Flagella are the whip-like appendages that drive bacterial movement. Pili are for adhesion/conjugation, the capsule is protective/anti-phagocytic, and the cell wall gives shape and rigidity."
              }
            ]
          },
          "immunology": {
            name: "Immunology",
            emoji: "🛡️",
            questions: []
          },
          "cvs-blood": {
            name: "CVS & Blood",
            emoji: "🫀",
            questions: []
          },
          "git-hepatobiliary": {
            name: "GIT & Hepatobiliary",
            emoji: "🩺",
            questions: []
          },
          "skin-soft-tissue": {
            name: "Skin & Soft Tissue",
            emoji: "🧫",
            questions: []
          }
        }
      },
      paper2: {
        name: "Paper 2",
        enabled: false,
        chapters: {}
      }
    }
  },

  patho: {
    name: "Pathology",
    emoji: "🧪",
    enabled: false,
    papers: {}
  },

  pharma: {
    name: "Pharmacology",
    emoji: "💊",
    enabled: false,
    papers: {}
  }
};
