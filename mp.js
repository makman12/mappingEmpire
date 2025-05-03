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
    date: "1851",
    src: "Lapie1830.jpeg",
    full: "Lapie1830.jpeg",
    parameters: {north: 0, relative:1, borders: 0},
    text1:"<p><p>It’s an interesting contradiction that this visualization of itineraries in Roman Anatolia places so much visual emphasis on regional borders. In fact, the colorful boundary-lines appear to be a later, hand-drawn addition; Lapie’s originals are uncolored, and represent borders as unobtrusive dotted lines. This map’s primary purpose was to visualize routes: in particular, it depicts the network of roads and waystations that covered the Roman Empire during the first millennium CE. </p> </p>",
    text2:"<p>Pierre Lapie was a prolific 19th-century French cartographer as well as an officer in the French military. In addition to producing maps for King Louis XVIII of France, Lapie was commissioned to create an atlas of the Roman road networks by the French aristocrat Agricol Fortia d’Urban. </p> <p>Lapie combined information from several Roman maps and itineraries, including the Peutinger Table (try selecting North/Relative/Routes), the Antonine Itinerary, and the Bordeaux/Jerusalem Itinerary. Roman itineraries were essentially catalogues of distances between places and the locations of waystations between points. The most comprehensive Roman itineraries, including the Antonine itinerary, were likely products of imperial surveys. </p><p>Although Pierre Lapie’s life is not well documented, he and his son, the cartographer Alexandre Emile Lapie, were both closely associated with the French monarchy that was first usurped by Napoleon I and then restored to power by his defeat. Having lived through the imperial wars of Napoleon, who himself laid claim to the legacy of the Roman Empire, and died just before the restoration of the French Empire by Napoleon III, Lapie’s career was profoundly shaped by the rise and fall of empires. We might ask how these experiences influenced his approach to mapping the Roman empire. </p><p><b>References:</b></p><p>Fodorean, F.-G. 2016. “Pierre Lapie and the Roman Road Network in Moesia.” Geographia Napocensis 10(1):29–38.</p><p>Talbert, R.J.A. 2018. “A Forgotten Masterpiece of Cartography for Roman Historians: Pierre Lapie’s Orbis Romanus Ad Illustranda Itineraria (1845) in H. M. Schellenberg, V. E. Hirschmann, Andreas Krieckhaus, Eds., A Roman Miscellany: Essays in Honour of Anthony R. Birley on His Seventieth Birthday (Gdańsk: Gdańsk University, 2008, Pp. 149–56 and Maps).” In Challenges of Mapping the Classical World. Routledge.</p>"
  },
  {
    id: "lapie2",
    title: "Orbis Romanus ad Illustranda Itineraria, ",
    author: "Pierre Lapie, ",
    date: "1851",
    src: "Lapie1830.jpeg",
    full: "Lapie1830.jpeg",
    parameters: {north: 0, relative:1, borders: 1},
    text1:"<p> Although at first glance Lapie’s map appears to emphasize political boundaries, the colorful boundary-lines here actually seem to have been added later. In the original map, which unfortunately is not so well digitized as this later edition, borders appear as much more subtle dotted lines. This map’s primary purpose was to visualize routes: in particular, it depicts the network of roads and waystations that covered the Roman Empire during the first millennium CE. </p>",
    text2:"<p>Pierre Lapie was a prolific 19th-century French cartographer as well as an officer in the French military. In addition to producing maps for King Louis XVIII of France, Lapie was commissioned to create an atlas of the Roman road networks by the French aristocrat Agricol Fortia d’Urban. </p> <p>Lapie combined information from several Roman maps and itineraries, including the Peutinger Table (try selecting North/Relative/Routes), the Antonine Itinerary, and the Bordeaux/Jerusalem Itinerary. Roman itineraries were essentially catalogues of distances between places and the locations of waystations between points. The most comprehensive Roman itineraries, including the Antonine itinerary, were likely products of imperial surveys. </p><p>Although Pierre Lapie’s life is not well documented, he and his son, the cartographer Alexandre Emile Lapie, were both closely associated with the French monarchy that was first usurped by Napoleon I and then restored to power by his defeat. Having lived through the imperial wars of Napoleon, who himself laid claim to the legacy of the Roman Empire, and died just before the restoration of the French Empire by Napoleon III, Lapie’s career was profoundly shaped by the rise and fall of empires. We might ask how these experiences influenced his approach to mapping the Roman empire. </p><p><b>References:</b></p><p>Fodorean, F.-G. 2016. “Pierre Lapie and the Roman Road Network in Moesia.” Geographia Napocensis 10(1):29–38.</p><p>Talbert, R.J.A. 2018. “A Forgotten Masterpiece of Cartography for Roman Historians: Pierre Lapie’s Orbis Romanus Ad Illustranda Itineraria (1845) in H. M. Schellenberg, V. E. Hirschmann, Andreas Krieckhaus, Eds., A Roman Miscellany: Essays in Honour of Anthony R. Birley on His Seventieth Birthday (Gdańsk: Gdańsk University, 2008, Pp. 149–56 and Maps).” In Challenges of Mapping the Classical World. Routledge.</p>"
  },
  {
    id: "rogeriana",
    title: "Tabula Rogeriana, ",
    author: "Muhammad al-Idrisi, ",
    date: "1154",
    src: "TabulaRogerianaCropped.jpg",
    full: "RogerianaFull.jpg",
    parameters: {north: 1, relative: 1, borders: 1},
    text1:"<p>The Tabula Rogeriana, also called the Kitāb Rud̲j̲ār or “Book of Roger,” is a 12th century atlas produced by the Muslim cartographer Muhammad al-Sharif al-Idrisi. This reproduction of al-Idrisi’s world map, with transliterated Arabic place-names was created by Konrad Millar in 1926. </p><p>Unlike most European maps of the time, which were often oriented with East at the top of the map and Jerusalem in the center, al-Idrisi’s world map places South at the top and Mecca in the middle. Al-Idrisi did use a coordinate system to draw his maps, making them more geographically consistent than many others of his era, although the specific longitudes and latitudes he used have been only partially preserved. He also included in the map some non-existent places inherited from earlier Ptolemaic geography, which were placed in approximated locations. </p>",
    text2:"<p>Al-Idrisi was a member of the Moroccan elite, his family having previously been regional rulers. Al-Idrisi lived and worked at a time of significant conflict between rival Islamic dynasties in Morocco and Spain. The Tabula Rogeriana was in fact not produced for any of the major Islamic powers, but rather for the Norman king of Sicily, Roger II, who apparently promised al-Idrisi his political protection in return. </p><p>Al-Idrisi’s maps reflect Roger II’s imperial and expansionist goals. In addition to attempts to acquire new territory in North Africa, Roger II was in conflict with the Byzantine Empire in Anatolia. Perhaps the absence of political borders in al-Idrisi’s map reflects Roger II’s desire to supplant the political influence of rival powers. </p><p><b>References:</b></p><p>Ahmad, S.M. 2008. “Al-Idrisi.” Ed. Helaine Selin. Encyclopaedia of the History of Science, Technology, and Medicine in Non-Western Cultures. Springer Science & Business Media. </p><p>Ducne, J.-C. 2011. “Les coordonnes gographiques de la carte manuscrite d’al-Idrs (Paris, Bnf ar. 2221).” 86(2):271–85. </p><p>Idrīsī, and K. Miller. 1928. “Weltkarte Des Idrisi Vom Jahr 1154 n. Ch., Charta Rogeriana.” Stuttgart: Konrad Miller. Library of Congress Digital Collections. </p><p>Oman, G. 2012. “Al-IDRISI.” . Leiden, Koninklijke Brill NV. </p><p>Tolmacheva, M. 1996. “Bertius and Al-Idrísí: An Experiment in Orientalist Cartography.” Terrae Incognitae.  </p>"
  },
  {
    id: "peutinger",
    title: "Peutinger Table, ",
    author: "author unknown, ",
    date: "c. 1200",
    src: "PeutingerTable.jpg",
    full: "PeutingerTableFull.png",
    parameters: {north: 0, relative: 0, borders: 1},
    text1:"<p>In his now seminal critique of uncritical cartographic practices, Arno Peters argues in The New Cartography that every cartographic decision is political. He proposes a new type of world map which would present countries in equal area projections instead of the more common Mercator projection which Peters argued distorted geographical relative positions to unequal sizes which underscored political power through such sizes. Thus, with this critique Peters emphasized that relative positioning underscores political positioning more than geographical. Orientation thus also has an inherently political meaning, as it dictates what is at the center, vertical extremes, and horizontal extremes of the map, thus emphasizing and marginalizing certain geographical regions respectively.<p></p><p> Similarly, emphasis on routes and networks makes a distinct political statement. In contrast to the so-called “blob maps” which emphasize borders, such network-based maps emphasize connectivity between regions and across the expanses of a map. It also implies less fixity and unilinear control than borders, as networks and routes can showcase flow of goods, people, and power as multidirectional. While the decision to emphasize networks can certainly also emphasize scope of control like borders do, they can also portray a more dynamic and fluid landscape of such control.</p>",
    text2: "<p> The Peutinger Table or Map is thought to have been made in the early 13th century, and seems to be a copy of a late Roman world map, since it lacks the distinctly Christianized features expected from medieval maps. Where medieval Christian maps typically center on Jerusalem, and include the Garden of Eden and Biblical figures across the map,  the Peutinger Table has no such inclusions, while also having place names written in Latin and mileage marked by Roman numerals. Thus seems distinctly Roman, but from a period prior to overtly Christianized cartography. The complete map itself seems to depict the orbis terrarum from the Western edge of the Empire in the British Isles to the most eastward extreme of Alexander’s conquest in India.</p> <p>The Peutinger Table uses what would eventually become the standard medieval European North orientation. Its arrangement of places is not “absolute” in that more emphasized cities take up much larger space, such as Antioch and Constantinople. This obviously portrays these cities as both geopolitically significant in sheer magnitude as well as in centrality to the routes which the table emphasizes.</p><p><b>References:</b></p><p>Peters, Arno. 1983. The new cartography. New York: Friendship Press. </p><p>Smith, M.L., 2005. Networks, territories, and the cartography of ancient states. Annals of the Association of American Geographers, 95(4), pp.832-849.</p><p>Talbert, R.J., 2010. Rome's world: the Peutinger map reconsidered. Cambridge University Press.</p>",
  },
  {
    id: "ebstorf",
    title: "Ebstorf Map, ",
    author: "Gervase of Ebstorf, ",
    date: "1234-1240",
    src: "EbstorfDetail.jpg",
    full: "EbstorfFull.jpg",
    parameters: {north: 2, relative: 0, borders: 1},
    text1: "<p> The Ebstorf map is linked to 12th century mapmaker Gervase of Tilbury, who is thought to have been provost of the abbey of Ebstorf. This world map places Jerusalem in the center, with the entire world becoming cruciform as Christ’s pierced hands are at the horizontal extremes and his head at the top. Since medieval Christian thought associated the second coming of Christ with Jerusalem and thus also the East, Christ’s head and thus also the map, is orientated with East on top.</p>",
    text2: "<p>Emphasis on routes and networks makes a distinct political statement. In contrast to the so-called “blob maps” which emphasize borders, such network-based maps emphasize connectivity between regions and across the expanses of a map. It also implies less fixity and unilinear control than borders, as networks and routes can showcase flow of goods, people, and power as multidirectional. While the decision to emphasize networks can certainly also emphasize scope of control like borders do, they can also portray a more dynamic and fluid landscape of such control.</p> <p> The Ebstorf map illustrates all of the above-mentioned cartographic principles. Its orientation makes a theological and thus political statement of Christ’s—and thus the Church’s—control over the world. It’s arrangement of places is not “absolute” in that more emphasized cities take up much larger space, such as Rome, Jerusalem and even theological spaces such as the Garden of Eden. Thus, the relative arrangement showcases the power of not only certain cities, but also it tacitly underscores and reinforces the power of the hegemonically Christian ideological system.</p> <p><b>References:</b></p><p>Peters, Arno. 1983. The new cartography. New York: Friendship Press. </p><p>Smith, M.L., 2005. Networks, territories, and the cartography of ancient states. Annals of the Association of American Geographers, 95(4), pp.832-849.</p><p>Talbert, R.J., 2010. Rome's world: the Peutinger map reconsidered. Cambridge University Press.</p><p>Woodward, David 1987.Chapter 18: Medieval Mappaemundi. In Harley, J. B.; Woodward, David (eds.). The History of Cartography. Vol. 1. Chicago: University of Chicago Press. </p>"
  },
  {
    id: "Maggiolo",
    title: "Planisphere, ",
    author: "Vesconte Maggiolo, ",
    date: "1531",
    src: "Maggiolo.png",
    parameters: {north: 1, relative: 0, borders: 1},
    full: "MaggioloFull.png",
    text1:"<p>Vesconte Maggiolo was the official cartographer of Genoa during the early 16th century. Maggiolo lived and worked in one of the formational periods of cartography, soon after Europeans first arrived in the New World. This particular map is really a planisphere, a nautical chart of the world. Although it depicts the entire globe, it is better known as the first cartographic representation of New York Harbor. </p><p>As a nautical chart, Maggiolo’s map makes little effort to depict terrestrial geography in detail. Instead of a coordinate grid, portolan charts use rhumb lines, possibly to allow sailors to better calculate bearings and plan sailing routes. As a result of the focus on maritime navigation, only coastal places are indicated on this map, and they are ordered relative to other coastal sites rather than in relation to their actual geographic position.</p>",
    text2:"<p>However, Maggiolo’s chart is not a primarily functional object. The map is full of decorative elements that were intended to appeal to wealthy clients, and the chart was probably meant for display rather than practical use. On the other hand, these elements also serve the purpose of indicating political control. In addition, for a modern audience, they shed some light on how cartographers conceptualized other cultures– or at least how their audience expected to see certain cultures represented. </p><p>The map also has been interpreted to carry a specific political message. Maggiolo’s depiction of political control over the New World does not correspond to political reality, but rather seems to attempt to equally acknowledge claims by the rival colonial powers Spain and France. As a result, some have seen this map as a call for peace. </p><p>Unusually for an example of European cartography, Maggiolo’s planisphere appears to have been intended to be read south-up. Major regional labels, such as those for Africa and India, are legible only in this orientation. However, the artistic elements on the map are positioned to face every possible direction. Perhaps Maggiolo intended to give the impression of a spherical globe, without compromising the convenience of two-dimensional representation.</p><p><b>References:</b></p><p><p>Caraci, G. 1937. “A Little Known Atlas by Vesconte Maggiolo, 1518.” Imago Mundi 2:37–54.</p><p>Daniel Crouch Rare Books. 2016. The Vesconte Maggiolo Planisphere of 1531, Vesconte Maggiolo. London, New York: Daniel Crouch Rare Books.</p><p>Louvre Abu Dhabi. Planisphere, Vesconte Maggiolo (1531). LAD 2017.005. https://collection.louvreabudhabi.ae/en/object/planisphere-100053414 </p>"
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
    text2: "<p>Like many other medieval Islamic maps, the al-Istakhri map places south at the top. This version of the world map includes the Indian Ocean and Red Sea above and the Mediterranean and Black Sea below. The Nile is represented as a bar which protrudes upwards from the Mediterranean.</p><p> Maps of the Balkhi school do not use any map projection, consistent scale, or system of longitude and latitude. Their arrangement of places is thus not “absolute,” in that places on the map have no shared geographical reference point.</p><p>However, they do carefully illustrate the boundaries of various regions and provinces of the Abbasid empire. The world maps of the Balkhi school generally formed part of a set with individual maps of each province. Although the Balkhi cartographers often claimed to be mapping the entire Islamic world, this is not entirely true. Spain, which had been conquered by the Umayyad Caliphate several centuries earlier, does not get a regional map in the Balkhi canon. Anatolia, which was still under Byzantine control in the 10th century, is also not mapped in detail.</p><p><b>References:</b></p> <p>Tibbetts, G.R. (1992). The Balkhī school of geographers. In J. B. Harley & D. Woodward (Eds.). History of cartography. Vol. II, Book 1. Cartography in the traditional Islamic and South Asian Societies (pp. 108–136). Chicago: University of Chicago Press.</p><p> Leiden University Libraries. An abridgement of Kitāb al-masālik wa-al-mamālik by Abū Isḥāq Ibrāhīm b. Muḥammad al-Iṣṭaḵrī (4/10th century) Or. 3101. http://hdl.handle.net/1887.1/item:1577846 </p>"
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
    text1: "<p> Although there are numerous examples of south-up maps in historical cartography, almost none seem to combine an absolute spatial arrangement (i.e., relative to a consistent geographic system) with the depiction of borders.</p><p>Why might this be the case? Although south-up maps are now much less common than north-up maps, there have been several places and times where they were predominant. The maps produced by Muslim geographers during the early Middle Ages, for example, tended to be oriented with south up and Mecca in the center of the map. </p> <p>However, although various coordinate systems were invented by Muslim geographers, few actual cartographic visualizations survive. The maps that do employ an absolute arrangement and a south-up orientation, also, for some reason, do not depict borders. Select South/Absolute/Routes to see an example and for further discussion. </p> <p>As opposed to the more multidirectional and fluid portrayal of control which routes and networks tend to emphasize, borders tend to underscore more static and uniform systems of control. As such, they are perhaps more useful as tools to project an ideal of political power than to understand the reality of it. The so-called “blob maps” produced by an emphasis on borders has been much criticized in modern cartographic theory because of its oversimplification and ossification of dynamic social processes, though of course such maps produced by states are analytically useful to scholars as a showcase of political ideology. In addition to this use, they are useful to analyze how states demarcate and police claimed territory.</p>",
    text2:""
  },
  {
    id:"EastAbsoluteRoutes",
    title:"",
    author: "",
    date: "",
    src: "",
    parameters: {north: 2, relative: 1, borders: 1},
    full: "",
    text1: "<p> Not many maps put East at the top. The most well-known of these are the Medieval Christian mappmundi, circular world maps with an East-West vertical axis (Select East/Relative/Routes for an example!). However, virtually all of the mappamundi employ a heavily symbolic representation of geography, and do not try to depict real distances or topography. </p></p><p><b>References:</b></p><p>Kline, N.R. 2003. Maps of Medieval Thought: The Hereford Paradigm. Boydell Press.</p> </p>",
    text2:""
  },
  {
    id:"EastAbsoluteBorders",
    title:"",
    author: "",
    date: "",
    src: "",
    parameters: {north: 2, relative: 1, borders: 0},
    full: "",
    text1: "<p>Not many maps put East at the top. The most well-known of these are the Medieval Christian mappmundi, circular world maps with an East-West vertical axis (Select East/Relative/Routes for an example!). However, virtually all of the mappamundi employ a heavily symbolic representation of geography and political control. Instead of distinct boundaries, mappamundi tend to use pictorial representations, such as castles or towns, to give a general idea of an area’s political or social organization. </p></p><p><b>References:</b></p><p>Kline, N.R. 2003. Maps of Medieval Thought: The Hereford Paradigm. Boydell Press.</p></p>",
    text2:""
  },
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
  

