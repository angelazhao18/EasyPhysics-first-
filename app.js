const main = document.querySelector("main");
const modes = ["home", "learn", "practice", "quiz", "cards", "credits"];
const coreQuiz = chapters.flatMap((chapter, index) =>
  units[index].quiz.map((question, sectionIndex) => ({ question, index, sectionIndex }))
);
const storageKey = "motionlab-progress-v2";

let progress = { lessons: [], practice: [], best: null };
try {
  const saved = JSON.parse(localStorage.getItem(storageKey));
  const previous = saved ? null : JSON.parse(localStorage.getItem("motionlab-progress-v1"));
  if (saved) progress = saved;
  if (previous) {
    progress.lessons = previous.lessons.map(index => index + chapters.length);
    progress.practice = previous.practice.map(id => {
      const [index, problem] = id.split("/");
      return `${Number(index) + chapters.length}/${problem}`;
    });
  }
} catch {
  // The site remains usable when storage is unavailable.
}

let mode;
let unitIndex = 0;
let sectionIndex = null;
let practiceIndex = 0;
let quizScope = null;
let quiz = coreQuiz;
const practiceAnswers = new Map();
let quizAnswers = new Map();
let quizSubmitted = false;
let cardIndex = 0;
let revealed = false;
let cardScope = null;
const lab = { push: 10, friction: 4, mass: 2 };

function save() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(progress));
  } catch {
    // Progress is still available in memory for this visit.
  }
}

function heading(tag, title, description) {
  return `<div class="page-heading"><p class="eyebrow">${tag}</p><h1>${title}</h1><p>${description}</p></div>`;
}

function progressStrip() {
  return `
    <section class="progress-strip" aria-label="Your progress">
      <div><span>YOUR PROGRESS</span><small>Saved in this browser when storage is available</small></div>
      <div><strong>${progress.lessons.length}/${units.length}</strong><small>Lessons completed</small></div>
      <div><strong>${progress.practice.length}/${units.reduce((total, unit) => total + unit.practice.length, 0)}</strong><small>Practice problems solved</small></div>
      <div><strong>${progress.best === null ? "—" : progress.best + "/" + coreQuiz.length}</strong><small>Best cumulative quiz score</small></div>
    </section>`;
}

function home() {
  const destinations = [
    ["learn", "Concepts", "Read short lessons and see each idea worked out.", "01", "mint"],
    ["practice", "Practice Problems", "Try a problem, get an explanation, and retry.", "02", "blue"],
    ["quiz", "Quiz", "Check one chapter or all four, then review your answers.", "03", "mint"],
    ["cards", "Flashcards", "Flip terms and definitions to practice recall.", "04", "blue"]
  ];
  return `<section class="home-hero">
    <div>
      <p class="eyebrow">UNIVERSITY PHYSICS · CHAPTERS 1–4</p>
      <h1>Build your physics intuition.</h1>
      <p>Start with units and vectors, then use them to explain how objects move in one, two, and three dimensions.</p>
      <a class="btn" href="#learn">Start with measurement →</a>
    </div>
    <svg viewBox="0 0 300 180" class="home-diagram" aria-hidden="true">
      <defs>
        <pattern id="home-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#bfd1d2"/></pattern>
        <marker id="home-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0L7 3.5L0 7Z" fill="#315b69"/></marker>
      </defs>
      <rect width="300" height="180" rx="12" fill="#e6eff0"/>
      <rect width="300" height="180" rx="12" fill="url(#home-grid)"/>
      <path d="M46 138H252M54 145V35" fill="none" stroke="#74949a"/>
      <path d="M54 138H222V58" fill="none" stroke="#6d9585" stroke-width="2" stroke-dasharray="5 5"/>
      <path d="M54 138L222 58" fill="none" stroke="#315b69" stroke-width="3" marker-end="url(#home-arrow)"/>
      <text x="129" y="153">x component</text><text x="232" y="101">y</text><text x="134" y="88">vector</text>
    </svg>
  </section>
  <section class="home-section"><p class="eyebrow">STUDY MODES</p><h2>Choose how to study</h2>
    <div class="home-grid">${destinations.map(([page, title, description, number, theme]) => `
      <a class="home-card" href="#${page}"><span class="lesson-number ${theme}">${number}</span><h3>${title}</h3><p>${description}</p><strong>Open →</strong></a>
    `).join("")}</div>
  </section>
  <section class="home-section"><p class="eyebrow">CURRICULUM</p><h2>Jump to a chapter</h2>
    <nav class="chapter-shortcuts" aria-label="Chapter shortcuts">${chapters.map((chapter, index) =>
      `<a href="#learn/${index}"><strong>${index + 1}.</strong> ${chapter.title} →</a>`
    ).join("")}</nav>
  </section>
  ${progressStrip()}`;
}

function unitPicker() {
  const link = (unit, index) => `<a href="#${mode}/${index}" ${index === unitIndex ? 'aria-current="page"' : ""}>${unit.label || unit.title}</a>`;
  return `<nav class="unit-picker" aria-label="Physics chapters">
    ${mode === "quiz" ? `<a href="#quiz" ${unitIndex === null ? 'aria-current="page"' : ""}>Cumulative</a>` : ""}
    ${units.slice(0, chapters.length).map(link).join("")}
  </nav>
  <details class="extra-topics" ${unitIndex >= chapters.length ? "open" : ""}>
    <summary>Extra review</summary>
    <nav class="unit-picker" aria-label="Extra review topics">${units.slice(chapters.length).map((unit, index) => link(unit, index + chapters.length)).join("")}</nav>
  </details>`;
}

function lessonLink(index, section) {
  return `#learn/${index}${units[index].sections ? "/" + section : ""}`;
}

function chapterLessons(unit) {
  return `<div class="lesson-list">${unit.sections.map(([number, title, [intro, points], example, terms], index) => `
    <details class="lesson" id="lesson-${index}" ${index === (sectionIndex ?? 0) ? "open" : ""}>
      <summary><span class="lesson-number ${unit.theme}">${number}</span> ${title}</summary>
      <div class="lesson-body">
        <p>${intro}</p>
        <ul class="lesson-points">${points.map(([label, text]) => `<li><strong>${label}.</strong> ${text}</li>`).join("")}</ul>
        <div class="worked"><p class="eyebrow">WORKED EXAMPLE</p><p>${example}</p></div>
        <dl class="terms">${terms.map(([term, definition]) => `<div><dt>${term}</dt><dd>${definition}</dd></div>`).join("")}</dl>
        <a class="quiet" href="#practice/${unitIndex}/${index}">Practice section ${number} →</a>
      </div>
    </details>`).join("")}</div>`;
}

function forceLab() {
  const controls = [
    ["push", "Push to the left", "N", 0, 20],
    ["friction", "Sliding friction to the right", "N", 0, 20],
    ["mass", "Box mass", "kg", 1, 10]
  ];
  return `<section class="panel lab">
    <p class="eyebrow">INTERACTIVE LAB</p><h2>Which way will the box accelerate?</h2>
    <p>The box is sliding left at this instant. Change the forces and mass to see what happens to its acceleration.</p>
    <div class="lab-grid">
      <div>${controls.map(([key, label, unit, min, max]) => `
        <div class="slider"><label for="${key}">${label}</label><output id="${key}-value" for="${key}"></output>
        <input type="range" id="${key}" data-lab="${key}" data-unit="${unit}" min="${min}" max="${max}" value="${lab[key]}"></div>`).join("")}</div>
      <div class="lab-display">
        <svg viewBox="0 0 320 118" aria-hidden="true">
          <defs><marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6Z" fill="#37696d"/></marker></defs>
          <path d="M20 93H300" stroke="#82a59a" stroke-width="2"/>
          <rect x="126" y="37" width="68" height="55" rx="8" fill="#c3ded1" stroke="#37696d" stroke-width="2"/>
          <path id="push-arrow" stroke="#37696d" stroke-width="4" marker-end="url(#arrow)"/>
          <path id="friction-arrow" stroke="#37696d" stroke-width="4" marker-end="url(#arrow)"/>
        </svg>
        <p id="lab-result" aria-live="polite"></p>
      </div>
    </div>
  </section>`;
}

function updateLab() {
  main.querySelectorAll("[data-lab]").forEach(input => {
    document.getElementById(input.id + "-value").textContent = lab[input.id] + " " + input.dataset.unit;
  });
  document.getElementById("push-arrow").setAttribute("d", lab.push ? `M124 64H${119 - lab.push * 4}` : "");
  document.getElementById("friction-arrow").setAttribute("d", lab.friction ? `M196 64H${201 + lab.friction * 4}` : "");
  const net = lab.friction - lab.push;
  const direction = net < 0 ? "left" : "right";
  const acceleration = Math.round(Math.abs(net / lab.mass) * 100) / 100;
  document.getElementById("lab-result").textContent = net
    ? `Net force: ${Math.abs(net)} N ${direction}. Acceleration: ${acceleration} m/s² ${direction}.`
    : "Net force: 0 N. Acceleration: 0 m/s². The box keeps sliding left at constant velocity.";
}

function learn() {
  const unit = units[unitIndex];
  return heading("01 / CONCEPTS", "Physics concepts", "Explore Chapters 1–4 of University Physics Volume 1 through short lessons and worked examples.")
    + unitPicker() + `
    <section class="panel">
      <div class="section-title"><h2>${unit.title}</h2>${unit.sections ? `<span class="formula ${unit.theme}">Chapter ${unitIndex + 1}</span>` : `<span class="formula ${unit.theme}">${unit.formula}</span>`}</div>
      ${unit.sections ? chapterLessons(unit) : `<div class="concept-grid">${unit.concepts.map(([title, body]) => `<div><h3>${title}</h3><p>${body}</p></div>`).join("")}</div>
      <div class="worked"><p class="eyebrow">WORKED EXAMPLE</p><p>${unit.example}</p></div>`}
      <div class="actions"><button class="btn" data-action="complete" ${progress.lessons.includes(unitIndex) ? "disabled" : ""}>${progress.lessons.includes(unitIndex) ? "✓ Lesson completed" : "Mark lesson complete"}</button><a class="quiet" href="#practice/${unitIndex}">Practice ${unit.title.toLowerCase()} →</a></div>
    </section>${unit.title === "Forces" ? forceLab() : ""}` + progressStrip()
    + `<p class="textbook-link"><a href="https://openstax.org/books/university-physics-volume-1/pages/1-introduction">Read the OpenStax textbook →</a></p>`;
}

function questionUI(question, name, choice, graded = false) {
  const [prompt, options, correct, explanation] = question;
  return `<fieldset ${graded ? "disabled" : ""}>
    <legend tabindex="-1">${prompt}</legend>
    ${options.map((option, index) => `<label class="option ${graded && index === correct ? "correct" : ""} ${graded && index === choice && choice !== correct ? "incorrect" : ""}"><input type="radio" name="${name}" value="${index}" ${index === choice ? "checked" : ""}><span>${option}</span>${graded && index === correct ? '<span class="option-note">Correct answer</span>' : ""}</label>`).join("")}
  </fieldset>
  ${graded ? `<div class="feedback" tabindex="-1"><strong>${choice === correct ? "Correct!" : "Incorrect."}</strong><p>${explanation}</p></div>` : ""}`;
}

function practiceId() {
  return `${unitIndex}/${practiceIndex}`;
}

function answerKey(questions) {
  return `<details class="answer-key"><summary>Answer key</summary>
    <ol>${questions.map(([prompt, options, correct, explanation]) =>
      `<li><p><strong>${prompt}</strong></p><p>Correct answer: ${options[correct]}</p><p>${explanation}</p></li>`
    ).join("")}</ol></details>`;
}

function practice() {
  const unit = units[unitIndex];
  const answer = practiceAnswers.get(practiceId());
  return heading("02 / PRACTICE", "Work through a problem", "Select an option and click Submit answer. Use Back and Next to move through the set.") + unitPicker()
    + `<section class="panel study">
      <p class="eyebrow">${unit.sections?.[practiceIndex][0] || unit.title} · Problem ${practiceIndex + 1} of ${unit.practice.length}</p>
      ${questionUI(unit.practice[practiceIndex], "practice-answer", answer?.choice, answer?.checked)}
      ${answer?.checked
        ? '<button type="button" class="quiet" data-action="practice-retry">Retry problem</button>'
        : `<button type="button" class="btn" data-action="practice-submit" ${answer ? "" : "disabled"}>Submit answer</button>`}
      <div class="actions">
        <button type="button" class="btn" data-action="practice-back" ${practiceIndex === 0 ? "disabled" : ""}>← Back</button>
        <button type="button" class="btn" data-action="practice-next" ${practiceIndex === unit.practice.length - 1 ? "disabled" : ""}>Next →</button>
      </div>
      <a class="quiet" href="${lessonLink(unitIndex, practiceIndex)}">Review the lesson →</a>
      ${answerKey(unit.practice)}
    </section>`;
}

function scoreQuiz() {
  return quiz.filter(({ question }, index) => quizAnswers.get(index) === question[2]).length;
}

function quizPage() {
  const title = heading("03 / QUIZ", "Check what stuck", "Choose one chapter or take the cumulative quiz for Chapters 1–4.") + unitPicker();
  if (quizSubmitted) {
    return title + `<section class="panel study"><h2 tabindex="-1">You scored ${scoreQuiz()} out of ${quiz.length}</h2><button type="button" class="btn" data-action="quiz-retake">Retake quiz</button>
    <h3 class="review-title">Answer key and your results</h3>${quiz.map(({ question, index: chapterIndex, sectionIndex }, index) => {
      const unit = units[chapterIndex];
      const [prompt, options, correct, explanation] = question;
      const answer = quizAnswers.get(index);
      return `<details class="review" ${answer === correct ? "" : "open"}><summary>${answer === correct ? "✓ Correct" : "× Missed"} · ${unit.sections?.[sectionIndex][0] || unit.title} · Q${index + 1}</summary><p><strong>${prompt}</strong></p><p>Your answer: ${options[answer]}<br>Correct answer: ${options[correct]}</p><p>${explanation}</p><a class="quiet" href="${lessonLink(chapterIndex, sectionIndex)}">Review the lesson →</a></details>`;
    }).join("")}</section>`;
  }
  return title + `<section class="panel study">
    <h2>${unitIndex === null ? "Cumulative quiz" : units[unitIndex].title}</h2>
    <p>Answer all ${quiz.length} questions to unlock Submit quiz.</p>
    ${quiz.map(({ question, index: chapterIndex, sectionIndex }, index) => {
      const unit = units[chapterIndex];
      return `<div class="quiz-question">
        <p class="eyebrow">${unit.sections?.[sectionIndex][0] || unit.title} · Question ${index + 1} of ${quiz.length}</p>
        ${questionUI(question, "quiz-" + index, quizAnswers.get(index))}
      </div>`;
    }).join("")}
    <p id="quiz-progress" aria-live="polite">${quizAnswers.size} of ${quiz.length} answered</p>
    <button type="button" class="btn" data-action="quiz-submit" ${quizAnswers.size === quiz.length ? "" : "hidden"}>Submit quiz</button>
  </section>`;
}

function cardPage() {
  const unit = units[unitIndex];
  const card = unit.concepts[cardIndex];
  return heading("04 / FLASHCARDS", "Recall the essentials", "Choose a chapter, say each definition in your own words, then flip the card.") + unitPicker() + `
    <section class="panel study">
      <p class="eyebrow">${unit.title} · Card ${cardIndex + 1} of ${unit.concepts.length}</p>
      <div class="flashcard ${unit.theme}" aria-live="polite"><small>${revealed ? "DEFINITION" : "TERM"}</small><strong>${card[revealed ? 1 : 0]}</strong></div>
      <div class="actions card-actions"><button class="quiet" data-action="card-prev">← Previous</button><button class="btn" data-action="flip">${revealed ? "Show term" : "Reveal definition"}</button><button class="quiet" data-action="card-next">Next →</button></div>
    </section>`;
}

function credits() {
  return heading("ABOUT EASY PHYSICS", "Credits", "The people and textbook behind EasyPhysics.")
    + `<section class="panel study">
      <h2>Curriculum source</h2>
      <p>The chapter sequence and titles for Chapters 1–4 come from <a class="source-link" href="https://openstax.org/books/university-physics-volume-1/pages/1-introduction">OpenStax’s <cite>University Physics Volume 1</cite></a>.</p>
      <p>EasyPhysics’s lesson explanations, examples, and questions were written specifically for this project.</p>
    </section>
    <section class="panel study">
      <h2>Developers</h2>
      <ul class="lesson-points">
        <li>Angela Zhao</li>
        <li><strong>Joseph Benjamin Viola</strong></li>
      </ul>
    </section>`;
}

function render(focus) {
  const pages = { home, learn, practice, quiz: quizPage, cards: cardPage, credits };
  main.innerHTML = pages[mode]();
  if (mode === "learn" && units[unitIndex].title === "Forces") updateLab();
  document.querySelectorAll(".bar nav a, .footer a").forEach(link => {
    if (link.hash === "#" + mode) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  if (focus) (main.querySelector(focus) || main).focus();
}

function route() {
  const [page, unit, section] = location.hash.slice(1).split("/");
  if (page === "main" && mode) {
    main.focus();
    return;
  }
  const nextMode = modes.includes(page) ? page : "home";
  const validUnit = /^\d+$/.test(unit) && Number(unit) < units.length;
  const nextUnit = validUnit ? Number(unit) : nextMode === "quiz" ? null : 0;
  const validSection = /^\d+$/.test(section) && Number(section) < (units[nextUnit]?.sections?.length ?? 0);
  const nextSection = validSection ? Number(section) : null;
  if (mode !== nextMode || unitIndex !== nextUnit || sectionIndex !== nextSection) {
    practiceIndex = nextSection ?? 0;
  }
  if (nextMode === "quiz" && quizScope !== nextUnit) {
    quizScope = nextUnit;
    quiz = nextUnit === null ? coreQuiz : units[nextUnit].quiz.map((question, sectionIndex) =>
      ({ question, index: nextUnit, sectionIndex }));
    quizAnswers.clear();
    quizSubmitted = false;
  }
  if (nextMode === "cards" && cardScope !== nextUnit) {
    cardScope = nextUnit;
    cardIndex = 0;
    revealed = false;
  }
  mode = nextMode;
  unitIndex = nextUnit;
  sectionIndex = nextSection;
  if (mode === "learn" && sectionIndex !== null) {
    const target = `#lesson-${sectionIndex}`;
    render(target + " summary");
    main.querySelector(target)?.scrollIntoView();
  } else {
    render("#main");
    window.scrollTo(0, 0);
  }
}

main.addEventListener("input", event => {
  const key = event.target.dataset.lab;
  if (key) {
    lab[key] = Number(event.target.value);
    updateLab();
  }
});

main.addEventListener("change", event => {
  const { name, value, checked } = event.target;
  if (!checked) return;
  if (mode === "practice" && name === "practice-answer") {
    practiceAnswers.set(practiceId(), { choice: Number(value), checked: false });
    main.querySelector('[data-action="practice-submit"]').disabled = false;
  }
  if (mode === "quiz" && name.startsWith("quiz-")) {
    quizAnswers.set(Number(name.slice(5)), Number(value));
    main.querySelector("#quiz-progress").textContent = `${quizAnswers.size} of ${quiz.length} answered`;
    main.querySelector('[data-action="quiz-submit"]').hidden = quizAnswers.size !== quiz.length;
  }
});

main.addEventListener("click", event => {
  const action = event.target.closest("button")?.dataset.action;
  if (!action) return;
  let focus = `[data-action="${action}"]`;
  switch (action) {
    case "complete":
      if (!progress.lessons.includes(unitIndex)) progress.lessons.push(unitIndex);
      save();
      focus = ".actions a";
      break;
    case "practice-submit": {
      const id = practiceId();
      const answer = practiceAnswers.get(id);
      if (!answer || answer.checked) return;
      answer.checked = true;
      if (answer.choice === units[unitIndex].practice[practiceIndex][2] && !progress.practice.includes(id)) {
        progress.practice.push(id);
        save();
      }
      focus = ".feedback";
      break;
    }
    case "practice-next":
      if (practiceIndex >= units[unitIndex].practice.length - 1) return;
      practiceIndex++;
      focus = "legend";
      break;
    case "practice-back":
      if (practiceIndex === 0) return;
      practiceIndex--;
      focus = "legend";
      break;
    case "practice-retry":
      practiceAnswers.delete(practiceId());
      focus = "legend";
      break;
    case "quiz-retake":
      quizAnswers.clear();
      quizSubmitted = false;
      focus = "legend";
      break;
    case "quiz-submit":
      if (quizAnswers.size !== quiz.length || quizSubmitted) return;
      quizSubmitted = true;
      if (quizScope === null) {
        progress.best = Math.max(progress.best ?? 0, scoreQuiz());
        save();
      }
      focus = ".study h2";
      break;
    case "flip":
      revealed = !revealed;
      break;
    case "card-next":
    case "card-prev":
      const count = units[unitIndex].concepts.length;
      cardIndex = (cardIndex + (action === "card-next" ? 1 : -1) + count) % count;
      revealed = false;
      break;
  }
  render(focus);
});

window.addEventListener("hashchange", route);
route();
