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
          showClicked(button.id);
  
          responses[q.id] = i;
  
          if (index < questions.length - 1) {
            showQuestion(index + 1);
          } else {
            runCompress();
            selectMap();
            updateMapView();  // new map logic handler
            showResults();
          }
        };
  
        promptDiv.appendChild(button);
      });
  
      promptBox.appendChild(promptDiv);
    });
  }
  
  function showQuestion(index) {
    const nextQ = document.getElementById(`question${index}`);
    nextQ.style.display = "block";
    nextQ.style.visibility = "visible";
    nextQ.style.animation = "slide-down 1s";
  }
  
  function showClicked(id) {
    document.getElementById(id).style.color = "#6871a8";
  }
  
  function runCompress() {
    document.getElementById("container").style.cssText =
      "justify-content: space-evenly; align-items: center; align-content: space-around;";
    document.getElementById("promptbox").style.cssText = "transform: scale(.68)";
  }
  
  function selectMap() {
    document.getElementById("map").style.cssText =
      "visibility: visible; display: block; animation: fadeInOpacity 1s ease-in;";
    document.getElementById("LapieDescription").style.cssText =
      "display: block; visibility: visible; animation: fadeInOpacity 1s ease-in;";
  }
  
  function updateMapView() {
    const mapImage = document.getElementById("lapie");
  
    // Reset styles
    mapImage.style.transform = "rotate(0deg)";
  
    // NORTH: if user chose "South", rotate 180
    if (responses.north === 1) {
      mapImage.style.transform = "rotate(180deg)";
    }
  
    // Call fake functions for now
    handleBorders(responses.borders);
    handleMonuments(responses.monuments);
    handleLandmarks(responses.landmarks);
    handleRiver(responses.river);
    handleMountains(responses.mountains);
  }
  
  // Stub functions to be filled in
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
  