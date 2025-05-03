const responses = {};

let questions = [
  {
    id: "territory_type",
    question: "How would you characterize the nature of Hittite territorial control across regions?",
    answers: [
      "I argue that control was homogeneous, with uniform authority exercised throughout the territory.",
      "I argue that control was varied, with different regions governed through different types or degrees of authority.",
      "I argue that control was gradual, diminishing progressively with distance from core administrative centers."
    ],
    get condition() {
      return true;
    },
  },
  {
    id: "territory_varied_model",
    question: "Which statement best describes that variation?",
    answers: [
      "I argue for a two-tier model: a central core surrounded by a periphery with reduced control.",
      "I argue for a more nuanced five-tier model of territoriality, ranging from a core zone undergoing a process of territorial integration, through areas of intensive hegemony and indirect control, to regions where political authority exists only as a veneer, and finally to zones beyond effective control."
    ],
    get condition() {
      return responses.territory_type === 1;
    }
  },
  {
    id: "territory_gradual_basis",
    question: "What defined the centers from which control radiated?",
    answers: [
      "I argue that control radiated from key urban centers and administrative capitals.",
      "I argue that control radiated from broader regional zones rather than specific cities."
    ],
    get condition() {
      return responses.territory_type === 2;
    }
  },
  {
    id: "imperial_texts",
    question: "Should we rely on historical documents written by the Hittite Empire itself to determine the extent of its territorial control?",
    answers: [
      "Yes — imperial documents are authoritative and reflect actual control.",
      "No — these documents are ideological and cannot be used to map territory reliably."
    ],
    get condition() {
      return true;
    },
  },
  {
    id: "evidence_seals",
    question: "Do you consider cuneiform texts, official seals, and seal impressions found outside the capital as valid evidence of Hittite territorial control?",
    answers: ["Yes", "No"],
    get condition() {
      return true;
    },
  },
  
  {
    id: "threshold_seals",
    question: "How many official seals are needed to claim Hittite control over a site?",
    answers: ["1 seal", "10 seals", "50 or more seals"],
    get condition() {
      return responses.evidence_seals === 0;
    },
  },
  {
    id: "evidence_monuments",
    question: "Should landscape monuments be considered evidence of Hittite territorial control?",
    answers: ["Yes", "No"],
    get condition() {
      return true;
    },
  },
  {
    id: "evidence_pottery",
    question: "Do you consider standardized North Central Anatolian pottery outside that region as evidence for Hittite control?",
    answers: ["Yes", "No"],
    get condition() {
      return true;
    },
  },
];

//questions=questions.slice(0, 1);

function createPrompts() {
  const promptBox = document.getElementById("promptbox");

  questions.forEach((q, index) => {
    const promptDiv = document.createElement("div");
    promptDiv.className = "prompt";
    promptDiv.id = q.id;
    promptDiv.style.display = index === 0 ? "block" : "none";

    const p = document.createElement("p");
    p.textContent = q.question;
    promptDiv.appendChild(p);
    q.answers.forEach((answer, i) => {
      const button = document.createElement("button");
      button.className = "promptbutton " + q.id;
      button.id = `${q.id}_${i}`;
      button.textContent = answer;

      button.onclick = function () {
        responses[q.id] = i;

        // Highlight selected answer
        const allButtons = document.querySelectorAll(`.promptbutton.${q.id}`);
        if (allButtons) {
          allButtons.forEach(btn => btn.style.color = "black");
        }
        button.style.color = "rgb(104, 113, 168)";

        const currentIndex = questions.findIndex(question => question.id === q.id);
        if (currentIndex < questions.length - 1) {
          const nextQuestionId = questions[currentIndex + 1].id;
          showQuestionById(nextQuestionId);
        } else {
          if (!document.getElementById("restart")) {
        showRestart(promptBox);
          }
          runCompress();
          selectMap();
          showResults();
        }
        // if evidence_pottery in responses then run compress selectMap and showResults
        if (responses.evidence_pottery !== undefined) {
          runCompress();
          selectMap();
          showResults();
        }
      };

      promptDiv.appendChild(button);
    });

    promptBox.appendChild(promptDiv);
  });
}


function showRestart(div) {
  const p = document.createElement("p");
  p.textContent = "START OVER";
  p.id = "restart";
  div.appendChild(p);
  restartButton = document.getElementById("restart");
  restartButton.addEventListener("click", () => {
    const promptBox = document.getElementById("promptbox");
    const resultsDiv = document.getElementById("results");
    promptBox.innerHTML = "";
    resultsDiv.innerHTML = "";

    document.getElementById("container").style.cssText = "";
    document.getElementById("promptbox").style.cssText = "transform: scale(1)";
    document.getElementById("mapholder").style.cssText = "visibility: hidden; display: none;";
    document.getElementById("mapholder").innerHTML = "";

    createPrompts();
    showQuestionById(questions[0].id);
  });
}

function showQuestionById(id) {
  // check if the question is condition === 1
  const question = questions.find(q => q.id === id);
  if (question.condition == false) {
    // if condition is not met, skip to the next question
    console.log(`Skipping question ${id} due to condition`);
  // print condition too
  console.log(`Condition: ${question.condition}`);
    const nextIndex = questions.findIndex(q => q.id === id) + 1;
    if (nextIndex < questions.length) {
      showQuestionById(questions[nextIndex].id);
    }
    return;
  }

  const nextQ = document.getElementById(id);
  nextQ.style.display = "block";
  nextQ.style.visibility = "visible";
  nextQ.style.animation = "slide-down 1s";
  // scroll at the bottom of the page
  window.scrollTo(0, document.body.scrollHeight);
}

function runCompress() {
  document.getElementById("container").style.cssText =
    "justify-content: space-around; align-items: center; align-content: space-between; display: block;";
  document.getElementById("promptbox").style.cssText = "transform: scale(.48)";
}

function selectMap() {
  let mapDescription = "";

  if (responses.evidence_seals === 1 && responses.evidence_monuments === 1 && responses.evidence_pottery === 1) {
    mapDescription = "The map will show **limited Hittite control**, focused around monuments and select artifact zones, as textual and seal evidence is excluded.";
  } else if (responses.territory_type === 0) {
    mapDescription = "The map will display a **single territorial blob**, reflecting homogenous control.";
  } else if (responses.territory_type === 1) {
    mapDescription = "The map will display a **core-periphery model**, with strong control near Hattusa fading outward.";
  } else if (responses.territory_type === 2) {
    mapDescription = "The map will display a **fragmented empire**, with vassal states marked separately from core Hittite regions.";
  } else {
    mapDescription = "The map will be shaped dynamically based on your selected evidence types, thresholds, and control patterns.";
  }

  document.getElementById("mapholder").style.cssText = "position: relative; height: 600px; overflow: hidden; display: block; visibility: visible;";
  // add img to mapholder
  let selectedLayer = "ellipse_"
  // evidence_monuments if 1 add "monuments_"
  if (responses.evidence_monuments === 0) {
    selectedLayer += "monuments_";
  }
  // check if threshold_seals is in responses if 0 add NofSeals_above1 if 1 add NofSeals_above10 if 2 add NofSeals_above50
  if (responses.evidence_seals === 0) {
    if (responses.threshold_seals === 0) {
      selectedLayer += "NofSeals_above1_";
    }
    if (responses.threshold_seals === 1) {
      selectedLayer += "NofSeals_above10_";
    }
    if (responses.threshold_seals === 2) {
      selectedLayer += "NofSeals_above50_";
    }
  }
  // territory_type if 0 add solid.png if 1 add line.png if 2 add gradient.png
  if (responses.territory_type === 0) {
    selectedLayer += "solid";
  } else if (responses.territory_type === 1) {
    selectedLayer += "line";
  } else if (responses.territory_type === 2) {
    selectedLayer += "gradient"
  }

  document.getElementById("mapholder").innerHTML = `<img src="maps/basemap.png" alt=""
       style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">

  <!-- Overlay image -->
  <img src="maps/${selectedLayer}.png"
       style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; mix-blend-mode: darken; opacity: 0.9;">
</div>`;


// if territory_gradual_basis == 0 then just put basemap
  if (responses.territory_gradual_basis === 0) {
    document.getElementById("mapholder").innerHTML = `<img src="maps/multiCenter.png" alt=""
       style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">`;
  }
// if territory_varied_model == 1 then put GlatzMap.png
  if (responses.territory_varied_model === 1) {
    document.getElementById("mapholder").innerHTML = `<img src="maps/GlatzMap.png" alt=""
       style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">`;
  }




// scroll down
  window.scrollTo(0, document.body.scrollHeight);
  // add description to mapholder
  const mapDescriptionDiv = document.createElement("div");
  mapDescriptionDiv.id = "mapDescription";
  mapDescriptionDiv.innerHTML = `<p>${mapDescription}</p>`;
  document.getElementById("mapholder").appendChild(mapDescriptionDiv);
}

function showResults() {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = questions.map(q => {
    if (responses[q.id] !== undefined) {
      return `<p>${q.question} <strong>${q.answers[responses[q.id]]}</strong></p>`;
    }
    return '';
  }).join("");
}

window.onload = () => {
  createPrompts();
  showQuestionById(questions[0].id);
};

