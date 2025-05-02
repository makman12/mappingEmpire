const questions = [
    {
      id: "north",
      question: "Which direction is \"up\"?",
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
    title: "Orbis Romanus ad Illustranda Itineraria, ",
    author: "Pierre Lapie, ",
    date: "1845",
    src: "Lapie1830.jpeg",
    full: "Lapie1830.jpeg",
    parameters: {north: 0, relative:1, borders: 0}
  },
  {
    id: "rogeriana",
    title: "Tabula Rogeriana, ",
    author: "Muhammad al-Idrisi, ",
    date: "1154",
    src: "TabulaRogerianaCropped.jpg",
    full: "RogerianaFull.jpg",
    parameters: {north: 1, relative: 1, borders: 1}
  },
  {
    id: "peutinger",
    title: "Peutinger Table, ",
    author: "author unknown, ",
    date: "c. 1200",
    src: "PeutingerTable.jpg",
    full: "PeutingerTableFull.png",
    parameters: {north: 0, relative: 0, borders: 1}
  },
  {
    id: "ebstorf",
    title: "Ebstorf Map, ",
    author: "Gervase of Ebstorf, ",
    date: "1234-1240",
    src: "EbstorfDetail.jpg",
    full: "EbstorfFull.jpg",
    parameters: {north: 2, relative: 0, borders: 1}
  },
  {
    id: "digitalatlas",
    title: "Digital Map of the Roman Empire, ",
    author: "Johan Åhlfeldt, ",
    date: "2020",
    src: "DigitalAtlas.png",
    full: "DigitalAtlas.png",
    parameters: {north: 0, relative: 1, borders: 1}
  },
  {
    id: "Maggiolo",
    title: "Planisphere, ",
    author: "Vesconte Maggiolo, ",
    date: "1531",
    src: "Maggiolo.png",
    parameters: {north: 1, relative: 0, borders: 1},
    full: "MaggioloFull.png"
  },
  {
    id: "Pauly",
    title: "Die östliche Mittelmeerwelt in der späten Bronzezeit (ca. 1400 - 1200 v. Chr.), ",
    author: "Der Neue Pauly, ",
    date: "2015",
    src: "pauly.jpg",
    parameters: {north: 0, relative: 0, borders: 0},
    full: "adjacency.png",
    text1: "<p> Interestingly, not many maps combine a northern orientation, a relative arrangement of places, and a representation of borders. In fact, we were able to find no such historic maps. </p> Are these categories mutually exclusive? In theory, one could represent political or cultural entities as shapes and show their spatial orientation relative to each other, without any fixed geographical reference point. However, this kind of representation would probably look less like a traditional map, and more like the adjacency diagrams used in architecture in order to demonstrate spatial relationships.</p>",
    text2: "<p> Another alternative is to loosely indicate relationships with both major topographical features and other places, therefore preserving some geographic information (Try selecting South/Relative/Borders to see an example!). </p><p>On the other hand, we could also consider some contemporary academic maps to be examples of this type. Maps like the one above represent cultural, linguistic, or political influence as discrete but ill-defined shapes. They have borders, defined by different colors or shading. However, these borders do not have the kind of correspondence with the actual topography that we expect from many other map types. </p> <p> In this map, which depicts the influence of the Aegean Mycenaean culture, “borders” are based partly on the geographic distribution of certain kinds of evidence, mostly Mycenaean-style objects and examples of the Mycenaean writing system, Linear B. However, these borders are also, clearly, somewhat arbitrary. This map is more useful for showing the relationships between different “cultures” than for indicating their actual geographic extent. </p> <p><b> References:</b> </p> <p>Borgmeyer, N. 2017. “Tools of the Trade | SOA Architecture.” https://soa-inc.com/tools-of-the-trade </p> Die östliche Mittelmeerwelt in der späten Bronzezeit (ca. 1400–1200 v. Chr.). Politische und kulturelle Verflechtungen. 2015. In Der Neue Pauly Supplemente I Online – Band 3. Brill."
  },
  {
    id: "Istakhri",
    title: "Surat al-Ard, ",
    author: "al-Istakhri, ",
    date: "1193",
    src: "IstakhriDetail.jpg",
    parameters: {north: 1, relative: 0, borders: 0},
    full: "Istakhri.jpg",
    text1: "<p>Maps that combine a relative arrangement of places and a representation of borders are fairly uncommon. Relative arrangement seems to be a good way to show how places are connected to each other, but not very good for conveying the kind of political information usually indicated by borders– i.e., the control of political units over specific territories. </p> <p>However, this 12th century “Surat al-Ard” (“Picture of the World”), based on the work of the 10th-century Muslim geographer Abu Ishaq Ibrahim ibn Muhammad al-Farisi al-Istakhri, is an interesting example of just such a map. Al-Istakhri’s map is part of the Balkhi school of cartography, a tradition of Islamic map-making associated with the Abbasid Caliphate.</p>",
    text2: "<p> Maps of the Balkhi school do not use any map projection, consistent scale, or system of longitude and latitude. Their arrangement of places is thus not “absolute,” in that places on the map have no shared geographical reference point.</p><p>However, they do carefully illustrate the boundaries of various regions and provinces of the Abbasid empire. The world maps of the Balkhi school generally formed part of a set with individual maps of each province. Although the Balkhi cartographers often claimed to be mapping the entire Islamic world, this is not entirely true. Spain, which had been conquered by the Umayyad Caliphate several centuries earlier, does not get a regional map in the Balkhi canon. Anatolia, which was still under Byzantine control in the 10th century, is also not mapped in detail.</p><p><b>References:</b></p> <p>Tibbetts, G.R. (1992). The Balkhī school of geographers. In J. B. Harley & D. Woodward (Eds.). History of cartography. Vol. II, Book 1. Cartography in the traditional Islamic and South Asian Societies (pp. 108–136). Chicago: University of Chicago Press.</p><p> Leiden University Libraries. An abridgement of Kitāb al-masālik wa-al-mamālik by Abū Isḥāq Ibrāhīm b. Muḥammad al-Iṣṭaḵrī (4/10th century) Or. 3101. http://hdl.handle.net/1887.1/item:1577846 </p>"
  },
  {
    id: "EastRelativeBorders",
    title: "",
    author: "",
    date: "",
    src: "",
    parameters: {north: 2, relative: 0, borders: 0},
    full: "adjacency.png",
    text1: "<p> Interestingly, there don’t seem to be any maps that combine an eastern orientation, a relative arrangement of places, and a representation of borders. In fact, we were able to find no historic maps with both borders and a relative place-arrangement, regardless of orientation. </p> <p> Are these categories mutually exclusive? In theory, one could represent political or cultural entities as shapes and show their spatial orientation relative to each other, without any fixed geographical reference point. However, this kind of representation would probably look less like a traditional map, and more like the adjacency diagrams used in architecture in order to demonstrate spatial relationships. </p>",
    text2: "<p> Another alternative is to loosely indicate relationships with both major topographical features and other places, therefore preserving some geographic information (Try selecting South/Relative/Borders to see an example!). Some contemporary academic maps, which represent cultural, linguistic, or political influence as discrete but ill-defined shapes, could also be considered examples of this type. (Try selecting “North/Relative/Borders” above to see one!) However, since virtually all regional scholarly maps today have a north-up orientation, an east-up version might be hard to find. </p><p><b>References:</b></p><p>Borgmeyer, N. 2017. “Tools of the Trade | SOA Architecture.” https://soa-inc.com/tools-of-the-trade/ </p>"
  },
  {
    id:"SouthAbsoluteBorders",
    title:"",
    author: "",
    date: "",
    src: "",
    parameters: {north: 1, relative: 1, borders: 0},
    full: "",
    text1: "<p> Although there are numerous examples of south-up maps in historical cartography, almost none seem to combine an absolute spatial arrangement (i.e., relative to a consistent geographic system) with the depiction of borders.</p><p>Why might this be the case? Although south-up maps are now much less common than north-up maps, there have been several places and times where they were predominant. The maps produced by Muslim geographers during the early Middle Ages, for example, tended to be oriented with south up and Mecca in the center of the map. </p> <p>However, although various coordinate systems were invented by Muslim geographers, few actual cartographic visualizations survive. The maps that do employ an absolute arrangement and a south-up orientation, also, for some reason, do not depict borders. Select South/Absolute/Routes to see an example and for further discussion. </p>",
    text2:""
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
           // showResults();
          }
          selectMap(); //now checks if all questions have been answered so map can be regenerated on reclick of any answer
        };
  
        promptDiv.appendChild(button);
      });
  
      promptBox.appendChild(promptDiv);
    });
  }

  //create a restart button below prompts once all questions have been answered. On restart button click, reload the page
  function showRestart(div){
    const p = document.createElement("p");
    p.textContent = "START OVER";
    p.id = "restart";
    div.appendChild(p);
    restartButton = document.getElementById("restart");
    restartButton.addEventListener("click", () => {
      window.location.reload();
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
   mapchoice = "";
   mapheader = "";
   map = "";
   mapfull = "";
   for (m in maps) {
    if (objectsEqual(maps[m].parameters, responses)) {
      map = maps[m];
      mapchoice = maps[m].src;
      mapheader =  maps[m].title+maps[m].author+maps[m].date;
      mapfull = maps[m].full;
    }
   }
   if(Object.keys(responses).length >= 3) {
    document.getElementById("fullmap").src = mapfull;
    document.getElementById("mapholder").src = mapchoice;
    document.getElementById("mapholder").style.cssText = "visibility: visible; display: block; animation: fadeInOpacity 1s ease-in;";
    document.getElementById("desc").style.cssText = "display: block; visibility: visible;";
    document.getElementById("descHeader").style.cssText = "display: block; visibility: visible; animation: fadeInOpacity 1s ease-in;";
    document.getElementById("descHeader").textContent = mapheader;
    document.getElementById("text1").innerHTML = map.text1;
    document.getElementById("text2").innerHTML = map.text2;
    if(mapchoice == ""){
      document.getElementById("mapholder").src = "nomap.png";
    }
   }
  };
  
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
  

