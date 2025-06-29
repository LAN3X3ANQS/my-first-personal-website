// Department to courses mapping
const departmentCourses = {
  ece: [
    "MAT102",
    "MAT162",
    "MAT108",
    "CHM102",
    "PHY 102",
    "ECE 102",
    "ECE 104",
    "GNS 104",
    "GNS 112"
  ],
  civil: [
    "MAT102",
    "MAT162",
    "MAT108",
    "CHM102",
    "PHY 102",
    "CVE 102",
    "CVE 104",
    "GNS 104",
    "GNS 112"
  ],
  aero: [
    "MAT102",
    "MAT162",
    "MAT108",
    "CHM102",
    "PHY102",
    "AERO102",
    "AERO104",
    "GNS104",
    "GNS112"
  ],
  mech: [
    "MAT102",
    "MAT162",
    "MAT108",
    "CHM102",
    "PHY102",
    "MECH102",
    "MECH104",
    "GNS104",
    "GNS112"
  ],
  indust: [
    "MAT102",
    "MAT162",
    "MAT108",
    "CHM102",
    "PHY 102",
    "IPE 102",
    "IPE 104",
    "GNS 104",
    "GNS 112"
  ],
  chem: [
    "MAT102",
    "MAT162",
    "MAT108",
    "CHM102",
    "PHY102",
    "CPE102",
    "CPE104",
    "GNS104",
    "GNS112"
  ],
};

const departmentGroup = document.getElementById("department-group");
const courseSection = document.getElementById("course-section");
const courseGroup = document.getElementById("course-group");
const testOptions = document.getElementById("test-options");
const localStartBtn = document.getElementById("localstartBtn");
localStartBtn.style.display = "none"; // Hide by default

// Make clicking the whole department box select the radio
Array.from(departmentGroup.getElementsByClassName("first-section")).forEach(div => {
  div.addEventListener("click", function (e) {
    // Prevent double firing if clicking the radio itself
    if (e.target.tagName !== "INPUT") {
      const radio = div.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        // Fire the change event manually so the rest of the logic works
        radio.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
  });
});

// Helper to check if all test options are filled
function checkShowStartBtn() {
  const questionCount = document.getElementById("question-count").value;
  const duration = document.getElementById("duration").value;
  const courseSelected = courseGroup.querySelector('input[name="course"]:checked');
  if (questionCount && duration && courseSelected) {
    localStartBtn.style.display = "block";
  } else {
    localStartBtn.style.display = "none";
  }
}

// Listen for department selection
departmentGroup.addEventListener("change", function(e) {
  if (e.target.name === "department") {
    // Show course section
    courseSection.style.display = "block";
    testOptions.style.display = "none";
    // Populate courses
    const dept = e.target.value;
    courseGroup.innerHTML = "";
    departmentCourses[dept].forEach(course => {
      const div = document.createElement("div");
      div.innerHTML = `<label><input type="radio" name="course" value="${course}"> ${course}</label>`;
      courseGroup.appendChild(div);
    });

    // Make each course option clickable
    Array.from(courseGroup.children).forEach(div => {
      div.addEventListener("click", function(e) {
        if (e.target.tagName !== "INPUT") {
          const radio = div.querySelector('input[type="radio"]');
          if (radio) {
            radio.checked = true;
            radio.dispatchEvent(new Event('change', { bubbles: true }));
          }
        }
      });
    });
  }
});

// Listen for course selection
courseGroup.addEventListener("change", function(e) {
  if (e.target.name === "course") {
    testOptions.style.display = "block";
    checkShowStartBtn();
  }
});

// Listen for changes in the test options dropdowns
document.getElementById("question-count").addEventListener("change", checkShowStartBtn);
document.getElementById("duration").addEventListener("change", checkShowStartBtn);

// Optionally, also check when the user clicks a course option (for mouse users)
courseGroup.addEventListener("click", checkShowStartBtn);

// Limit questions and time in HTML (already done in your markup)
const phy102Questions = [
  {
    question: "Compute the force that exists between two protons in a nucleus of iron if they are separated by 4 × 10⁻¹⁵ m. What type of force is it?",
    options: [
      "140 N, attractive",
      "14 N, repulsive",
      "14 N, attractive",
      "140 N, repulsive"
    ],
    answer: 3
  },
  {
    question: "What is the dipole moment of an electric dipole where 2a is the distance between the charges and q is the charge?",
    options: [
      "2q/a",
      "2a/q",
      "aq²",
      "2aq"
    ],
    answer: 3
  },
  {
    question: "Two equal and opposite charges of magnitude 2.0 × 10⁻⁷ C are 15 cm apart. What is the magnitude and direction of the electric field midway between them?",
    options: [
      "6.4 × 10⁵ N/C towards the negative charge",
      "6.4 × 10⁵ N/C towards the positive charge",
      "6.4 × 10⁻⁵ N/C towards the negative charge",
      "6.4 × 10⁻⁵ N/C towards the positive charge"
    ],
    answer: 0
  },
  {
    question: "What is the force that each of the two charges (2.0 × 10⁻⁷ C and 8.5 × 10⁻⁸ C) produces at the site of the other, when placed 2 cm apart?",
    options: [
      "3.8 N",
      "5.0 N",
      "8.0 N",
      "7.7 N"
    ],
    answer: 3
  },
  {
    question: "What is the electric field 0.2 m from a dipole of moment 0.04 C·m, if the dipole separation is 20 cm?",
    options: [
      "4.5 × 10³ N/C",
      "3.6 × 10⁴ N/C",
      "1.8 × 10⁴ N/C",
      "2.0 × 10³ N/C"
    ],
    answer: 1
  },
  {
    question: "What is the electric field 5 cm from a line of charge with linear charge density λ = 2.7 × 10⁻⁷ C/m?",
    options: [
      "9.7 × 10⁴ N/C",
      "1.0 × 10⁴ N/C",
      "2.2 × 10⁴ N/C",
      "6.3 × 10⁴ N/C"
    ],
    answer: 0
  },
  {
    question: "What is the electric force between two like charges of 25 × 10⁻⁹ C placed 5 m apart?",
    options: [
      "2.2 × 10⁻⁶ N, repulsive",
      "1.2 × 10⁻⁶ N, attractive",
      "4.5 × 10⁻⁶ N, repulsive",
      "3.6 × 10⁻⁶ N, attractive"
    ],
    answer: 0
  },
  {
    question: "What is the x-component of the force on charge q₁ due to q₃ located 10.0 cm away at 300° west of north?",
    options: [
      "0.27 N",
      "0.30 N",
      "0.34 N",
      "0.38 N"
    ],
    answer: 0
  },
  {
    question: "Charges q₁ = 1.0 × 10⁻⁶ C and q₂ = 2.0 × 10⁻⁶ C are 10 cm apart. At what distance from q₁ is the electric field zero?",
    options: [
      "5.3 cm",
      "2.4 cm",
      "3.6 cm",
      "6.2 cm"
    ],
    answer: 0
  },
  {
    question: "What is the electric field 3.2 m from a charged wire carrying 8.3 C/m?",
    options: [
      "4.7 × 10¹¹ N/C",
      "1.2 × 10¹⁰ N/C",
      "3.9 × 10⁸ N/C",
      "5.6 × 10⁹ N/C"
    ],
    answer: 1
  },
  {
    question: "What must be the plate area (in m²) for an air-filled parallel-plate capacitor with a 1 mm gap to have 1.0 F capacitance?",
    options: [
      "1.1 × 10⁶",
      "8.9 × 10⁵",
      "3.5 × 10⁷",
      "4.1 × 10⁸"
    ],
    answer: 0
  },
  {
    question: "What is the capacitance of a plane-parallel capacitor with circular plates of radius 10.0 cm separated by 1.0 mm?",
    options: [
      "3.00 × 10² pF",
      "2.81 × 10² pF",
      "1.11 × 10³ pF",
      "None of the above"
    ],
    answer: 1
  },
  {
    question: "How much charge is stored in the capacitor in question 12 when a potential difference of 100 V is applied?",
    options: [
      "3.00 × 10⁻⁸ C",
      "2.00 × 10⁻⁸ C",
      "2.81 × 10⁻⁸ C",
      "None"
    ],
    answer: 2
  },
  {
    question: "What is the initial charge on capacitor C₁ of 6 µF charged to 5V?",
    options: [
      "3.0 × 10⁻⁶ C",
      "2.5 × 10⁻⁶ C",
      "1.2 × 10⁻⁶ C",
      "None"
    ],
    answer: 0
  },
  {
    question: "When a charged capacitor C₁ is connected to an uncharged capacitor C₂, what are the equilibrium charges q₁ and q₂?",
    options: [
      "[2 µC, 8 µC]",
      "[6 µC, 24 µC]",
      "[4 µC, 5 µC]",
      "[10 µC, 10 µC]"
    ],
    answer: 1
  },
  {
    question: "Which of the following statements about electrical materials is NOT true?",
    options: [
      "Insulators have high resistivity.",
      "Conductors allow free movement of charges.",
      "Semiconductors behave like both insulators and conductors.",
      "None of the above"
    ],
    answer: 3
  },
  {
    question: "Which of the following is true about Gauss’s Law?",
    options: [
      "It is used only in vacuum.",
      "It requires symmetry.",
      "It works only with spherical charges.",
      "It cannot be used for conductors."
    ],
    answer: 1
  },
  {
    question: "What is the electric field at 5 × 10⁻² mm from the center of a spherical charge of 10 C and radius 5 mm, assuming ε₀ = 8.85 × 10⁻¹² F/m?",
    options: [
      "5.2 × 10¹² V/m",
      "7.6 × 10¹⁰ V/m",
      "9.1 × 10¹¹ V/m",
      "3.6 × 10¹³ V/m"
    ],
    answer: 3
  },
  {
    question: "Two capacitors of 10 µF and 5 µF are connected in series with a 4 µF capacitor. The combination is connected to a 100 V source. What is the charge on the 5 µF capacitor?",
    options: [
      "3.2 × 10⁻⁴ C",
      "1.6 × 10⁻⁴ C",
      "2.0 × 10⁻⁴ C",
      "2.8 × 10⁻⁴ C"
    ],
    answer: 0
  },
  {
    question: "What must be the plate area (in m²) for an air-filled capacitor with a 1 mm gap to have a capacitance of 1.0 F?",
    options: [
      "1.1 × 10⁶",
      "1.3 × 10⁶",
      "1.5 × 10⁶",
      "1.9 × 10⁶"
    ],
    answer: 0
  },
  {
    question: "What is the capacitance of a plane-parallel capacitor with circular plates of radius 10.0 cm and separation 1.0 mm?",
    options: [
      "3.00 × 10² pF",
      "2.81 × 10² pF",
      "1.11 × 10³ pF",
      "None of the above"
    ],
    answer: 1
  },
  {
    question: "How much charge is stored when the capacitor in question 21 is connected across a 100 V potential difference?",
    options: [
      "3.00 × 10⁻⁸ C",
      "2.00 × 10⁻⁸ C",
      "2.81 × 10⁻⁸ C",
      "None"
    ],
    answer: 2
  },
  {
    question: "What is the initial charge on capacitor C₁?",
    options: [
      "3.0 × 10⁻⁶ C",
      "2.5 × 10⁻⁶ C",
      "1.2 × 10⁻⁶ C",
      "None"
    ],
    answer: 0
  },
  {
    question: "When charged capacitor C₁ is connected to C₂, what are the equilibrium charges q₁ and q₂?",
    options: [
      "[2 µC, 8 µC]",
      "[6 µC, 24 µC]",
      "[4 µC, 5 µC]",
      "[10 µC, 10 µC]"
    ],
    answer: 1
  },
  {
    question: "Which of the following statements is NOT true about electrical materials?",
    options: [
      "Insulators have high resistivity",
      "Conductors allow free movement of charges",
      "Semiconductors behave like both insulators and conductors",
      "None of the above"
    ],
    answer: 3
  },
  {
    question: "Which of the following is true about Gauss’s Law?",
    options: [
      "It is used only in vacuum",
      "It requires symmetry",
      "It works only with spherical charges",
      "It cannot be used for conductors"
    ],
    answer: 1
  },
  {
    question: "What is the electric field at 5 × 10⁻² mm from the center of a spherical charge of 10 C, radius 5 mm, assuming ε₀ = 8.85 × 10⁻¹²?",
    options: [
      "5.2 × 10¹² V/m",
      "7.6 × 10¹⁰ V/m",
      "9.1 × 10¹¹ V/m",
      "3.6 × 10¹³ V/m"
    ],
    answer: 3
  },
  {
    question: "Electric force is the _____ of charge and electric field.",
    options: [
      "Product",
      "Sum",
      "Difference",
      "Quotient"
    ],
    answer: 0
  },
  {
    question: "Electric field is the same as _____.",
    options: [
      "Electric energy gradient",
      "Electric force gradient",
      "Electric potential difference",
      "None"
    ],
    answer: 1
  },
  {
    question: "What is the expression for the kinetic energy of a particle of mass m and charge q released from rest in a uniform electric field?",
    options: [
      "qEy",
      "qy/E",
      "qE/y",
      "yE/q"
    ],
    answer: 0
  },
  {
    question: "The dipole moment of an electric dipole where 2a is the separation and q is the charge is:",
    options: [
      "2q/a",
      "2a/q",
      "aq²",
      "2aq"
    ],
    answer: 3
  },
  {
    question: "What must the plate area be (in m²) for an air-filled capacitor with 1 mm gap to have a capacitance of 1.0 F?",
    options: [
      "1.1 × 10⁶",
      "1.3 × 10⁶",
      "1.5 × 10⁶",
      "1.9 × 10⁶"
    ],
    answer: 0
  },
  {
    question: "A dielectric of magnitude 2 is placed inside a capacitor. What happens to the capacitance?",
    options: [
      "It remains unchanged",
      "It is doubled",
      "It is quadrupled",
      "It is halved"
    ],
    answer: 1
  },
  {
    question: "Another name for dielectric constant is:",
    options: [
      "Relative permittivity",
      "Permeability of free space",
      "Permittivity of free space",
      "Relative permeability"
    ],
    answer: 0
  },
  {
    question: "If two capacitors of 10 µF and 5 µF are in series with a 4 µF capacitor, and all are connected to 100V, what is the charge on the 5 µF capacitor?",
    options: [
      "3.2 × 10⁻⁴ C",
      "1.6 × 10⁻⁴ C",
      "2.0 × 10⁻⁴ C",
      "2.8 × 10⁻⁴ C"
    ],
    answer: 0
  },
  {
    question: "What is the expression for the electric field at distance r from a non-conducting infinite charged sheet with surface charge density σ?",
    options: [
      "E = σ / ε₀",
      "E = σ / 2ε₀",
      "E = 2σε₀",
      "E = ε₀ / 2σ"
    ],
    answer: 1
  },
  {
    question: "Two equal and opposite charges of 2.0 × 10⁻⁷ C are 15 cm apart. What is the electric field at the midpoint?",
    options: [
      "6.4 × 10⁵ N/C towards the negative charge",
      "6.4 × 10⁵ N/C towards the positive charge",
      "6.4 × 10⁻⁵ N/C towards the negative charge",
      "6.4 × 10⁻⁵ N/C towards the positive charge"
    ],
    answer: 0
  },
  {
    question: "What force acts on an electron placed at the midpoint between the charges in Question 37?",
    options: [
      "10⁻¹³ N towards the positive charge",
      "10⁻¹³ N towards the negative charge",
      "10⁻⁷ N towards the negative charge",
      "10⁻⁷ N towards the positive charge"
    ],
    answer: 1
  },
  {
    question: "What is the electric field 1 m away along the perpendicular bisector of the line joining the two charges?",
    options: [
      "6.4 × 10⁻² N/C",
      "5.4 N/C",
      "3.0 N/C",
      "8.2 N/C"
    ],
    answer: 1
  },
  {
    question: "What is the dipole moment of the two charges in Question 37?",
    options: [
      "3.0 × 10⁻⁸ cm",
      "4.5 × 10⁻⁸ cm",
      "6.0 × 10⁻⁸ cm",
      "7.5 × 10⁻⁸ cm"
    ],
    answer: 2
  }
];



// --- CBT Test Rendering Logic ---

// Make sure you have a <div id="cbt-quiz"></div> in your HTML, or create it dynamically:
let quizContainer = document.getElementById('cbt-quiz');
if (!quizContainer) {
  quizContainer = document.createElement('div');
  quizContainer.id = 'cbt-quiz';
  document.body.appendChild(quizContainer);
}

let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let selectedQuestions = [];
let testEnded = false;
let timerInterval;
let secondsSpent = 0;
let totalSeconds = 0;

// Render a question with navigation and submit
function renderQuestion(index) {
  const q = selectedQuestions[index];
  quizContainer.innerHTML = `
    <div class="cbt-question-box">
      <h3>Question ${index + 1} of ${selectedQuestions.length}</h3>
      <p>${q.question}</p>
      <form id="cbt-form">
        ${q.options.map((opt, i) => `
          <label style="display:block;margin-bottom:8px;">
            <input type="radio" name="option" value="${i}" ${userAnswers[index] === i ? "checked" : ""}>
            ${opt}
          </label>
        `).join('')}
        <div style="margin-top:18px;display:flex;justify-content:space-between;">
          ${index > 0 ? `<button type="button" id="prevBtn" class="btn">Previous</button>` : `<span></span>`}
          <button type="button" id="nextBtn" class="btn" ${index === selectedQuestions.length - 1 ? "disabled" : ""}>Next</button>
        </div>
      </form>
      <div style="margin-top: 20px; display: flex; flex-wrap: wrap; gap: 6px; justify-content:center;">
        ${selectedQuestions.map((_, i) => `
          <button 
            type="button"
            class="cbt-nav-btn btn${i === index ? ' active' : ''}${typeof userAnswers[i] === 'number' ? ' answered' : ''}"
            onclick="goToQuestion(${i})"
            style="padding: 4px 10px;"
          >${i + 1}</button>
        `).join('')}
      </div>
      <div style="margin-top: 30px; text-align: center;">
        <button type="button" class="cbt-fixed-submit-btn btn" onclick="endTest()">Submit Test</button>
      </div>
    </div>
  `;

  // Restore previous answer if any
  if (typeof userAnswers[index] === "number") {
    const radios = quizContainer.querySelectorAll('input[name="option"]');
    if (radios[userAnswers[index]]) radios[userAnswers[index]].checked = true;
  }

  // Navigation logic
  const prevBtn = document.getElementById('prevBtn');
  if (prevBtn) {
    prevBtn.onclick = function() {
      saveAnswer(index);
      if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion(currentQuestion);
      }
    };
  }
  document.getElementById('nextBtn').onclick = function() {
    saveAnswer(index);
    if (currentQuestion < selectedQuestions.length - 1) {
      currentQuestion++;
      renderQuestion(currentQuestion);
    }
  };

  // Save answer on radio change
  quizContainer.querySelectorAll('input[name="option"]').forEach(radio => {
    radio.addEventListener('change', () => saveAnswer(index));
  });

  // Navigation number buttons logic
  quizContainer.querySelectorAll('.cbt-nav-btn').forEach((btn, i) => {
    btn.addEventListener('click', function() {
      saveAnswer(index);
      currentQuestion = i;
      renderQuestion(currentQuestion);
    });
  });

  function saveAnswer(idx) {
    const selected = quizContainer.querySelector('input[name="option"]:checked');
    userAnswers[idx] = selected ? Number(selected.value) : undefined;
  }

  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

// Navigation function for inline onclick (for safety)
function goToQuestion(index) {
  currentQuestion = index;
  renderQuestion(currentQuestion);
}

function updateTimerDisplay(remaining) {
  const timerSpan = document.getElementById('cbt-timer');
  const min = String(Math.floor(remaining / 60)).padStart(2, '0');
  const sec = String(remaining % 60).padStart(2, '0');
  timerSpan.textContent = `Time Left: ${min}:${sec}`;
}

function showResult() {
  // Calculate score
  score = 0;
  for (let i = 0; i < selectedQuestions.length; i++) {
    if (userAnswers[i] === selectedQuestions[i].answer) score++;
  }
  // Calculate time spent
  const min = String(Math.floor(secondsSpent / 60)).padStart(2, '0');
  const sec = String(secondsSpent % 60).padStart(2, '0');
  // Calculate percentage
  const percent = ((score / selectedQuestions.length) * 100).toFixed(1);

  quizContainer.innerHTML = `
    <div class="cbt-result-box" style="
      text-align: center;
      padding: 32px 0;
      background: #fff8e7;
      border-radius: 14px;
      box-shadow: 0 2px 12px rgba(110,20,20,0.10);
      max-width: 400px;
      margin: 40px auto;
    ">
      <h2 style="color:#800020;margin-bottom:18px;">Test Complete!</h2>
      <p style="font-size:1.2rem;">Your Score: <strong>${score} / ${selectedQuestions.length}</strong></p>
      <p style="font-size:1.2rem;">Percentage: <strong>${percent}%</strong></p>
      <p style="font-size:1.1rem;">Time Spent: <strong>${min}:${sec}</strong></p>
      <button class="btn" style="margin-top:24px;" onclick="window.location.href='cbt.html'">Finish</button>
    </div>
  `;

  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

// End test and show result (prevents double end)
function endTest() {
  if (!testEnded) {
    testEnded = true;
    if (timerInterval) clearInterval(timerInterval);
    showResult();
    window.removeEventListener('beforeunload', endTestOnLeave);
    window.removeEventListener('pagehide', endTestOnLeave);
    window.removeEventListener('blur', endTestOnLeave);
    document.removeEventListener('visibilitychange', function() {
      if (document.visibilityState === 'hidden') endTestOnLeave();
    });
  }
}

// End test if user tries to leave, reload, close, or switch tab/window
function endTestOnLeave(e) {
  if (!testEnded) {
    // Show warning dialog
    e.preventDefault();
    e.returnValue = '';
    // Do NOT call endTest() here! Only end if user confirms exit (browser will reload/navigate)
    return '';
  }
}

// To start the test, call this function (e.g. after clicking "Start Test")
function startCBTTest() {
  const questionCount = Number(localStorage.getItem('cbt_questionCount')) || 10;
  const course = localStorage.getItem('cbt_course') || '';
  let questionPool = [];

  if (course.toLowerCase().includes('phy')) {
    questionPool = phy102Questions;
  } else if (course.toLowerCase().includes('mat')) {
    questionPool = mat102Questions;
  } else {
    // Add more courses as needed
    questionPool = phy102Questions;
  }

  selectedQuestions = shuffleArray([...questionPool]).slice(0, questionCount);
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  testEnded = false;

  // Timer setup
  const duration = Number(localStorage.getItem('cbt_duration')) || 20;
  totalSeconds = duration * 60;
  secondsSpent = 0;
  updateTimerDisplay(totalSeconds - secondsSpent);

  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (testEnded) {
      clearInterval(timerInterval);
      return;
    }
    secondsSpent++;
    updateTimerDisplay(totalSeconds - secondsSpent);
    if (secondsSpent >= totalSeconds) {
      endTest();
    }
  }, 1000);

  renderQuestion(0);

  // Show warning if user tries to leave
  window.addEventListener('beforeunload', endTestOnLeave);
  // Remove these, as they force endTest on blur/tab switch:
  // window.addEventListener('pagehide', endTestOnLeave);
  // window.addEventListener('blur', endTestOnLeave);
  // document.addEventListener('visibilitychange', function() {
  //   if (document.visibilityState === 'hidden') endTestOnLeave();
  // });
}

// Utility to shuffle questions randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Example: Start test when the button is clicked
if (localStartBtn) {
  localStartBtn.onclick = function() {
    // Get selected values
    const department = document.querySelector('input[name="department"]:checked')?.value;
    const course = document.querySelector('input[name="course"]:checked')?.value;
    const questionCount = document.getElementById('question-count').value;
    const duration = document.getElementById('duration').value;

    // Save to localStorage (or use URL params)
    localStorage.setItem('cbt_department', department);
    localStorage.setItem('cbt_course', course);
    localStorage.setItem('cbt_questionCount', questionCount);
    localStorage.setItem('cbt_duration', duration);

    // Redirect to test page
    window.location.href = 'cbt-test.html';
  };
}

const mat102Questions = [
  {
    question: "What is the derivative of $$x^6 - 7x^3 - 6x + 4$$?",
    options: [
      "$$6x^5 - 21x^2 - 6$$",
      "$$6x^5 - 7x^2 - 6$$",
      "$$x^5 - 21x^2 + 6$$",
      "$$6x^6 - 21x^3 - 6$$"
    ],
    answer: 0
  },
  {
    question: "Find the differential coefficient of $$8\\cos x + 3\\sin x + e^{3x}$$.",
    options: [
      "$$-8\\sin x + 3\\cos x + 3e^{3x}$$",
      "$$8\\sin x + 3\\cos x + 3e^{3x}$$",
      "$$-8\\cos x + 3\\sin x + 3e^{3x}$$",
      "$$8\\cos x + 3\\sin x + 3e^{3x}$$"
    ],
    answer: 0
  },
  {
    question: "The first derivative of $$\\cos^m \\psi$$ with respect to $$\\psi$$ is:",
    options: [
      "$$-m \\cos^{m-1} \\psi \\sin \\psi$$",
      "$$m \\cos^{m-1} \\psi \\sin^m \\psi$$",
      "$$-m \\sin^{m-1} \\psi \\cos^m \\psi$$",
      "$$m \\sin^m \\psi$$"
    ],
    answer: 0
  },
  {
    question: "If $$y = (x + 4)(11x + 1)(3x + 2)$$, find $$\\frac{d^2y}{dx^2}$$.",
    options: [
      "$$198x + 226$$",
      "$$198 + 226x$$",
      "$$198x - 78$$",
      "$$99x^2 + 226 - 78$$"
    ],
    answer: 0
  },
  {
    question: "Differentiate $$y = (x^2 + 4)^{-1}$$ with respect to $$x$$.",
    options: [
      "$$\\frac{1}{2} \\arctan x^2$$",
      "$$\\frac{2x}{(x^2+4)^2}$$",
      "$$\\frac{-2x}{(x^2+4)^2}$$",
      "$$\\arctan \\left(\\frac{1}{x^2+4}\\right)$$"
    ],
    answer: 2
  },
  {
    question: "Differentiate $$4x^2 \\sin x - 3x^2 \\cos x$$.",
    options: [
      "$$4x^2 \\cos x - 3x^2 \\sin x$$",
      "$$(3x^2 + 8x) \\cos x + (4x^2 - 6x) \\sin x$$",
      "$$(3x^2 - 8x) \\cos x + (4x^2 + 6x) \\sin x$$",
      "$$(3x^2 + 8x) \\sin x + (4x^2 - 6x) \\cos x$$"
    ],
    answer: 1
  },
  {
    question: "Find $$\\frac{dy}{dx}$$ if $$y = 6x^2 \\sin x \\cos x$$.",
    options: [
      "$$6x(\\sin 2x + x\\cos 2x)$$",
      "$$6x \\cos^2 x - 6x \\sin^2 x$$",
      "$$6x \\cos x \\sin x + 6x^2 \\cos 2x$$",
      "$$12x \\sin x \\cos x + 6x^2 \\cos 2x$$"
    ],
    answer: 3
  },
  {
    question: "If $$y = \\theta^n$$ where $$n$$ is a positive integer, which is correct?",
    options: [
      "$$\\theta \\frac{dy}{d\\theta} = ny$$",
      "$$\\theta^2 \\frac{d^2y}{d\\theta^2} = n(n-1)y$$",
      "Both (a) and (b)",
      "Neither (a) nor (b)"
    ],
    answer: 2
  },
  {
    question: "If $$y = \\sec \\theta$$, then $$\\frac{d^2y}{d\\theta^2} =$$",
    options: [
      "$$y(2y^2 - 1)$$",
      "$$y(2y^2 + 1)$$",
      "$$y^2(2y - 1)$$",
      "$$y^2 + y$$"
    ],
    answer: 0
  },
  {
    question: "Is it true that if $$y = (\\omega^2 - 1)^n$$, then $$(\\omega^2 - 1)y' - 2n\\omega y = 0$$?",
    options: [
      "Yes",
      "No",
      "I don't know",
      "Sometimes"
    ],
    answer: 0
  },
  {
    question: "If $$y = x^2 + 1$$, then $$\\frac{dx}{dy}$$ is:",
    options: [
      "$$\\frac{1}{2}$$",
      "$$2x$$",
      "$$\\frac{1}{2x}$$",
      "Not possible"
    ],
    answer: 2
  },
  {
    question: "Given $$y = \\frac{x \\sin x}{\\cos x + \\sin x}$$, then $$\\frac{dy}{dx}$$ is:",
    options: [
      "$$\\frac{x + \\sin^2 x + \\sin x \\cos x}{1 + \\sin 2x}$$",
      "$$\\frac{x + \\cos^2 x + \\sin x \\cos x}{1 + \\sin 2x}$$",
      "$$\\frac{x - \\sin^2 x - \\sin x \\cos x}{(\\cos x + \\sin x)^2}$$",
      "$$\\frac{x + \\sin x + \\sin x \\cos x}{(\\cos x + \\sin x)^2}$$"
    ],
    answer: 2
  },
  {
    question: "Evaluate $$\\frac{d}{dx} \\left( \\frac{1 + \\sqrt{x}}{1 - \\sqrt{x}} \\right)$$:",
    options: [
      "$$\\frac{1}{2\\sqrt{x}(1 + \\sqrt{x})^2}$$",
      "$$\\frac{1}{(1 + \\sqrt{x})^2}$$",
      "$$\\frac{1}{(1 + \\sqrt{x})^2 \\sqrt{x}}$$",
      "$$\\frac{1}{(1 - \\sqrt{x})^2 \\sqrt{x}}$$"
    ],
    answer: 3
  },
  {
    question: "Find $$\\frac{d}{dx} \\left[ \\arcsin \\left( \\frac{1 - x^2}{1 + x^2} \\right) \\right]$$:",
    options: [
      "Not possible",
      "$$2(1 + x^2)$$",
      "$$\\frac{1 - x^2}{1 + x^2}$$",
      "$$\\frac{-2}{1 + x^2}$$"
    ],
    answer: 3
  },
  {
    question: "If $$3xy + x^2 + y^2 = 5$$, find $$\\frac{dy}{dx}$$:",
    options: [
      "$$\\frac{2x + 3y}{3x + 2y}$$",
      "$$\\frac{-2x - 3y}{3x + 2y}$$",
      "$$\\frac{3x + 2y}{2x + 3y}$$",
      "$$\\frac{-3x + 2y}{2x + 3y}$$"
    ],
    answer: 1
  },
  {
    question: "Which of the following is the derivative of $$y = \\log_{10} x$$?",
    options: [
      "$$\\frac{1}{x}$$",
      "$$\\frac{1}{x \\ln 10}$$",
      "$$\\frac{\\ln x}{10}$$",
      "$$\\ln x \\cdot 10$$"
    ],
    answer: 1
  },
  {
    question: "What is the derivative of the inverse function $$y = \\tan^{-1}(2x + 1)$$?",
    options: [
      "$$\\frac{1}{1 + (2x + 1)^2} \\cdot 2$$",
      "$$\\frac{1}{1 - (2x + 1)^2} \\cdot 2$$",
      "$$\\frac{2}{1 + (2x + 1)^2}$$",
      "$$\\frac{1}{2(1 + x^2)}$$"
    ],
    answer: 2
  },
  {
    question: "What is $$x^2 + 2x + 1$$ equal to?",
    options: [
      "$$(x + 1)^2$$",
      "$$(x - 1)^2$$",
      "$$x^2 + 1$$",
      "$$x + 1$$"
    ],
    answer: 0
  },
  {
    question: "If $$x - 2016 = 0$$, then $$\\frac{dy}{dx}$$ is:",
    options: [
      "$$2016$$",
      "$$\\frac{1}{2016}$$",
      "$$\\infty$$",
      "$$0$$"
    ],
    answer: 3
  },
  {
    question: "If $$y = \\exp(\\cos x)$$, then $$y'$$ is:",
    options: [
      "$$\\exp(\\sin x)\\cos x$$",
      "$$-\\exp(\\cos x)\\sin x$$",
      "$$\\exp(\\cos x)\\cos x$$",
      "$$-\\exp(\\sin x)\\cos x$$"
    ],
    answer: 1
  },
  {
    question: "Differentiate $$x-y+1=0$$.",
    options: [
      "$$1$$",
      "$$0$$",
      "$$x + \\frac{x^2}{2}$$",
      "$$1 + x^2$$"
    ],
    answer: 0
  },
  {
    question: "If $$y = \\sin xy - 2$$, then $$\\frac{dy}{dx}$$ is:",
    options: [
      "$$\\frac{\\cos xy}{1 + \\cos xy}$$",
      "$$\\frac{y\\cos xy}{1 - x\\cos xy}$$",
      "$$\\frac{1 - x\\cos xy}{y\\cos xy}$$",
      "$$\\frac{1 + \\cos xy}{y\\cos xy}$$"
    ],
    answer: 2
  },
  {
    question: "Which of these is correct? $$\\frac{d}{dx}(\\cot^{-1} x)$$",
    options: [
      "$$-\\frac{1}{1 + x^2}$$",
      "$$\\frac{1}{1 + x^2}$$",
      "$$-\\frac{1}{1 - x^2}$$",
      "$$-\\frac{1}{x^2 + 1}$$"
    ],
    answer: 0
  },
  {
    question: "The differential coefficient of $$(x^2 - 1)^3$$ is:",
    options: [
      "$$6x(x^2 - 1)$$",
      "$$6x(x^2 - 1)^2$$",
      "$$3(x^2 - 1)^2$$",
      "$$12x^2$$"
    ],
    answer: 1
  },
  {
    question: "Find $$\\frac{dy}{dx}$$ if $$y = \\exp(x^3)$$.",
    options: [
      "$$3x^2$$",
      "$$\\exp(x^3)$$",
      "$$3\\exp(x^2)$$",
      "$$3x^2\\exp(x^3)$$"
    ],
    answer: 3
  },
  {
    question: "Find the derivative of $$\\frac{1}{x^2 + 4}$$ with respect to $$x$$.",
    options: [
      "$$\\frac{1}{2}\\arctan(x^2)$$",
      "$$2x\\ln(x^2 + 4)$$",
      "$$-\\frac{2x}{(x^2 + 4)^2}$$",
      "$$-2x$$"
    ],
    answer: 2
  },
  {
    question: "Find $$\\frac{dy}{dx}$$ if $$x^2y^2 - x - y = 0$$.",
    options: [
      "$$2x^2 - 1$$",
      "$$\\frac{1 - 2xy^2}{2x^2y + 1}$$",
      "$$\\frac{1 - 2xy^2}{2x^2y - 1}$$",
      "$$\\frac{2x^2y - 1}{2xy^2 - 1}$$"
    ],
    answer: 1
  },
  {
    question: "Find $$\\frac{dy}{dx}$$ when $$y = \\left(\\frac{x-1}{x+1}\\right)^2$$.",
    options: [
      "$$\\frac{2}{(x+1)^2}$$",
      "$$2\\left(\\frac{x-1}{x+1}\\right)$$",
      "$$1$$",
      "See solution"
    ],
    answer: 1
  },
  {
    question: "Find $$\\frac{d^2y}{dx^2}$$ if $$x + y + \\sin y = 112$$.",
    options: [
      "$$\\frac{\\cos y}{\\sin y + 1}$$",
      "$$0$$",
      "$$\\frac{\\sin y}{(1 + \\cos y)^3}$$",
      "$$\\frac{\\sin y}{(1 + \\sin y)^2}$$"
    ],
    answer: 0
  },
  {
    question: "Evaluate $$\\frac{d}{dx}\\left(\\frac{1}{4}x^4 - \\frac{1}{2}x^2 + 4\\right)$$.",
    options: [
      "$$3x^4 + x$$",
      "$$\\frac{1}{4}x^5 - \\frac{1}{2}x^3$$",
      "$$3x^3 - x$$",
      "$$x \\cdot 3 - x + 44$$"
    ],
    answer: 2
  },
  {
    question: "If $$u = \\arcsin 3\\theta$$, then $$\\frac{dy}{dx}$$ is:",
    options: [
      "$$\\frac{\\sqrt{3}}{9\\theta^2 - 1}$$",
      "$$\\frac{\\sqrt{y}}{3\\theta^2 + 1}$$",
      "$$\\frac{\\sqrt{3}}{1 - 9\\theta^2}$$",
      "$$\\frac{\\sqrt{9}}{3\\theta^2 + 1}$$"
    ],
    answer: 0
  },
  {
    question: "Which of these is the first derivative of $$f(x)$$ with respect to $$x$$?",
    options: [
      "$$\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$",
      "$$\\lim_{x \\to h} \\frac{f(x+h) + f(x)}{h}$$",
      "$$\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{x}$$",
      "$$\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{x}$$"
    ],
    answer: 0
  },
  {
    question: "The expression for $$\\frac{dy}{dx}$$ when $$y = 6x^2 \\sin x \\cos x$$ is:",
    options: [
      "$$6x(\\sin 2x + x\\cos 2x)$$",
      "$$\\sin x + 6x \\cos 2x$$",
      "$$\\sin x - \\cos x$$",
      "See solution"
    ],
    answer: 0
  },
  {
    question: "The slope of $$8x^3 - \\sin x + 2$$ with respect to $$x$$ is:",
    options: [
      "$$24x^2 + \\cos x$$",
      "$$x^2 - \\sin x$$",
      "$$x^2 + \\sin x$$",
      "$$24x^2 - \\cos x$$"
    ],
    answer: 0
  },
  {
    question: "Find $$\\frac{du}{d\\theta}$$ if $$u = \\frac{\\theta \\sin \\theta}{\\theta + 3}$$.",
    options: [
      "$$\\frac{\\cos \\theta - \\theta \\sin \\theta}{(\\theta + 3)^2}$$",
      "$$\\frac{3\\cos \\theta - (3 + \\theta)\\theta \\sin \\theta}{\\text{den}}$$",
      "$$\\frac{\\theta \\cos \\theta + 1}{\\theta^2(\\theta + 3)^2}$$",
      "$$\\theta \\sin \\theta$$"
    ],
    answer: 0
  },
  {
    question: "Which of these is NOT correct? $$\\frac{d}{dx}(-\\csc x) = \\csc x \\cot x$$, $$\\frac{d}{dx}(\\tan x) = \\sec^2 x$$, $$\\frac{d}{dx}(\\cot x) = -\\csc^2 x$$, $$\\frac{d}{dx}(\\sec x) = \\tan x \\sec^2 x$$",
    options: [
      "A",
      "B",
      "C",
      "D"
    ],
    answer: 3
  },
  {
    question: "If $$y = \\sin x$$, then $$\\frac{d^2y}{dx^2}$$ is:",
    options: [
      "$$y(1 + y)$$",
      "$$y(1 + 2y^2)$$",
      "$$2y^2(1 + y)$$",
      "$$2y(y^2 + 1)$$"
    ],
    answer: 0
  },
  {
    question: "Find the average rate of change of the function $$g(t) = t^2 - 3t + 4$$ on the interval $$[2, 4]$$.",
    options: [
      "$$4$$",
      "$$6$$",
      "$$8$$",
      "$$10$$"
    ],
    answer: 0
  },
  {
    question: "The second derivative of $$(x + 4)(11x + 1)(3x - 2)$$ is:",
    options: [
      "$$198x + 226$$",
      "$$226x^2 + 198x$$",
      "$$226x + 198$$",
      "$$198x^2 - 226x$$"
    ],
    answer: 0
  },
  {
    question: "Which of these is NOT correct about the first principle?",
    options: [
      "$$\\frac{dy}{dx} = \\frac{f(x+h) - f(x)}{x}$$",
      "$$\\frac{dy}{dx} = \\frac{f(x-h) + f(x)}{h}$$",
      "$$\\frac{dy}{dx} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$",
      "$$\\frac{dy}{dx} = \\lim_{x \\to 0} \\frac{f(x+h) - f(x)}{x}$$"
    ],
    answer: 2
  },
  {
    question: "If $$y = 112$$, then $$\\frac{dy}{dx}$$ is:",
    options: [
      "$$112$$",
      "$$112y$$",
      "$$112x$$",
      "$$211$$"
    ],
    answer: 1
  },
  {
    question: "If $$y = \\theta^n$$, where $$n \\in \\mathbb{Z}$$, which of the following is NOT correct?",
    options: [
      "$$\\theta^2y'' - n^2y' + ny = 0$$",
      "$$\\theta y' = ny$$",
      "$$\\theta^2y'' = n(n-1)y$$",
      "$$y + y' = n\\theta^n(n-1 + \\theta^{-1})$$"
    ],
    answer: 3
  },
  {
    question: "Differentiate $$\\sin^2(x^2 + 1)$$.",
    options: [
      "$$4x \\cos^2(x^2 + 1)$$",
      "$$2 \\cos(x^2 + 1)$$",
      "$$4x \\sin(x^2 + 1) \\cos^2(x^2 + 1)$$",
      "$$2x \\sin^2(x^2 + 1) \\cos(x^2 + 1) + 2x$$"
    ],
    answer: 0
  },
  {
    question: "The first derivative of $$\\cos^m \\psi$$ with respect to $$\\psi$$ is:",
    options: [
      "$$-m \\cos^{m-1} \\psi \\sin \\psi$$",
      "$$m \\cos^{m-1} \\psi \\sin^m \\psi$$",
      "$$-m \\sin^{m-1} \\psi \\cos^m \\psi$$",
      "$$m \\sin^m \\psi$$"
    ],
    answer: 0
  },
  {
    question: "Find $$\\frac{d}{dx} \\arcsin \\left( \\frac{1-x^2}{1+x^2} \\right)$$.",
    options: [
      "Not possible",
      "$$2(1 + x^2)$$",
      "$$\\frac{1-x^2}{1+x^2}$$",
      "$$-\\frac{2}{1+x^2}$$"
    ],
    answer: 3
  },
  {
    question: "If $$y(x) = u(x)v(x)w(x)$$, then $$\\frac{dy}{dx}$$ is:",
    options: [
      "$$uvw' + u'vw + uv'w$$",
      "Does not exist",
      "$$uvw' + u'vw + uvw$$",
      "$$u'v'w' + uvw$$"
    ],
    answer: 0
  },
  {
    question: "If $$x = a(t\\sin t + \\cos t - 1)$$ and $$y = a(\\sin t - t\\cos t)$$, find $$\\frac{dy}{dx}$$.",
    options: [
      "$$\\tan t$$",
      "$$\\sec^2 t$$",
      "$$1 - \\cos t$$",
      "$$\\sin t + \\cos t$$"
    ],
    answer: 0
  },
  {
    question: "If $$y = \\sec \\theta$$, which of the following is correct?",
    options: [
      "$$y'' = y(2y^2 + 1)$$",
      "$$y'' + y = y(2y^2 + 1)$$",
      "$$y'' + y' + y = 2y^3$$",
      "$$y'' = y(2y^2 - 1)$$"
    ],
    answer: 0
  },
  {
    question: "If $$y = \\theta^n$$, where $$n \\in \\mathbb{Z}^+$$, which of the following is NOT correct?",
    options: [
      "$$\\theta^2y'' - n^2y' + ny = 0$$",
      "$$\\theta y' = ny$$",
      "$$\\theta^2y'' = n(n-1)y$$",
      "$$y + y' = n\\theta^n(n-1 + \\theta^{-1})$$"
    ],
    answer: 3
  },
  {
    question: "Find $$\\frac{dy}{dx}$$ if $$3xy + x^2 + y^2 = 5$$.",
    options: [
      "$$\\frac{2x + 3y}{3x + 2y}$$",
      "$$\\frac{-2x - 3y}{3x + 2y}$$",
      "$$\\frac{3x + 2y}{2x + 3y}$$",
      "$$\\frac{-3x + 2y}{2x + 3y}$$"
    ],
    answer: 1
  },
  {
    question: "If $$x = t^3 + t$$ and $$y = 2t^2$$, then $$\\frac{dy}{dx}$$ is:",
    options: [
      "$$\\frac{4t}{3t^2 + 1}$$",
      "$$4$$",
      "$$\\frac{t}{t^2 + 1}$$",
      "$$2t^5 + t^3$$"
    ],
    answer: 0
  }
];