
let colors = ["181be8", ""];
console.log(colors);

window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted || 
                         ( typeof window.performance != "undefined" && 
                              window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    window.location.reload();
  }
});

$(document).ready(function(){
    // to fade in on page load
    $("body").css("display", "none");
    $("body").fadeIn(500); 
    // to fade out before redirect
    $('a').click(function(e){
        redirect = $(this).attr('href');
        e.preventDefault();
        $('body').fadeOut(500, function(){
            document.location.href = redirect
        });
    });
})

class Project {
  constructor(name, linksrc, desc, imgSrc, tech) {
    this.name = name;
    this.linksrc = linksrc;
    this.desc = desc;
    this.imgSrc = imgSrc;
    this.tech = tech;
  }
}

var projects = new Array();
let p1 = new Project(
  "WeSurf",
  "https://gitfront.io/r/saarahp/c99f325622777be3520704531729b6738cd663fb/WeSurf/",
  "This is a cross platform crowdsourcing mobile application (Android & iOS) for surfers in NSW. The users save surfing locations that they are interested in, and then get all the relevant surfing information about those spots. Users can create accounts and validate other information uploaded by users, view their favourite surfing locations and assess the danger levels of a surf spot.",
  "https://cdn.glitch.com/ec05c6ce-7fe4-42b0-839f-11cde141480f%2Fwesurf2.JPG?v=1617740048192",
  "Flutter + Dart + Firebase"
);

let p2 = new Project(
  "Kmart Testing Tool",
  "https://github.com/saarahpackeer/testing_tool",
  "This is a tool for running automated functional testing on the kmart website based in java selenium and jUnit. It runs multiple tests to verify that the functions of the website are accurate, such as the categories, filters, update to cart etc. The program runs selenium to conduct the automation and uses jUnit to conduct the testing on the functions. If the functions of the website are correctly working, for example, the cart updates with the correct item and details, the test is passed. If it does not meet the specification then it fails.",
  "https://cdn.glitch.com/ec05c6ce-7fe4-42b0-839f-11cde141480f%2Fkmart.JPG?v=1617740070673",
  "Java + Selenium + jUnit"
);

let p3 = new Project(
  "ARTTool",
  "https://gitfront.io/r/saarahp/129c85b5d5afe5f6cce884fa2d41e0bfb25f36a8/ARTTool/",
  "The focus on this project was to compare the popular FSCS-ART non-numeric testing algorithm against traditional random testing for non-numeric inputs. We analysed a paper on the algorithm, transferring the algorithm to our code, and found similar results, which was that using the ART algorithm proves to be significantly more accurate in finding failure regions than random testing due to its more intuitive method of selecting test candidates. Our results found that the ART algorithm  was able to hit the failure region first in comparison to random testing, however it took more time to complete than RT.",
  "https://cdn.glitch.com/ec05c6ce-7fe4-42b0-839f-11cde141480f%2Farttool.png?v=1617740061063",
  "Java + JavaFX"
);

let p4 = new Project(
  "TravelHelper",
  "https://github.com/saarahpackeer/travelhelperapp",
  "A simple CRUD android app to calculate the complete fuel price needed to complete a cross state travel. The user can create a trip, inputting their start and ending destinations, along with their fuel consumption. The app then outputs the computed overall cost of the journey to the user, and they can then either discard or save the trip. If they save the trip it is saved to the SQLite database, and can be accessed and edited from the home page. If they discard the trip, it is not stored in the database and the app returns to the homepage. ",
  "https://cdn.glitch.com/ec05c6ce-7fe4-42b0-839f-11cde141480f%2Ftravelhelper2.png?v=1617740069065",
  "Java, SQLite"
);

let p5 = new Project(
  "Library System",
  "https://github.com/saarahpackeer/Library_System",
  "A library system which contains user types Student, Librarian and Admin. Users, books and reservation logs are stored in separate text files which acts as the database, and the program reads and updates the data accordingly. This program allows users to register an account, login to an account, and view, reserve, edit (admin), and delete (admin) books in the library.",
  "https://cdn.glitch.com/ec05c6ce-7fe4-42b0-839f-11cde141480f%2FAll%20the%20makeup%2C%20clothes%2C%20and%20music%20I've%20been%20loving(3).png?v=1617993976070",
  "Java"
);

let p6 = new Project(
  "Tourism website prototype",
  "",
  "Under construction",
  "https://cdn.glitch.com/ec05c6ce-7fe4-42b0-839f-11cde141480f%2Ftourism.png?v=1617993682212",
  "HTML, CSS, JS"
);

let p7 = new Project(
  "Australian Federal 2019 Election Twitter Sentiment Analysis with the Naïve Bayes Classifier",
  "https://cdn.glitch.com/ec05c6ce-7fe4-42b0-839f-11cde141480f%2FAustralian%20Federal%202019%20Election%20Twitter%20Sentiment%20Analysis%20with%20the%20Na%C3%AFve%20Bayes%20Classifier.pdf?v=1618420603424",
  "A twitter sentiment analysis on the 2019 Election using the Naive Bayes Classification model. Tweets about the election were extracted and their sentiments were assessed and defined, and the polarity of these tweets were then used to predict the results against real time results. <br><i>(<a href='https://uc-r.github.io/public/images/analytics/naive_bayes/naive_bayes_icon.png)'>Img credit</a>)</i>",
  "https://uc-r.github.io/public/images/analytics/naive_bayes/naive_bayes_icon.png",
  "Naive Bayes Classifier, Knowledge Engineering, Sentiment Analysis, Classification Algorithm, Machine Learning"
);

let p8 = new Project(
  "A Literature Review of the Application of Artificial Neural Networks in the Medical Industry.",
  "https://cdn.glitch.com/ec05c6ce-7fe4-42b0-839f-11cde141480f%2FA%20literature%20review%20of%20the%20application%20of%20Artificial%20Neural%20Networks%20(ANN)%20in%20the%20medical%20industry.pdf?v=1618420503664",
  "A short literature review on the use of ANNs in the medical industry. The following were the research questions concerning the objective: <br>1.	How are neural networks most prominently applied in this field?<br>2. What are the strengths and limitations of using neural networks in the studies?<br>3.	Are there any patterns found from the synthesis of the studies selected?<br><i>(<a href='https://www.researchgate.net/figure/Artificial-neural-network-architecture-ANN-i-h-1-h-2-h-n-o_fig1_321259051'>Img credit</a>)</i>",
  "https://www.researchgate.net/profile/Facundo-Bre/publication/321259051/figure/fig1/AS:614329250496529@1523478915726/Artificial-neural-network-architecture-ANN-i-h-1-h-2-h-n-o.png",
  "Artifical Neural Network, Knowledge Engineering, Machine Learning Applications, Literature Review"
);

projects.push(p1);
projects.push(p2);
projects.push(p3);
projects.push(p4);
projects.push(p5);
projects.push(p6);
projects.push(p8);
projects.push(p7);

for (var i = 0; i < projects.length; i++) {
  console.log(projects[i]);

  var card = document.createElement("div");
  card.className = "grid-item";

  var topInfo = document.createElement("div");
  topInfo.className = "techinfo";
  topInfo.innerHTML = projects[i].tech ;

  var image = new Image();
  image.src = projects[i].imgSrc;

  var info = document.createElement("div");
  info.innerHTML =
    "<h2><a href='"+ projects[i].linksrc +"'>" +
    projects[i].name +
    "</a></h2>" +
    "<p class='techinfo'>" +
    projects[i].tech +
    "</p>" +
    "<p>" +
    projects[i].desc +
    "</p>";

  card.appendChild(image);
  card.appendChild(info);
  $("#grid").append(card);
  $('.grid-item').fadeIn(1500);
}

$(".grid").masonry({
  itemSelector: ".grid-item",
  columnWidth: 440
});
