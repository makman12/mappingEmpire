const questions = [
    {
      id: "north",
      question: "Which direction is up?",
      answers: ["North", "South", "East"]
    },
    {
      id: "relative",
      question: "Should we care more about relative or absolute position?",
      answers: ["Relative", "Absolute"]
    },
    {
      id: "borders",
      question: "What's more important, borders or routes?",
      answers: ["Borders", "Routes"]
    },
  ];


//set map characteristics
const maps = [
  {
    id: "lapie",
    title: "Orbis Romanus ad Illustranda Itineraria",
    author: "Pierre Lapie",
    date: "1845",
    src: "Lapie1830.jpeg",
    parameters: {north: 0, relative:1, borders: 0}
  },
  {
    id: "rogeriana",
    title: "Tabula Rogeriana",
    author: "Muhammad al-Idrisi",
    date: "1154",
    src: "TabulaRogerianaCropped.jpg",
    parameters: {north: 1, relative: 1, borders: 1}
  },
  {
    id: "peutinger",
    title: "Peutinger Table",
    author: "author unknown",
    date: "c. 1200",
    src: "PeutingerTable.jpg",
    parameters: {north: 0, relative: 0, borders: 1}
  },
  {
    id: "ebstorf",
    title: "Ebstorf Map",
    author: "Gervase of Ebstorf",
    date: "1234-1240",
    src: "EbstorfDetail.jpg",
    parameters: {north: 2, relative: 0, borders: 1}
  }

];

function showClicked(q, answer) {
  prompts = q.answers;
  for (p in prompts){
   document.getElementById(prompts[p]).style.color = "black";
  }
  document.getElementById(answer).style.color = "#6871a8";
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
        button.className = "promptbutton "+q.id;
        button.id = answer;
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
      mapheader =  maps[m].title+", "+maps[m].author+", "+maps[m].date;
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
  

