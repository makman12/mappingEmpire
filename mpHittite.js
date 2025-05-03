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
          selectDescription();
        }
        // if evidence_pottery in responses then run compress selectMap and showResults
        if (responses.evidence_pottery !== undefined) {
          runCompress();
          selectMap();
          showResults();
          selectDescription();
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
function selectDescription() {
  const desc = document.getElementById("desc");
  const header = document.getElementById("descHeader");
  const resultsDiv = document.getElementById("results");

  const fragments = [];

  // Territory type and structure
  if (responses.territory_type === 0) {
    fragments.push("You characterize Hittite rule as homYou characterize Hittite rule as homogeneous, suggesting a consistent and centralized control across the entire territory. This perspective mirrors the way we often imagine modern nation-states—defined by neat, unbroken borders and uniform governance. However, such consistency is historically rare and theoretically problematic, especially in a pre-modern context where communication, infrastructure, and administrative reach were limited. Projecting modern expectations of control onto ancient empires risks flattening the complexities of how power was actually negotiated and exercised on the ground.ogeneous, suggesting a consistent and centralized control across the entire territory.");
  } else if (responses.territory_type === 1) {
    fragments.push("You argue for a varied model of territorial authority, where different regions experienced different forms or degrees of control.");
    if (responses.territory_varied_model === 0) {
      fragments.push("This interpretation follows a two-tier structure, with a strong core zone surrounded by a weaker periphery.");
    } else if (responses.territory_varied_model === 1) {
      fragments.push("More specifically, you prefou adopt a five-tier framework to conceptualize imperial control, ranging from a tightly integrated heartland to peripheral regions beyond effective authority. This model follows Glatz’s (2008) proposal to understand the Hittite Empire as a set of overlapping networks of interaction rather than a uniformly administered territory, emphasizing varying degrees of cultural, administrative, and political engagement across space.er a five-tier framework ranging from an integrated heartland to zones beyond effective control.");
    }
  } else if (responses.territory_type === 2) {
    fragments.push("Your view resonates with Matessi’s (2017) depiction of Hittite power as organized through a tiered and fluid landscape, where authority gradually diminished with distance from the imperial core and became increasingly negotiated in peripheral zones.iew emphasizes a gradual model of power, with authority fading as one moves further from central areas.");
    if (responses.territory_gradual_basis === 0) {
      fragments.push("This gradient of influence, in your view, radiated primarily from urban and administrative centers.");
    } else if (responses.territory_gradual_basis === 1) {
      fragments.push("Alternatively, you see political power as emerging from broader regional zones rather than individual cities.");
    }
  }

  // Imperial texts
  if (responses.imperial_texts === 0) {
    fragments.push("You consider imperial texts to be trustworthy representations of actual territorial control. Yet it’s important to recognize that most Hittite texts come from the capital, and the vast majority date to the final century of the empire—precisely when central power was strongest. This introduces a bias: we rely most heavily on sources that reflect the peak of imperial authority, while earlier or more contested periods remain underrepresented. Still, these texts remain one of the few direct records of political claims and administrative intent, making them a central—if problematic—pillar of our evidence.");
  } else if (responses.imperial_texts === 1) {
    fragments.push("You treat imperial texts with caution, recognizing them as ideological tools rather than objective records of political reality. Most of these documents were produced in the capital during the final century of the empire, a time when asserting control may have been as much about rhetoric as actual governance. While they remain a crucial source of information, their performative and legitimizing functions mean they often reveal more about imperial aspirations than the true extent of territorial control.");
  }

  // Seals and textual evidence
  if (responses.evidence_seals === 0) {
    fragments.push("You accept sealings and cuneiform texts found outside the capital as valid indicators of control. Seals, as tools of administrative oversight, imply the presence of officials, institutions, or bureaucratic procedures operating beyond the core. Similarly, textual references can reflect attempts to structure and record authority at a distance. In your view, these materials together provide meaningful evidence of Hittite political reach.");
    if (responses.threshold_seals === 0) {
      fragments.push(`
        <div style="float: right; width: 100px; margin-left: 10px; text-align: center;">
          <img src="https://kayipdiller.com/wp-content/uploads/2020/01/pudihepa.jpg" alt="Seal of Queen Puduhepa" style="width: 100px; height: 100px;">
          <div style="font-size: 10px;">Fig. 2: Seals of Queen Puduhepa</div>
        </div>
      `);      
      fragments.push("In your framework, even a single seal is enough to support claims of territorial authority. But is one object truly sufficient to suggest a broader political narrative? A lone seal could indicate fleeting contact, lost or traded goods, or the movement of individuals rather than sustained control. Basing territorial claims on such minimal evidence risks overstating the reach and permanence of imperial power.");
    } else if (responses.threshold_seals === 1) {
      fragments.push("You require a threshold—at least ten seals—to suggest political presence.");
    } else if (responses.threshold_seals === 2) {
      fragments.push("For stronger claims of territorial control, you expect fifty or more seals to be present at a site. Only a handful of sites meet this threshold—typically large urban centers where Hittite rule is already well-attested, reinforcing a more confident interpretation of imperial presence.");
    }
  } else if (responses.evidence_seals === 1) {
    fragments.push("You reject seals and related texts found beyond the capital as insufficient evidence for mapping Hittite control. Given their portability and the wide range of relationships they might reflect—such as diplomacy, trade, or temporary presence—you suggest that these objects alone cannot substantiate claims of stable, territorial authority.");
  }

  // Monuments
  if (responses.evidence_monuments === 0) {
    fragments.push("Landscape monuments have long attracted scholarly attention, with debates over their function evolving over time. While they were once widely interpreted as border markers, growing scholarly consensus now leans toward viewing them as ritual installations with symbolic significance. Yet, their political efficacy remains contested. Despite this ambiguity, you regard such monuments as meaningful expressions of territorial authority, reflecting an intentional projection of presence in the landscape. A wide variety of traces have been categorized as landscape monuments, ranging from large rock reliefs to more modest inscriptions—such as the lightly carved Hieroglyphic Luwian texts at Suratkaya in the Beşparmak Mountains, which mention titles like “Great Prince” a title never attested elsewhere and possible references to regional powers like Mira (Harmanşah 2018).");
  // add this image as a small image to the description
  fragments.push(`
    <div style="float: right; width: 100px; margin-left: 10px; text-align: center;">
      <img src="https://www.hittitemonuments.com/latmos/latmos07.jpg" alt="Latmos relief" style="width: 100px; height: 100px;">
      <div style="font-size: 10px;">Latmos Relief</div>
    </div>
  `);
  } else if (responses.evidence_monuments === 1) {
    fragments.push("However, you remain skeptical about using landscape monuments as a reliable basis for mapping political power, given their ambiguous function and the uncertainty surrounding their intended audience and purpose.");
  }

  // Pottery
  if (responses.evidence_pottery === 0) {
    fragments.push("Lastly, you see standardized pottery distributions as reflecting imperial influence across regions. This perspective aligns with long-standing assumptions in Hittite archaeology that ceramic homogeneity, especially the widespread presence of drab ware and standardized forms, signals centralized control or shared administrative practices. However, as Ulf-Dietrich Schoop (2003) argues, this interpretation may oversimplify a complex picture: typological continuity, limited regional stratigraphic data, and the lack of clear ceramic markers for specific periods mean that such distributions may just as well reflect slow-paced technological traditions rather than active imperial integration. Still, your stance implies confidence that uniform pottery styles—however imperfect as chronological tools—can function as proxies for tracing the reach and cultural coherence of the Late Hittite state.");
  } else if (responses.evidence_pottery === 1) {
    fragments.push("You choose not to interpret pottery styles as markers of political control. This suggests a more cautious approach, recognizing that ceramic similarities may arise from shared traditions, trade, or local imitation rather than direct imperial administration. Given the typological continuity and slow pace of ceramic change in Hittite contexts, as noted by Schoop (2003), relying on pottery alone may risk overstating the coherence or extent of Hittite authority. Your position reflects skepticism toward equating material uniformity with political integration.");

  }

  // Inject into page
  const fullDescription = fragments.join(" ");
  header.textContent = "Hittite Territoriality: Your Perspective";
  resultsDiv.innerHTML = `<p>${fullDescription}</p>`;
  desc.style.display = "block";
  desc.style.visibility = "visible";
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

