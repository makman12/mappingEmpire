const questions = [
    {
      id: "north",
      question: "Which direction is up?",
      answers: ["North", "South"]
    },
    {
      id: "borders",
      question: "What's more important, borders or routes?",
      answers: ["Borders", "Routes"]
    },
    {
      id: "monuments",
      question: "What's a better sign of control, monuments or administration?",
      answers: ["Monuments", "Administration"]
    },
    {
      id: "landmarks",
      question: "Which is more important, landmarks or roads?",
      answers: ["Landmarks", "Roads"]
    },
    {
      id: "river",
      question: "Which is more important, rivers or roads?",
      answers: ["Rivers", "Roads"]
    },
    {
      id: "mountains",
      question: "Which is more important, mountains or valleys?",
      answers: ["Mountains", "Valleys"]
    }
  ];


//set map characteristics
const maps = [
  {
    id: "lapie",
    src: "Lapie1830.jpeg",
    parameters: {north: 0, borders: 0, monuments: 0, landmarks: 0, river: 0, mountains: 0}
  },
  {
    id: "rogeriana",
    src: "TabulaRogerianaCropped.jpg",
    parameters: {north: 1, borders: 1, monuments: 0, landmarks: 0, river: 0, mountains: 0}
  }
];

function showClicked(q, answer) {
  first = `${q.id}A0`;
  second = `${q.id}A1`;
    //switch with partner answer if choice is changed
  if (answer == q["answers"][0]) {
    document.getElementById(second).style.color = "black";
    document.getElementById(first).style.color = "#6871a8";
  } else {
    document.getElementById(first).style.color = "black"
    document.getElementById(second).style.color = "#6871a8";
  }
}

  const responses = {};
  
  function createPrompts() {
    const promptBox = document.getElementById("promptbox");
  
    questions.forEach((q, index) => {
      const promptDiv = document.createElement("div");
      promptDiv.className = "prompt";
      promptDiv.id = `question${index}`;
      promptDiv.style.display = index === 0 ? "block" : "none";
  
      const p = document.createElement("p");
      p.textContent = q.question;
      promptDiv.appendChild(p);
  
      q.answers.forEach((answer, i) => {
        const button = document.createElement("button");
        button.className = "promptbutton";
        button.id = `${q.id}A${i}`;
        button.textContent = answer;
  
        button.onclick = function () {
          showClicked(q, answer);
          responses[q.id] = i;
  
          if (index < questions.length - 1) {
            showQuestion(index + 1);
          } else {
            //check to make sure there's not already a restart button
            if (!document.getElementById("restart")){ 
              showRestart(promptBox);
            }
            runCompress();
            selectMap();
            //updateMapView();  // new map logic handler
            showResults();
          }
        };
  
        promptDiv.appendChild(button);
      });
  
      promptBox.appendChild(promptDiv);
    });
  }

  //create a restart button below prompts once all questions have been answered
  function showRestart(div){
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
  
      // Reset styles
      document.getElementById("container").style.cssText = "";
      document.getElementById("promptbox").style.cssText = "transform: scale(1)";
      document.getElementById("mapholder").style.cssText = "visibility: hidden; display: none;";
      document.getElementById("desc").style.cssText = "display: none; visibility: hidden;";
  
      // Reinitialize the questions
      createPrompts();
      showQuestion(0);
    });
  }
  
  function showQuestion(index) {
    const nextQ = document.getElementById(`question${index}`);
    nextQ.style.display = "block";
    nextQ.style.visibility = "visible";
    nextQ.style.animation = "slide-down 1s";
  }
  

  
  function runCompress() {
    document.getElementById("container").style.cssText =
      "justify-content: space-around; align-items: center; align-content: space-between;";
    document.getElementById("promptbox").style.cssText = "transform: scale(.68)";
  }

  function objectsEqual(a, b) {
    av =Object.values(a);
    bv = Object.values(b);
   // if (a === b) return true;
    if (av == null || bv == null) {
      return false;
    } else if (av.length !== bv.length){
      return false;
    } 
  
    for (var i = 0; i < av.length; ++i) {
      if (av[i] !== bv[i]) {
        return false;
    }}
    return true;
  }
  
  
  function selectMap() {
   mapchoice = "lapie"; //keeping lapie as temporary default
   mapheader = "";
   for (m in maps) {
    if (objectsEqual(maps[m].parameters, responses)) {
      mapchoice = maps[m].src;
      mapheader =  maps[m].id;
    }
   }
   document.getElementById("mapholder").src = mapchoice;
   document.getElementById("mapholder").style.cssText = "visibility: visible; display: block; animation: fadeInOpacity 1s ease-in;";
   document.getElementById("desc").style.cssText = "display: block; visibility: visible;";
   document.getElementById("descHeader").style.cssText = "display: block; visibility: visible; animation: fadeInOpacity 1s ease-in;";
   document.getElementById("descHeader").textContent = mapheader;
  };
  

  function updateMapView() {
    const mapImage = document.getElementById("mapholder");
  
    // Reset styles
    mapImage.style.transform = "rotate(0deg)";
  
    // NORTH: if user chose "South", rotate 180
    if (responses.north === 1) {
      mapImage.style.transform = "rotate(180deg)";
    }
  
    // Call fake functions for now
    handleNorth(responses.north);
    handleBorders(responses.borders);
    handleMonuments(responses.monuments);
    handleLandmarks(responses.landmarks);
    handleRiver(responses.river);
    handleMountains(responses.mountains);
  }

  
  // Stub functions to be filled in
  function handleNorth(choice) {
    console.log("North choice:", choice);
  }
  
  function handleBorders(choice) {
    console.log("Borders choice:", choice);
  }
  
  function handleMonuments(choice) {
    console.log("Monuments choice:", choice);
  }
  
  function handleLandmarks(choice) {
    console.log("Landmarks choice:", choice);
  }
  
  function handleRiver(choice) {
    console.log("River choice:", choice);
  }
  
  function handleMountains(choice) {
    console.log("Mountains choice:", choice);
  }

  function showResults() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = questions.map(q => `
      <p>${q.question} <strong>${q.answers[responses[q.id]]}</strong></p>
    `).join("");
  }
  
  // Run on page load
  window.onload = () => {
    createPrompts();
    showQuestion(0);
  };
  

