const TEACHER_EMAIL = "kevin.mccann@greececsd.org";
const APPS_SCRIPT_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyhFV6QJmNiH-ny6So0C-xv7_49akwmBYcI3OMVvqk81MqCAOX-72Hf3GD2KxqGp7Bmdg/exec";

const FUNCTIONS = [
  "Economic",
  "Protection",
  "Education",
  "Recreation",
  "Affection and Belonging",
  "Adaptation",
];

const functionNotes = {
  Economic: {
    definition: "Meeting material needs such as food, housing, clothing, supplies, and money planning.",
    example: "A family builds a budget and makes sure school supplies, winter coats, and meals are covered.",
    consequence: "Family members may go without food, stable housing, health care, or chances to join activities.",
    community: "Schools, food banks, and support programs may need to help when families cannot meet economic needs.",
  },
  Protection: {
    definition: "Keeping family members physically and emotionally safe, including health and emergency care.",
    example: "A parent schedules checkups, keeps a first aid kit stocked, and teaches what to do in a fire.",
    consequence: "Children may face harm with no adult help, and it becomes harder to learn, connect, or adapt.",
    community: "Teachers, counselors, hospitals, and child protection services may need to step in.",
  },
  Education: {
    definition: "Teaching values, culture, school habits, life skills, and practical knowledge.",
    example: "A grandparent helps a child read each night or teaches cultural recipes and family stories.",
    consequence: "Children may fall behind in school, miss guidance, or feel disconnected from their identity.",
    community: "When many families cannot support learning, the whole community's future workforce is affected.",
  },
  Recreation: {
    definition: "Building connection through play, relaxation, traditions, and shared fun.",
    example: "A family keeps a weekly game night, park visit, movie night, or cooking tradition.",
    consequence: "Relationships can become only about chores and needs, and children may seek connection elsewhere.",
    community: "Parks, clubs, youth programs, and community centers often fill the need for safe connection and fun.",
  },
  "Affection and Belonging": {
    definition: "Helping members feel loved, valued, comforted, and emotionally secure.",
    example: "A parent comforts a child after a failure and reminds them they are loved and valued.",
    consequence: "Children may struggle to trust others, manage emotions, or build healthy relationships.",
    community: "Counselors, therapists, and social workers often help people heal from a lack of belonging.",
  },
  Adaptation: {
    definition: "Adjusting roles, routines, and expectations when life changes or stress appears.",
    example: "After a job loss or move, family members make a new plan and share responsibilities.",
    consequence: "Responsibilities may become unfair, routines may fall apart, and members can feel alone in crisis.",
    community: "During disasters, downturns, or health crises, families that adapt well help communities recover faster.",
  },
};

const healthyTraits = [
  "Trust",
  "Respect",
  "Empathy",
  "Clear communication",
  "Healthy boundaries",
  "Fair expectations",
  "Repair after conflict",
  "Shared problem-solving",
];

const sortingCards = [
  { id: 1, text: "Dad picks up extra shifts so the family can afford school supplies and winter coats.", primary: "Economic" },
  { id: 2, text: "Mom schedules yearly checkups for all the kids and keeps a first aid kit fully stocked.", primary: "Protection" },
  { id: 3, text: "Grandpa sits with Maya every night to help her practice reading. She is starting to love books.", primary: "Education", overlap: ["Affection and Belonging"] },
  { id: 4, text: "On Sundays, the whole family goes to the park to play frisbee. Even Grandma comes.", primary: "Recreation", overlap: ["Affection and Belonging"] },
  { id: 5, text: "When Lily cried after failing her test, her mom held her and said, 'I'm proud of you for trying.'", primary: "Affection and Belonging" },
  { id: 6, text: "When dad lost his job, the family made a new budget together and cut back on extras until things improved.", primary: "Adaptation", overlap: ["Economic"] },
  { id: 7, text: "The family has a rule: no one goes to bed angry. They talk things out first.", primary: "Affection and Belonging", overlap: ["Adaptation"] },
  { id: 8, text: "Mom takes the whole family to get flu shots every fall.", primary: "Protection" },
  { id: 9, text: "Dad teaches his son how to fix simple things around the house and change a bike tire.", primary: "Education" },
  { id: 10, text: "Every Saturday, the family cooks together and tries a recipe from a different country.", primary: "Recreation", overlap: ["Education"] },
  { id: 11, text: "When grandma got sick, family members took turns staying with her so she was never alone.", primary: "Affection and Belonging", overlap: ["Protection"] },
  { id: 12, text: "Parents set up a savings account for their daughter's future before she started school.", primary: "Economic" },
  { id: 13, text: "When the family moved, the older kids helped the younger ones adjust and make friends.", primary: "Adaptation" },
  { id: 14, text: "Mom reads to the kids before bed, even now that they can read on their own.", primary: "Education", overlap: ["Affection and Belonging"] },
  { id: 15, text: "Dad checks the smoke detectors every month and taught the kids what to do in a fire.", primary: "Protection", overlap: ["Education"] },
  { id: 16, text: "The family has a weekly game night. No phones allowed.", primary: "Recreation", overlap: ["Affection and Belonging"] },
  { id: 17, text: "Grandma teaches the kids traditional recipes and stories so they stay connected to their culture.", primary: "Education", overlap: ["Affection and Belonging"] },
  { id: 18, text: "When mom went back to school, everyone took on extra chores so the family could adjust.", primary: "Adaptation", overlap: ["Economic"] },
];

const healthyScenarios = [
  { id: 1, answer: "HEALTHY", text: "When Jordan gets in trouble at school, his parents ground him and then sit down to talk about what happened and why." },
  { id: 2, answer: "UNHEALTHY", text: "In the Garza family, the kids know not to bother dad when he is in a bad mood. They have learned to stay out of his way." },
  { id: 3, answer: "HEALTHY", text: "The Kim family has dinner together three nights a week. Each person shares one good thing and one hard thing from their day." },
  { id: 4, answer: "UNHEALTHY", text: "When Mia told her mom she was being bullied, her mom said, 'Just ignore it. You are too sensitive.'" },
  { id: 5, answer: "HEALTHY", text: "When the Torres family had money problems, the parents explained things to the kids and came up with savings ideas together." },
  { id: 6, answer: "UNHEALTHY", text: "In Marcus's house, his older brother gets to do whatever he wants, but Marcus has strict rules. No one ever talks about it." },
  { id: 7, answer: "HEALTHY", text: "After a big argument, the Rivera parents apologize to each other and to their kids. They explain that adults disagree sometimes but work it out." },
  { id: 8, answer: "UNHEALTHY", text: "Sofia's parents talk badly about each other in front of her. She feels stuck in the middle and does not know who to side with." },
  { id: 9, answer: "HEALTHY", text: "The Johnson family has a yearly camping trip. Even when times are hard, they find a way to make it happen." },
  { id: 10, answer: "HEALTHY", text: "When Elijah told his parents he felt sad a lot, they made an appointment with a counselor and went with him." },
  { id: 11, answer: "UNHEALTHY", text: "In the Parker household, nobody ever talks about problems. When something bad happens, everyone pretends it did not." },
  { id: 12, answer: "HEALTHY", text: "The Davis family has a chore chart. When someone does not do their part, they talk about it as a group and adjust." },
];

const missingCards = [
  { id: 1, family: "Reyes Family", answer: "Economic", affected: "Ana", text: "The Reyes family has enough love and laughter, but money is always tight. The kids sometimes go to school without lunch. Mom works two jobs but still struggles. The oldest child, 13-year-old Ana, stopped joining school activities because she is embarrassed about not having the right supplies or clothes." },
  { id: 2, family: "Chen Family", answer: "Protection", affected: "Max", text: "The Chen family loves spending time together, but both parents work long hours and the kids are home alone after school. 11-year-old Max has been getting stomachaches on school days. He has not told anyone that an older kid on the bus scares him daily. He does not think his parents would have time to deal with it." },
  { id: 3, family: "Walker Family", answer: "Education", affected: "Devon", text: "The Walker family keeps the TV on all evening. No one asks the kids about school or checks homework. 12-year-old Devon is falling behind in reading but has not said anything. His teacher has sent two notes home that were never read." },
  { id: 4, family: "Ortiz Family", answer: "Recreation", affected: "Sofia", text: "Both parents in the Ortiz family work long hours including weekends. The family rarely spends time together just for fun. The kids are usually on screens or alone in their rooms. 11-year-old Sofia has started saying she does not like her family much, though she cannot explain why." },
  { id: 5, family: "Morrison Family", answer: "Affection and Belonging", affected: "James", text: "The Morrison family is financially stable and the kids have everything they need. But affection is rare. Nobody says 'I love you.' Achievements go unnoticed. When 11-year-old James won a school award, his parents nodded and said, 'Good.' He stopped sharing things with them after that." },
  { id: 6, family: "Patel Family", answer: "Adaptation", affected: "younger children, older kids", text: "The Patel family recently lost their grandmother, who had cared for the younger kids after school. Now no one knows what to do. The parents are too sad to make new plans, the older kids are trying to hold everything together, and the youngest are confused and scared. Nobody is talking about what comes next." },
];

const strategies = [
  "Hold a family meeting where everyone gets a turn to speak without interruption.",
  "Create a weekly schedule together so everyone knows what to expect.",
  "Make a family budget and give kids a small role in tracking expenses.",
  "Agree on a calm-down rule: take 10 minutes before continuing an argument.",
  "Establish a no phones at dinner rule to create daily connection time.",
  "Ask a school counselor, trusted teacher, or community organization for help.",
  "Set up a weekly check-in where each person shares one feeling from the week.",
  "Assign age-appropriate chores so everyone contributes to the household.",
  "Start one simple family tradition: weekly breakfast, movie night, or a walk.",
  "Reach out to extended family or neighbors when support is needed.",
  "Seek family counseling from a professional.",
  "Talk openly about a problem instead of pretending it is not there.",
];

const fixSituations = [
  { id: 1, text: "Family members yell during arguments and say things they regret.", primary: [4], supporting: [1, 11] },
  { id: 2, text: "Kids feel like they can't talk to their parents about problems.", primary: [7], supporting: [5, 1] },
  { id: 3, text: "Money is tight and no one knows how to manage the stress.", primary: [3], supporting: [6, 10] },
  { id: 4, text: "The family never spends time together and everyone feels disconnected.", primary: [9], supporting: [5, 2] },
  { id: 5, text: "One child does all the household work while others do nothing.", primary: [8], supporting: [1] },
  { id: 6, text: "After a big change, nobody knows what their new role or routine is.", primary: [2], supporting: [1, 12] },
  { id: 7, text: "A family member is struggling with sadness and no one acknowledges it.", primary: [12], supporting: [11, 6] },
  { id: 8, text: "Parents argue about money in front of the kids without explanation.", primary: [4], supporting: [3, 12] },
];

const consequences = [
  { functionName: "Economic", text: "Members may go without food, stable housing, health care, supplies, and opportunities." },
  { functionName: "Protection", text: "Children may face harm without help, and other functions suffer because safety is missing." },
  { functionName: "Education", text: "Children may struggle in school, miss guidance, and lose connection to values or identity." },
  { functionName: "Recreation", text: "Relationships become only about duties, and members miss chances to rest, play, and connect." },
  { functionName: "Affection and Belonging", text: "Members can struggle to feel secure, trust others, manage emotions, and form healthy relationships." },
  { functionName: "Adaptation", text: "Families can become stuck during change, roles become unfair, and stress strains relationships." },
];

const caseStudy = {
  text: "The Brennan family lives in a three-bedroom house. There are four kids: Tyler (16), Jasmine (13), Marco (10), and baby Lily (2). Their mom, Diane, works full-time as a home health aide. Their dad, Robert, was laid off six months ago and has been home since.",
  goingWell: [
    "Diane and Robert have dinner with the kids every night and ask about their days.",
    "Tyler teaches Marco how to play guitar on weekends. Marco looks forward to it all week.",
    "Their church community has brought over meals and checked in regularly during the hard time.",
    "Robert now spends more time with baby Lily than he ever had with the older kids.",
  ],
  struggling: [
    "Money is tight. Jasmine stopped asking for school supplies so she does not stress her parents out.",
    "Robert sometimes snaps at the kids over small things. Afterward he feels terrible, but does not always apologize.",
    "Marco has been getting stomachaches before school. He is scared he is falling behind in reading but has told no one.",
    "Diane cannot remember the last time she did something just for fun.",
  ],
  questions: [
    { id: 1, prompt: "Which family functions are being met well? Give evidence from the story.", keywords: ["affection", "belonging", "dinner", "guitar", "church", "support", "recreation", "protection"] },
    { id: 2, prompt: "Which functions are struggling? Who is most affected and how?", keywords: ["economic", "jasmine", "protection", "education", "marco", "adaptation", "robert"] },
    { id: 3, prompt: "Identify two things that are unhealthy in this family. Explain why.", keywords: ["snaps", "apologize", "jasmine", "hiding", "marco", "silence", "diane", "unhealthy"] },
    { id: 4, prompt: "Choose two Fix It strategies that could help this family. Explain why those two specifically.", keywords: ["check-in", "budget", "openly", "counseling", "strategy", "because"] },
    { id: 5, prompt: "Overall: would you call this a healthy family? Why or why not?", keywords: ["strength", "concern", "healthy", "not", "evidence", "love", "gap"] },
  ],
};

const rankingPrompts = [
  "Which function did you rank #1? Why did you choose that one?",
  "Which function did you disagree about the most? What were the different arguments?",
  "Is there a function that cannot exist without another one? Which ones depend on each other?",
  "Could a family survive long-term if one function completely disappeared? Which would be hardest to lose?",
  "Did your ranking change as you thought through the functions? What changed your mind, if anything?",
];

const activities = [
  { id: "reference", title: "Reference", render: renderReference, score: scoreReference },
  { id: "sorting", title: "Function Sorting", render: renderSorting, score: scoreSorting },
  { id: "healthy", title: "Healthy or Unhealthy", render: renderHealthy, score: scoreHealthy },
  { id: "missing", title: "What's Missing", render: renderMissing, score: scoreMissing },
  { id: "fix", title: "Fix It", render: renderFixIt, score: scoreFixIt },
  { id: "consequence", title: "Consequences", render: renderConsequences, score: scoreConsequences },
  { id: "ranking", title: "Ranking", render: renderRanking, score: scoreRanking },
  { id: "case", title: "Case Study", render: renderCaseStudy, score: scoreCaseStudy },
];

const defaultState = {
  student: { firstName: "", lastName: "", period: "" },
  progress: {},
  referenceMode: "definition",
  sorting: {},
  healthy: {},
  missing: {},
  fix: {},
  consequence: {},
  ranking: { order: [...FUNCTIONS], responses: {} },
  caseStudy: {},
};

let state = loadState();
let activeActivity = "reference";
let lastSubmission = null;
let submissionCounter = 0;

function loadState() {
  const saved = localStorage.getItem("familyFunctionsPacket");
  if (!saved) return structuredClone(defaultState);
  try {
    const merged = mergeState(structuredClone(defaultState), JSON.parse(saved));
    if (merged.student.name && !merged.student.firstName && !merged.student.lastName) {
      const parts = merged.student.name.trim().split(/\s+/);
      merged.student.firstName = parts.shift() || "";
      merged.student.lastName = parts.join(" ");
    }
    return merged;
  } catch {
    return structuredClone(defaultState);
  }
}

function mergeState(base, saved) {
  for (const key of Object.keys(saved || {})) {
    if (saved[key] && typeof saved[key] === "object" && !Array.isArray(saved[key])) {
      base[key] = mergeState(base[key] || {}, saved[key]);
    } else {
      base[key] = saved[key];
    }
  }
  return base;
}

function saveState() {
  localStorage.setItem("familyFunctionsPacket", JSON.stringify(state));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function studentFullName() {
  return `${state.student.firstName || ""} ${state.student.lastName || ""}`.trim();
}

function wordCount(value) {
  return String(value || "").trim().split(/\s+/).filter(Boolean).length;
}

function completionPoint(value, minimum = 8) {
  return wordCount(value) >= minimum ? 1 : 0;
}

function keywordPoint(value, keywords) {
  const normalized = String(value || "").toLowerCase();
  return keywords.some((keyword) => normalized.includes(keyword.toLowerCase())) ? 1 : 0;
}

function scoreObject(points, possible) {
  return { points, possible, percent: possible ? Math.round((points / possible) * 100) : 100 };
}

function getScores() {
  const scores = {};
  for (const activity of activities) scores[activity.id] = activity.score();
  const graded = activities.filter((activity) => activity.id !== "reference");
  const points = graded.reduce((sum, activity) => sum + scores[activity.id].points, 0);
  const possible = graded.reduce((sum, activity) => sum + scores[activity.id].possible, 0);
  return { scores, total: scoreObject(points, possible) };
}

function getActivityTotal(id) {
  const totals = {
    sorting: sortingCards.length,
    healthy: healthyScenarios.length,
    missing: missingCards.length,
    fix: fixSituations.length,
    consequence: consequences.length,
    ranking: rankingPrompts.length + 1,
    case: caseStudy.questions.length,
  };
  return totals[id] || 1;
}

function getActivityIndex(id) {
  const total = getActivityTotal(id);
  const current = Number(state.progress[id] || 0);
  return Math.min(Math.max(current, 0), total - 1);
}

function setActivityIndex(id, index) {
  state.progress[id] = Math.min(Math.max(index, 0), getActivityTotal(id) - 1);
  saveState();
  renderApp();
}

function progressDots(id, total, current) {
  if (total <= 1) return "";
  return `
    <div class="progress-dots" aria-label="Question progress">
      ${Array.from({ length: total }, (_, index) => `
        <button class="dot${index === current ? " active" : ""}" data-step-jump="${index}" aria-label="Go to item ${index + 1}"></button>`).join("")}
    </div>`;
}

function questionPager(id, total, current) {
  if (total <= 1) return "";
  return `
    <div class="question-pager">
      <button class="ghost-button" data-step="-1"${current === 0 ? " disabled" : ""}>Back</button>
      <span>Item ${current + 1} of ${total}</span>
      <button class="primary-button" data-step="1"${current === total - 1 ? " disabled" : ""}>Next</button>
    </div>
    ${progressDots(id, total, current)}`;
}

function singleQuestion(id, title, intro, body) {
  const total = getActivityTotal(id);
  const current = getActivityIndex(id);
  return `
    ${sectionIntro(title, intro)}
    ${body}
    ${questionPager(id, total, current)}`;
}

function setActive(id) {
  activeActivity = id;
  renderApp();
  document.getElementById("activityRoot").focus();
}

function renderApp() {
  renderStudentFields();
  renderNav();
  const activity = activities.find((item) => item.id === activeActivity);
  document.getElementById("activityRoot").innerHTML = activity.render();
  renderScores();
}

function renderStudentFields() {
  document.getElementById("firstName").value = state.student.firstName;
  document.getElementById("lastName").value = state.student.lastName;
  document.getElementById("classPeriod").value = state.student.period;
}

function renderNav() {
  const { scores } = getScores();
  document.getElementById("activityNav").innerHTML = activities.map((activity, index) => {
    const current = activity.id === activeActivity ? ' aria-current="page"' : "";
    const score = scores[activity.id];
    const scoreText = activity.id === "reference" ? "study" : `${score.points}/${score.possible}`;
    return `
      <button class="nav-button" data-nav="${activity.id}"${current}>
        <span class="nav-index">${index + 1}</span>
        <span>${activity.title}</span>
        <span class="nav-score">${scoreText}</span>
      </button>`;
  }).join("");
}

function renderScores() {
  const { scores, total } = getScores();
  document.getElementById("overallScore").textContent = `${total.percent}%`;
  document.getElementById("meterFill").style.width = `${total.percent}%`;
  document.getElementById("scoreBreakdown").innerHTML = activities
    .filter((activity) => activity.id !== "reference")
    .map((activity) => {
      const score = scores[activity.id];
      return `<div class="score-row"><dt>${activity.title}</dt><dd><strong>${score.points}</strong>/${score.possible}</dd></div>`;
    }).join("");
}

function sectionIntro(title, text) {
  return `<section class="section-intro"><h2>${escapeHtml(title)}</h2><p>${escapeHtml(text)}</p></section>`;
}

function functionSelect(name, selected = "", label = "Family function") {
  return `
    <label>
      <span>${escapeHtml(label)}</span>
      <select name="${escapeHtml(name)}">
        <option value="">Choose</option>
        ${FUNCTIONS.map((item) => `<option value="${escapeHtml(item)}"${item === selected ? " selected" : ""}>${escapeHtml(item)}</option>`).join("")}
      </select>
    </label>`;
}

function renderReference() {
  const mode = state.referenceMode === "impact" ? "impact" : "definition";
  return `
    ${sectionIntro("Healthy Family Reference Card", "Use the switch to study either what each function looks like when it is met or what can happen when it breaks down.")}
    <section class="mode-switch" aria-label="Reference card mode">
      <button class="${mode === "definition" ? "active" : ""}" data-reference-mode="definition">Definition + Example</button>
      <button class="${mode === "impact" ? "active" : ""}" data-reference-mode="impact">Family + Community Impact</button>
    </section>
    <section class="reference-grid">
      ${FUNCTIONS.map((name) => {
        const note = functionNotes[name];
        return `
        <article class="card reference-card">
          <h3>${escapeHtml(name)}</h3>
          ${mode === "definition" ? `
            <p>${escapeHtml(note.definition)}</p>
            <p><strong>Example:</strong> ${escapeHtml(note.example)}</p>
          ` : `
            <p><strong>Family impact:</strong> ${escapeHtml(note.consequence)}</p>
            <p><strong>Community impact:</strong> ${escapeHtml(note.community)}</p>
          `}
        </article>`;
      }).join("")}
    </section>
    <section class="card">
      <h3>Healthy Family Characteristics</h3>
      <div class="choice-row">
        ${healthyTraits.map((trait) => `<span class="tag">${escapeHtml(trait)}</span>`).join("")}
      </div>
    </section>`;
}

function scoreReference() {
  return scoreObject(0, 0);
}

function renderSorting() {
  const card = sortingCards[getActivityIndex("sorting")];
  return singleQuestion("sorting", "Function Sorting Cards", "Choose the strongest family function for each scenario.", `
    <article class="card focus-card">
      <div class="card-header">
        <h3>Scenario Card ${card.id}</h3>
        <span class="tag">1 point</span>
      </div>
      <p class="scenario-text">${escapeHtml(card.text)}</p>
      ${functionSelect(`sorting-${card.id}`, state.sorting[card.id] || "")}
    </article>`);
}

function scoreSorting() {
  const points = sortingCards.reduce((sum, card) => sum + (state.sorting[card.id] === card.primary ? 1 : 0), 0);
  return scoreObject(points, sortingCards.length);
}

function renderHealthy() {
  const item = healthyScenarios[getActivityIndex("healthy")];
  const entry = state.healthy[item.id] || {};
  return singleQuestion("healthy", "Healthy or Unhealthy?", "Choose the best label and explain the reason in one complete sentence.", `
    <article class="card focus-card">
      <div class="card-header">
        <h3>Scenario ${item.id}</h3>
        <span class="tag">2 points</span>
      </div>
      <p>${escapeHtml(item.text)}</p>
      <div class="choice-row" role="radiogroup" aria-label="Scenario ${item.id}">
        ${["HEALTHY", "UNHEALTHY"].map((choice) => `
          <label class="choice big-choice">
            <input type="radio" name="healthy-label-${item.id}" value="${choice}"${entry.label === choice ? " checked" : ""}>
            <span>${choice}</span>
          </label>`).join("")}
      </div>
      <label>
        <span>Why?</span>
        <textarea name="healthy-reason-${item.id}">${escapeHtml(entry.reason || "")}</textarea>
      </label>
    </article>`);
}

function scoreHealthy() {
  let points = 0;
  for (const item of healthyScenarios) {
    const entry = state.healthy[item.id] || {};
    if (entry.label === item.answer) points += 1;
    points += completionPoint(entry.reason, 7);
  }
  return scoreObject(points, healthyScenarios.length * 2);
}

function renderMissing() {
  const card = missingCards[getActivityIndex("missing")];
  const entry = state.missing[card.id] || {};
  return singleQuestion("missing", "What's Missing?", "Identify the missing function, then explain the effect and who is most affected.", `
    <article class="card focus-card">
      <div class="card-header">
        <h3>Card ${card.id}: ${escapeHtml(card.family)}</h3>
        <span class="tag">3 points</span>
      </div>
      <p>${escapeHtml(card.text)}</p>
      ${functionSelect(`missing-function-${card.id}`, entry.functionName || "", "Which function is not being met?")}
      <div class="two-col">
        <label>
          <span>What effect does this have?</span>
          <textarea name="missing-effect-${card.id}">${escapeHtml(entry.effect || "")}</textarea>
        </label>
        <label>
          <span>Who is most affected, and how does life outside home change?</span>
          <textarea name="missing-affected-${card.id}">${escapeHtml(entry.affected || "")}</textarea>
        </label>
      </div>
    </article>`);
}

function scoreMissing() {
  let points = 0;
  for (const card of missingCards) {
    const entry = state.missing[card.id] || {};
    if (entry.functionName === card.answer) points += 1;
    points += completionPoint(entry.effect, 8);
    points += completionPoint(entry.affected, 8);
  }
  return scoreObject(points, missingCards.length * 3);
}

function renderFixIt() {
  const item = fixSituations[getActivityIndex("fix")];
  const entry = state.fix[item.id] || { strategies: [] };
  const selected = entry.strategies || [];
  const selectedMarkup = selected.length
    ? selected.map((number) => `
      <button class="strategy-chip" data-remove-strategy="${number}" aria-label="Remove strategy ${number}">
        <strong>${number}</strong> ${escapeHtml(strategies[number - 1])}
      </button>`).join("")
    : `<p class="muted">Drag a strategy tile here, or tap a tile to add it.</p>`;

  return singleQuestion("fix", "Fix It Strategy Matching", "Drag strategy tiles into the situation they best match, then explain why.", `
    <article class="card focus-card">
      <div class="card-header">
        <h3>Situation ${item.id}</h3>
        <span class="tag">2 points</span>
      </div>
      <p>${escapeHtml(item.text)}</p>
      <div class="drop-zone" data-drop-situation="${item.id}">
        <span class="field-label">Best strategy or strategies</span>
        <div class="selected-strategies">${selectedMarkup}</div>
      </div>
      <label>
        <span>Why?</span>
        <textarea name="fix-reason-${item.id}">${escapeHtml(entry.reason || "")}</textarea>
      </label>
    </article>
    <section class="card strategy-bank">
      <h3>Strategy Tiles</h3>
      <div class="strategy-grid">
        ${strategies.map((text, index) => {
          const number = index + 1;
          const used = selected.includes(number);
          return `
            <button class="strategy-tile${used ? " used" : ""}" draggable="true" data-strategy="${number}">
              <span>${number}</span>
              ${escapeHtml(text)}
            </button>`;
        }).join("")}
      </div>
    </section>`);
}

function scoreFixIt() {
  let points = 0;
  for (const item of fixSituations) {
    const entry = state.fix[item.id] || { strategies: [] };
    if ((entry.strategies || []).some((choice) => item.primary.includes(Number(choice)))) points += 1;
    points += completionPoint(entry.reason, 7);
  }
  return scoreObject(points, fixSituations.length * 2);
}

function renderConsequences() {
  const index = getActivityIndex("consequence");
  const item = consequences[index];
  return singleQuestion("consequence", "Consequence Cards", "Match each breakdown consequence to the family function.", `
    <article class="card focus-card">
      <div class="card-header">
        <h3>Consequence ${index + 1}</h3>
        <span class="tag">1 point</span>
      </div>
      <p>${escapeHtml(item.text)}</p>
      ${functionSelect(`consequence-${index}`, state.consequence[index] || "")}
    </article>`);
}

function scoreConsequences() {
  const points = consequences.reduce((sum, item, index) => sum + (state.consequence[index] === item.functionName ? 1 : 0), 0);
  return scoreObject(points, consequences.length);
}

function renderRanking() {
  return `
    ${sectionIntro("Importance Ranking", "Rank the six functions from most important to least important and defend your choices.")}
    <section class="card focus-card">
      <h3>Ranked Functions</h3>
      <p class="muted">Move the functions into your own order from most important to least important.</p>
      <div class="rank-list">
        ${state.ranking.order.map((name, rankIndex) => `
          <div class="rank-item">
            <span class="rank-number">${rankIndex + 1}</span>
            <strong>${escapeHtml(name)}</strong>
            <button class="icon-button" data-rank-move="${rankIndex}" data-direction="-1" aria-label="Move ${escapeHtml(name)} up"${rankIndex === 0 ? " disabled" : ""}>↑</button>
            <button class="icon-button" data-rank-move="${rankIndex}" data-direction="1" aria-label="Move ${escapeHtml(name)} down"${rankIndex === state.ranking.order.length - 1 ? " disabled" : ""}>↓</button>
          </div>`).join("")}
      </div>
    </section>
    <section class="grid-list ranking-responses">
      ${rankingPrompts.map((prompt, index) => `
        <label class="card">
          <span>${escapeHtml(prompt)}</span>
          <textarea name="ranking-response-${index}">${escapeHtml(state.ranking.responses[index] || "")}</textarea>
        </label>`).join("")}
    </section>`;
}

function scoreRanking() {
  const completeOrder = new Set(state.ranking.order).size === FUNCTIONS.length ? 6 : 0;
  const written = rankingPrompts.reduce((sum, _, index) => sum + completionPoint(state.ranking.responses[index], 8), 0);
  return scoreObject(completeOrder + written, 6 + rankingPrompts.length);
}

function renderCaseStudy() {
  const question = caseStudy.questions[getActivityIndex("case")];
  return singleQuestion("case", "Case Study: The Brennan Family", "Analyze the family across functions, healthy characteristics, and Fix It strategies.", `
    <section class="card">
      <h3>The Brennan Family</h3>
      <p>${escapeHtml(caseStudy.text)}</p>
      <div class="two-col">
        <div>
          <h3>What is going well</h3>
          <ul class="mini-list">${caseStudy.goingWell.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </div>
        <div>
          <h3>What is struggling</h3>
          <ul class="mini-list">${caseStudy.struggling.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </div>
      </div>
    </section>
    <label class="card focus-card">
      <span>${escapeHtml(question.prompt)}</span>
      <textarea name="case-response-${question.id}">${escapeHtml(state.caseStudy[question.id] || "")}</textarea>
    </label>`);
}

function scoreCaseStudy() {
  let points = 0;
  for (const question of caseStudy.questions) {
    const value = state.caseStudy[question.id] || "";
    points += completionPoint(value, 12);
    points += keywordPoint(value, question.keywords);
  }
  return scoreObject(points, caseStudy.questions.length * 2);
}

function handleInput(event) {
  const target = event.target;
  const name = target.name || target.id || "";

  if (target.id === "firstName") state.student.firstName = target.value;
  if (target.id === "lastName") state.student.lastName = target.value;
  if (target.id === "classPeriod") state.student.period = target.value;

  if (name.startsWith("sorting-")) state.sorting[name.split("-")[1]] = target.value;

  if (name.startsWith("healthy-label-")) {
    const id = name.split("-")[2];
    state.healthy[id] = state.healthy[id] || {};
    state.healthy[id].label = target.value;
  }
  if (name.startsWith("healthy-reason-")) {
    const id = name.split("-")[2];
    state.healthy[id] = state.healthy[id] || {};
    state.healthy[id].reason = target.value;
  }

  if (name.startsWith("missing-function-")) {
    const id = name.split("-")[2];
    state.missing[id] = state.missing[id] || {};
    state.missing[id].functionName = target.value;
  }
  if (name.startsWith("missing-effect-")) {
    const id = name.split("-")[2];
    state.missing[id] = state.missing[id] || {};
    state.missing[id].effect = target.value;
  }
  if (name.startsWith("missing-affected-")) {
    const id = name.split("-")[2];
    state.missing[id] = state.missing[id] || {};
    state.missing[id].affected = target.value;
  }

  if (name.startsWith("fix-strategy-")) {
    const id = name.split("-")[2];
    state.fix[id] = state.fix[id] || { strategies: [] };
    const selected = Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map((item) => Number(item.value));
    state.fix[id].strategies = selected;
  }
  if (name.startsWith("fix-reason-")) {
    const id = name.split("-")[2];
    state.fix[id] = state.fix[id] || { strategies: [] };
    state.fix[id].reason = target.value;
  }

  if (name.startsWith("consequence-")) state.consequence[name.split("-")[1]] = target.value;
  if (name.startsWith("ranking-response-")) state.ranking.responses[name.split("-")[2]] = target.value;
  if (name.startsWith("case-response-")) state.caseStudy[name.split("-")[2]] = target.value;

  saveState();
  renderNav();
  renderScores();
}

function addStrategyToCurrentSituation(strategyNumber) {
  const item = fixSituations[getActivityIndex("fix")];
  state.fix[item.id] = state.fix[item.id] || { strategies: [] };
  const current = new Set(state.fix[item.id].strategies || []);
  current.add(Number(strategyNumber));
  state.fix[item.id].strategies = Array.from(current).sort((a, b) => a - b);
  saveState();
  renderApp();
}

function removeStrategyFromCurrentSituation(strategyNumber) {
  const item = fixSituations[getActivityIndex("fix")];
  state.fix[item.id] = state.fix[item.id] || { strategies: [] };
  state.fix[item.id].strategies = (state.fix[item.id].strategies || []).filter((number) => number !== Number(strategyNumber));
  saveState();
  renderApp();
}

function handleClick(event) {
  const nav = event.target.closest("[data-nav]");
  if (nav) setActive(nav.dataset.nav);

  const stepButton = event.target.closest("[data-step]");
  if (stepButton) {
    setActivityIndex(activeActivity, getActivityIndex(activeActivity) + Number(stepButton.dataset.step));
  }

  const jumpButton = event.target.closest("[data-step-jump]");
  if (jumpButton) {
    setActivityIndex(activeActivity, Number(jumpButton.dataset.stepJump));
  }

  const referenceButton = event.target.closest("[data-reference-mode]");
  if (referenceButton) {
    state.referenceMode = referenceButton.dataset.referenceMode;
    saveState();
    renderApp();
  }

  const strategyTile = event.target.closest("[data-strategy]");
  if (strategyTile) {
    addStrategyToCurrentSituation(strategyTile.dataset.strategy);
  }

  const removeStrategy = event.target.closest("[data-remove-strategy]");
  if (removeStrategy) {
    removeStrategyFromCurrentSituation(removeStrategy.dataset.removeStrategy);
  }

  const emailAction = event.target.closest("[data-email-action]");
  if (emailAction && lastSubmission) {
    const action = emailAction.dataset.emailAction;
    if (action === "download") {
      downloadReport(lastSubmission.report, lastSubmission.filename);
      showToast("Results file downloaded again.");
    }
    if (action === "gmail") {
      openGmail(lastSubmission.report, lastSubmission.filename, lastSubmission.submittedAt);
      showToast("Gmail opened again.");
    }
    if (action === "draft") {
      createGmailDraft(lastSubmission.report, lastSubmission.filename, lastSubmission.submittedAt)
        .then(() => showToast("Gmail draft requested again."))
        .catch(() => showToast("Gmail draft retry did not complete."));
    }
  }

  const moveButton = event.target.closest("[data-rank-move]");
  if (moveButton) {
    const index = Number(moveButton.dataset.rankMove);
    const direction = Number(moveButton.dataset.direction);
    const nextIndex = index + direction;
    if (nextIndex >= 0 && nextIndex < state.ranking.order.length) {
      const order = state.ranking.order;
      [order[index], order[nextIndex]] = [order[nextIndex], order[index]];
      saveState();
      renderApp();
    }
  }
}

function handleDragStart(event) {
  const tile = event.target.closest("[data-strategy]");
  if (!tile) return;
  event.dataTransfer.setData("text/plain", tile.dataset.strategy);
  event.dataTransfer.effectAllowed = "copy";
}

function handleDragOver(event) {
  const zone = event.target.closest("[data-drop-situation]");
  if (!zone) return;
  event.preventDefault();
  zone.classList.add("drag-over");
}

function handleDragLeave(event) {
  const zone = event.target.closest("[data-drop-situation]");
  if (zone) zone.classList.remove("drag-over");
}

function handleDrop(event) {
  const zone = event.target.closest("[data-drop-situation]");
  if (!zone) return;
  event.preventDefault();
  zone.classList.remove("drag-over");
  const strategyNumber = event.dataTransfer.getData("text/plain");
  if (strategyNumber) addStrategyToCurrentSituation(strategyNumber);
}

function buildReport() {
  const { scores, total } = getScores();
  const name = studentFullName();
  const lines = [];
  lines.push("Family Functions & Healthy Families Results");
  lines.push(`Student: ${name || "Not entered"}`);
  lines.push(`Class period: ${state.student.period || "Not entered"}`);
  lines.push(`Overall score: ${total.points}/${total.possible} (${total.percent}%)`);
  lines.push("");
  for (const activity of activities.filter((item) => item.id !== "reference")) {
    const score = scores[activity.id];
    lines.push(`${activity.title}: ${score.points}/${score.possible} (${score.percent}%)`);
  }
  lines.push("");
  lines.push("Student Responses");
  lines.push("");
  lines.push("Function Sorting");
  for (const card of sortingCards) lines.push(`${card.id}. ${state.sorting[card.id] || "[blank]"} | Correct: ${card.primary} | ${card.text}`);
  lines.push("");
  lines.push("Healthy or Unhealthy");
  for (const item of healthyScenarios) {
    const entry = state.healthy[item.id] || {};
    lines.push(`${item.id}. ${entry.label || "[blank]"} | Correct: ${item.answer}`);
    lines.push(`Why: ${entry.reason || "[blank]"}`);
  }
  lines.push("");
  lines.push("What's Missing");
  for (const card of missingCards) {
    const entry = state.missing[card.id] || {};
    lines.push(`${card.id}. ${card.family} | Function: ${entry.functionName || "[blank]"} | Correct: ${card.answer}`);
    lines.push(`Effect: ${entry.effect || "[blank]"}`);
    lines.push(`Most affected: ${entry.affected || "[blank]"}`);
  }
  lines.push("");
  lines.push("Fix It");
  for (const item of fixSituations) {
    const entry = state.fix[item.id] || {};
    lines.push(`${item.id}. Selected: ${(entry.strategies || []).join(", ") || "[blank]"} | Primary: ${item.primary.join(", ")} | Supporting: ${item.supporting.join(", ")}`);
    lines.push(`Why: ${entry.reason || "[blank]"}`);
  }
  lines.push("");
  lines.push("Consequences");
  consequences.forEach((item, index) => lines.push(`${index + 1}. ${state.consequence[index] || "[blank]"} | Correct: ${item.functionName}`));
  lines.push("");
  lines.push("Ranking");
  state.ranking.order.forEach((name, index) => lines.push(`${index + 1}. ${name}`));
  rankingPrompts.forEach((prompt, index) => {
    lines.push(prompt);
    lines.push(state.ranking.responses[index] || "[blank]");
  });
  lines.push("Case Study");
  caseStudy.questions.forEach((question) => {
    lines.push(question.prompt);
    lines.push(state.caseStudy[question.id] || "[blank]");
  });
  return lines.join("\n");
}

function submissionTimestamp() {
  const now = new Date();
  submissionCounter += 1;
  const stamp = `${now.toISOString().replace(/[:.]/g, "-")}-${submissionCounter}`;
  const label = now.toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
  return { stamp, label };
}

function makeSubmissionPackage() {
  const report = buildReport();
  const { stamp, label } = submissionTimestamp();
  const safeName = (studentFullName() || "student").trim().replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") || "student";
  const filename = `family-functions-results-${safeName}-${stamp}.txt`;
  return { report, filename, submittedAt: label };
}

function downloadReport(report, filename) {
  const blob = new Blob([report], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  return filename;
}

function openGmail(report, filename, submittedAt) {
  const { total } = getScores();
  const name = studentFullName();
  const subject = `Family Functions Packet - ${name || "Student"} - ${total.percent}% - ${submittedAt}`;
  const summary = [
    `Student: ${name || "Not entered"}`,
    `Class period: ${state.student.period || "Not entered"}`,
    `Overall score: ${total.points}/${total.possible} (${total.percent}%)`,
    "",
    `Results file generated: ${filename}`,
    "",
    "The complete response report is included in the generated text file.",
  ].join("\n");
  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(TEACHER_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

async function createGmailDraft(report, filename, submittedAt) {
  if (!APPS_SCRIPT_WEB_APP_URL) return false;
  const { total } = getScores();
  const name = studentFullName();
  await fetch(APPS_SCRIPT_WEB_APP_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      to: TEACHER_EMAIL,
      subject: `Family Functions Packet - ${name || "Student"} - ${total.percent}% - ${submittedAt}`,
      filename,
      report,
      summary: `Overall score: ${total.points}/${total.possible} (${total.percent}%)`,
    }),
  });
  return true;
}

async function submitWork() {
  const submission = makeSubmissionPackage();
  lastSubmission = submission;
  renderSubmissionPanel("Preparing results...");

  if (!APPS_SCRIPT_WEB_APP_URL) {
    openGmail(submission.report, submission.filename, submission.submittedAt);
  }

  const filename = downloadReport(submission.report, submission.filename);
  const drafted = await createGmailDraft(submission.report, filename, submission.submittedAt).catch(() => false);
  if (drafted) {
    renderSubmissionPanel("Gmail draft requested. You can retry or download again below.");
    showToast("A Gmail draft was requested and the results file was generated.");
  } else {
    renderSubmissionPanel("Results prepared. Use the buttons below if Gmail did not open or the download was missed.");
    showToast("A Gmail message opened and the results file was generated.");
  }
}

function renderSubmissionPanel(message = "") {
  const panel = document.getElementById("submissionPanel");
  if (!panel) return;
  if (!lastSubmission) {
    panel.innerHTML = "";
    return;
  }
  panel.innerHTML = `
    <p>${escapeHtml(message || "Results are ready.")}</p>
    <p class="muted">Last prepared: ${escapeHtml(lastSubmission.submittedAt)}</p>
    <div class="submission-actions">
      <button class="ghost-button" data-email-action="download">Download again</button>
      ${APPS_SCRIPT_WEB_APP_URL
        ? `<button class="ghost-button" data-email-action="draft">Create Gmail draft again</button>`
        : `<button class="ghost-button" data-email-action="gmail">Open Gmail again</button>`}
    </div>`;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 3600);
}

document.addEventListener("input", handleInput);
document.addEventListener("change", handleInput);
document.addEventListener("click", handleClick);
document.addEventListener("dragstart", handleDragStart);
document.addEventListener("dragover", handleDragOver);
document.addEventListener("dragleave", handleDragLeave);
document.addEventListener("drop", handleDrop);
document.getElementById("submitWork").addEventListener("click", submitWork);

renderApp();
