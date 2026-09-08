# ThermoForge — Science Olympiad Thermodynamics Practice

A static GitHub Pages site for studying and practicing Science Olympiad Thermodynamics. No build step, npm install, database, or server is required.

## What is in this version

### 1. 898-question Division C bank / 815-question Division B bank
The fixed bank contains original questions written for this site. It includes:

- multiple choice
- short answer
- calculations
- heating-curve / phase-diagram / P–V diagram questions
- history / scientist recall
- free response and explanation questions

The old invitational / tryout tests supplied with the project were used only to model the **style and mixture** of Science Olympiad questions. The website does not copy those tests into the bank.

`bank.js` contains the expanded finite bank. `app.js` also has a smaller set of parameterized generators for extra practice variety.

### 2. Exact full-test composition
In **Full Test**, choose exactly how many of each type you want:

- MCQ
- short answer
- calculations
- diagram / graph questions
- FRQs

The total is calculated automatically. You can also choose Division B/C, difficulty, and timer length.

**Draft-area coverage** is on by default. When the chosen type mix makes it possible, the generator guarantees at least three questions from every applicable draft-rule area. If your exact type mix cannot do that, the site explains why instead of silently changing your requested counts.

### 3. 16 study-guide documents with mini quizzes
The `learn/` folder contains separate pages for the important subtopics:

1. Thermodynamic Systems & Properties
2. Temperature Scales & the Zeroth Law
3. Specific Heat, Heat Capacity & Calorimetry
4. Phase Changes & Heating Curves
5. Phase Diagrams
6. Ideal Gas Law
7. Conduction, Convection & Radiation
8. Thermal Conductivity & Steady Conduction
9. Thermodynamic Processes & the First Law
10. Heat Engines, Carnot Cycle & the Second Law
11. History of Thermodynamics
12. Blackbody Radiation & Stefan–Boltzmann Law
13. Third Law & Absolute Zero
14. Entropy (Division C)
15. Enthalpy (Division C)
16. Device-Relevant Thermal Modeling

Every guide includes:

- why the subsection matters
- concise lesson notes
- formula / memory box
- worked example
- mini quiz with hidden answers
- links to real educational or scientific sources such as OpenStax, NIST, NASA, APS, and Nobel Prize material
- a link back to randomized practice for the matching rule area

### 4. Question-bank browser
Open **Question Bank** to browse/filter the fixed bank by:

- rule topic
- question type
- difficulty
- keyword search

Answers and rubrics stay hidden until you reveal them.

### 5. Topic practice + progress
Topic Practice still supports:

- individual rule areas
- MCQ / short / calculation / FRQ / diagram filtering
- difficulty filtering
- immediate solutions and FRQ rubrics
- local progress, accuracy, and streak tracking via `localStorage`

## Files

```text
scioly-thermo-practice/
├── index.html
├── styles.css
├── study.css
├── app.js
├── bank.js
├── guides.js
├── README.md
└── learn/
    ├── systems-properties.html
    ├── temperature-zeroth-law.html
    ├── calorimetry.html
    ├── phase-changes-heating-curves.html
    ├── phase-diagrams.html
    ├── ideal-gas-law.html
    ├── heat-transfer-mechanisms.html
    ├── thermal-conductivity.html
    ├── first-law-processes.html
    ├── engines-carnot-second-law.html
    ├── history.html
    ├── blackbody-radiation.html
    ├── third-law.html
    ├── entropy.html
    ├── enthalpy.html
    └── device-thermal-modeling.html
```

## Deploy to GitHub Pages

1. Put the contents of this folder at the root of your GitHub repository.
2. Push to `main`.
3. Open **GitHub → repository Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose `main` and `/ (root)`.
6. Save.

Because every link is relative and there is no backend, it works from a normal GitHub Pages project URL.

## Editing the bank

Each question object follows the same basic format:

```js
{
  id: "unique-id",
  topic: "heat",
  type: "calc",
  difficulty: 2,
  prompt: "...",
  answer: 123.4,
  explanation: "...",
  numeric: true,
  tolerance: 1,
  unit: "J"
}
```

Valid topic IDs are:

```text
systems
phases
heat
processes
history
radiation
entropy
```

Valid types are:

```text
mcq
short
calc
diagram
frq
```

## Notes

- Entropy and enthalpy are hidden when Division B is selected.
- Progress is browser-local; there is no login or tracking server.
- FRQs are self-graded against a rubric because correct explanations can be worded in many ways.
- The site is an independent study tool, not an official Science Olympiad product.
