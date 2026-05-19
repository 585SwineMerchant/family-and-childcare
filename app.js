const TEACHER_EMAIL = "kevin.mccann@greececsd.org";
const APPS_SCRIPT_WEB_APP_URL = "";

const FUNCTIONS = [
  "Economic",
  "Protection",
  "Education",
  "Recreation",
  "Affection and Belonging",
  "Adaptation",
];

const functionNotes = {
  Economic: "Meeting material needs such as food, housing, clothing, supplies, and money planning.",
  Protection: "Keeping family members physically and emotionally safe, including health and emergency care.",
  Education: "Teaching values, culture, school habits, life skills, and practical knowledge.",
  Recreation: "Building connection through play, relaxation, traditions, and shared fun.",
  "Affection and Belonging": "Helping members feel loved, valued, comforted, and emotionally secure.",
  Adaptation: "Adjusting roles, routines, and expectations when life changes or stress appears.",
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

const realWorld = [
  { functionName: "Economic", text: "When families cannot meet economic needs, communities see higher rates of food insecurity, unstable housing, and school dropout." },
  { functionName: "Protection", text: "When protection breaks down, teachers, neighbors, counselors, hospitals, and agencies may need to step in." },
  { functionName: "Education", text: "When families support education, children are more likely to graduate, keep learning, and find stable work." },
  { functionName: "Recreation", text: "Shared recreation helps young people build safe connection; parks and youth programs often fill this gap." },
  { functionName: "Affection and Belonging", text: "Secure attachment supports mental health, relationships, and behavior at school and beyond." },
  { functionName: "Adaptation", text: "Strong family networks help communities recover from disasters, economic downturns, and health crises." },
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
  "Which function did your group rank #1? Why did you agree on that one?",
  "Which function did you disagree about the most? What were the different arguments?",
  "Is there a function that cannot exist without another one? Which ones depend on each other?",
  "Could a family survive long-term if one function completely disappeared? Which would be hardest to lose?",
  "Did your ranking change during the discussion? What changed your mind, if anything?",
];

const activities = [
  { id: "reference", title: "Reference", render: renderReference, score: scoreReference },
  { id: "sorting", title: "Function Sorting", render: renderSorting, score: scoreSorting },
  { id: "healthy", title: "Healthy or Unhealthy", render: renderHealthy, score: scoreHealthy },
  { id: "missing", title: "What's Missing", render: renderMissing, score: scoreMissing },
  { id: "fix", title: "Fix It", render: renderFixIt, score: scoreFixIt },
  { id: "consequence", title: "Consequences", render: renderConsequences, score: scoreConsequences },
  { id: "ranking", title: "Ranking", render: renderRanking, score: scoreRanking },
  { id: "world", title: "Real World", render: renderWorld, score: scoreWorld },
  { id: "case", title: "Case Study", render: renderCaseStudy, score: scoreCaseStudy },
];

const defaultState = {
  student: { name: "", period: "", date: new Date().toISOString().slice(0, 10) },
  sorting: {},
  healthy: {},
  missing: {},
  fix: {},
  consequence: {},
  ranking: { order: [...FUNCTIONS], responses: {} },
  world: {},
  caseStudy: {},
};

let state = loadState();
let activeActivity = "reference";

function loadState() {
  const saved = localStorage.getItem("familyFunctionsPacket");
  if (!saved) return structuredClone(defaultState);
  try {
    return mergeState(structuredClone(defaultState), JSON.parse(saved));
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
  document.getElementById("studentName").value = state.student.name;
  document.getElementById("classPeriod").value = state.student.period;
  document.getElementById("workDate").value = state.student.date;
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
  return `
    ${sectionIntro("Healthy Family Reference Card", "Keep these ideas in view while completing each activity.")}
    <section class="reference-grid">
      ${FUNCTIONS.map((name) => `
        <article class="card reference-card">
          <h3>${escapeHtml(name)}</h3>
          <p>${escapeHtml(functionNotes[name])}</p>
        </article>`).join("")}
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
  return `
    ${sectionIntro("Function Sorting Cards", "Choose the strongest family function for each scenario.")}
    <section class="grid-list">
      ${sortingCards.map((card) => `
        <article class="card">
          <div class="card-header">
            <h3>Scenario Card ${card.id}</h3>
            <span class="tag">1 point</span>
          </div>
          <p class="scenario-text">${escapeHtml(card.text)}</p>
          ${functionSelect(`sorting-${card.id}`, state.sorting[card.id] || "")}
        </article>`).join("")}
    </section>`;
}

function scoreSorting() {
  const points = sortingCards.reduce((sum, card) => sum + (state.sorting[card.id] === card.primary ? 1 : 0), 0);
  return scoreObject(points, sortingCards.length);
}

function renderHealthy() {
  return `
    ${sectionIntro("Healthy or Unhealthy?", "Circle the best label and explain the reason in one complete sentence.")}
    <section class="grid-list">
      ${healthyScenarios.map((item) => {
        const entry = state.healthy[item.id] || {};
        return `
          <article class="card">
            <div class="card-header">
              <h3>Scenario ${item.id}</h3>
              <span class="tag">2 points</span>
            </div>
            <p>${escapeHtml(item.text)}</p>
            <div class="choice-row" role="radiogroup" aria-label="Scenario ${item.id}">
              ${["HEALTHY", "UNHEALTHY"].map((choice) => `
                <label class="choice">
                  <input type="radio" name="healthy-label-${item.id}" value="${choice}"${entry.label === choice ? " checked" : ""}>
                  <span>${choice}</span>
                </label>`).join("")}
            </div>
            <label>
              <span>Why?</span>
              <textarea name="healthy-reason-${item.id}">${escapeHtml(entry.reason || "")}</textarea>
            </label>
          </article>`;
      }).join("")}
    </section>`;
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
  return `
    ${sectionIntro("What's Missing?", "Identify the missing function, then explain the effect and who is most affected.")}
    <section class="grid-list">
      ${missingCards.map((card) => {
        const entry = state.missing[card.id] || {};
        return `
          <article class="card">
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
          </article>`;
      }).join("")}
    </section>`;
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
  return `
    ${sectionIntro("Fix It Strategy Matching", "Select the strategy or strategies that best fit each situation and explain the connection.")}
    <section class="card">
      <h3>Strategy Cards</h3>
      <div class="strategy-grid">
        ${strategies.map((text, index) => `<p><strong>${index + 1}.</strong> ${escapeHtml(text)}</p>`).join("")}
      </div>
    </section>
    <section class="grid-list">
      ${fixSituations.map((item) => {
        const entry = state.fix[item.id] || { strategies: [] };
        return `
          <article class="card">
            <div class="card-header">
              <h3>Situation ${item.id}</h3>
              <span class="tag">2 points</span>
            </div>
            <p>${escapeHtml(item.text)}</p>
            <div class="choice-row">
              ${strategies.map((_, index) => {
                const number = index + 1;
                const checked = (entry.strategies || []).includes(number);
                return `
                  <label class="choice">
                    <input type="checkbox" name="fix-strategy-${item.id}" value="${number}"${checked ? " checked" : ""}>
                    <span>${number}</span>
                  </label>`;
              }).join("")}
            </div>
            <label>
              <span>Why?</span>
              <textarea name="fix-reason-${item.id}">${escapeHtml(entry.reason || "")}</textarea>
            </label>
          </article>`;
      }).join("")}
    </section>`;
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
  return `
    ${sectionIntro("Consequence Cards", "Match each breakdown consequence to the family function.")}
    <section class="grid-list">
      ${consequences.map((item, index) => `
        <article class="card">
          <div class="card-header">
            <h3>Consequence ${index + 1}</h3>
            <span class="tag">1 point</span>
          </div>
          <p>${escapeHtml(item.text)}</p>
          ${functionSelect(`consequence-${index}`, state.consequence[index] || "")}
        </article>`).join("")}
    </section>`;
}

function scoreConsequences() {
  const points = consequences.reduce((sum, item, index) => sum + (state.consequence[index] === item.functionName ? 1 : 0), 0);
  return scoreObject(points, consequences.length);
}

function renderRanking() {
  return `
    ${sectionIntro("Importance Ranking", "Rank the six functions from most important to least important and defend the choices.")}
    <section class="card">
      <h3>Ranked Functions</h3>
      <div class="rank-list">
        ${state.ranking.order.map((name, index) => `
          <div class="rank-item">
            <span class="rank-number">${index + 1}</span>
            <strong>${escapeHtml(name)}</strong>
            <button class="icon-button" data-rank-move="${index}" data-direction="-1" aria-label="Move ${escapeHtml(name)} up"${index === 0 ? " disabled" : ""}>↑</button>
            <button class="icon-button" data-rank-move="${index}" data-direction="1" aria-label="Move ${escapeHtml(name)} down"${index === state.ranking.order.length - 1 ? " disabled" : ""}>↓</button>
          </div>`).join("")}
      </div>
    </section>
    <section class="grid-list">
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

function renderWorld() {
  return `
    ${sectionIntro("Real-World Connections", "Connect each family function to its wider effect on a community.")}
    <section class="grid-list">
      ${realWorld.map((item, index) => `
        <article class="card">
          <div class="card-header">
            <h3>${escapeHtml(item.functionName)} Function</h3>
            <span class="tag">1 point</span>
          </div>
          <p>${escapeHtml(item.text)}</p>
          <label>
            <span>Why does this function matter beyond just your own family?</span>
            <textarea name="world-response-${index}">${escapeHtml(state.world[index] || "")}</textarea>
          </label>
        </article>`).join("")}
    </section>`;
}

function scoreWorld() {
  const points = realWorld.reduce((sum, _, index) => sum + completionPoint(state.world[index], 9), 0);
  return scoreObject(points, realWorld.length);
}

function renderCaseStudy() {
  return `
    ${sectionIntro("Case Study: The Brennan Family", "Analyze the family across functions, healthy characteristics, and Fix It strategies.")}
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
    <section class="grid-list">
      ${caseStudy.questions.map((question) => `
        <label class="card">
          <span>${escapeHtml(question.prompt)}</span>
          <textarea name="case-response-${question.id}">${escapeHtml(state.caseStudy[question.id] || "")}</textarea>
        </label>`).join("")}
    </section>`;
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

  if (target.id === "studentName") state.student.name = target.value;
  if (target.id === "classPeriod") state.student.period = target.value;
  if (target.id === "workDate") state.student.date = target.value;

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
  if (name.startsWith("world-response-")) state.world[name.split("-")[2]] = target.value;
  if (name.startsWith("case-response-")) state.caseStudy[name.split("-")[2]] = target.value;

  saveState();
  renderNav();
  renderScores();
}

function handleClick(event) {
  const nav = event.target.closest("[data-nav]");
  if (nav) setActive(nav.dataset.nav);

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

function buildReport() {
  const { scores, total } = getScores();
  const lines = [];
  lines.push("Family Functions & Healthy Families Results");
  lines.push(`Student: ${state.student.name || "Not entered"}`);
  lines.push(`Class period: ${state.student.period || "Not entered"}`);
  lines.push(`Date: ${state.student.date || "Not entered"}`);
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
  lines.push("");
  lines.push("Real World");
  realWorld.forEach((item, index) => {
    lines.push(`${item.functionName}: ${state.world[index] || "[blank]"}`);
  });
  lines.push("");
  lines.push("Case Study");
  caseStudy.questions.forEach((question) => {
    lines.push(question.prompt);
    lines.push(state.caseStudy[question.id] || "[blank]");
  });
  return lines.join("\n");
}

function downloadReport(report) {
  const safeName = (state.student.name || "student").trim().replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") || "student";
  const filename = `family-functions-results-${safeName}.txt`;
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

function openGmail(report, filename) {
  const { total } = getScores();
  const subject = `Family Functions Packet - ${state.student.name || "Student"} - ${total.percent}%`;
  const summary = [
    `Student: ${state.student.name || "Not entered"}`,
    `Class period: ${state.student.period || "Not entered"}`,
    `Date: ${state.student.date || "Not entered"}`,
    `Overall score: ${total.points}/${total.possible} (${total.percent}%)`,
    "",
    `Results file generated: ${filename}`,
    "",
    "The complete response report is included in the generated text file.",
  ].join("\n");
  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(TEACHER_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

async function createGmailDraft(report, filename) {
  if (!APPS_SCRIPT_WEB_APP_URL) return false;
  const { total } = getScores();
  await fetch(APPS_SCRIPT_WEB_APP_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      to: TEACHER_EMAIL,
      subject: `Family Functions Packet - ${state.student.name || "Student"} - ${total.percent}%`,
      filename,
      report,
      summary: `Overall score: ${total.points}/${total.possible} (${total.percent}%)`,
    }),
  });
  return true;
}

async function submitWork() {
  const report = buildReport();
  const filename = downloadReport(report);
  const drafted = await createGmailDraft(report, filename).catch(() => false);
  if (drafted) {
    showToast("A Gmail draft was requested and the results file was generated.");
  } else {
    openGmail(report, filename);
    showToast("A Gmail message opened and the results file was generated.");
  }
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
document.getElementById("submitWork").addEventListener("click", submitWork);

renderApp();
