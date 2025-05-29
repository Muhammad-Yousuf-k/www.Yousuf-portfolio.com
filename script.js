// for typing animation==================================================================
var i = 0;
var txt = "Specialized in Web Wevelopment"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    console.log("sdsdssd");
  }
}

setTimeout(() => {
  typeWriter();
}, 600);

// for projects card buttons==================================================================
let project = document.getElementById("projbtn");
let certi = document.getElementById("cerbtn");
let tech = document.getElementById("techbtn");

project.addEventListener("click", () => {
  let con1 = document.getElementById("projects-container1");
  let con2 = document.getElementById("projects-container2");
  let con3 = document.getElementById("projects-container3");

  if (con1.style.display === "none") {
    con1.style.display = "flex";
    con2.style.display = "none";
    con3.style.display = "none";
    console.log("project true");
  } 
});

certi.addEventListener("click", () => {
  let con2 = document.getElementById("projects-container2");
  let con1 = document.getElementById("projects-container1");
  let con3 = document.getElementById("projects-container3");

  if (con2.style.display === "none") {
    con1.style.display = "none";
    con3.style.display = "none";
    con2.style.display = "flex";
    console.log("true");
  }

});

tech.addEventListener("click", () => {
  let con3 = document.getElementById("projects-container3");
  let con2 = document.getElementById("projects-container2");
  let con1 = document.getElementById("projects-container1");

  if (con3.style.display === "none") {
    con3.style.display = "flex";
    con1.style.display = "none";
    con2.style.display = "none";
    console.log("true");
  }
});

// for projects card==================================================================
const projects = [
  {
    title: "Netflix Clone",
    description: "practicing to enchant to skills, try to clone Netflix",
    image: "img/netflix.png",
    link: "https://muhammad-yousuf-k.github.io/Netflex-clone/",
  }
];
const certificate = [
  {
    title: "certificate ",
    description: "my personal portfolio built using html css js",
    image: "img/dev.png",
  },
  {
    title: "spider finder app",
    description: "a simple and clean todo list application",
    image: "img.dev.png",
  }

];
const techz = [
  {
    title: "tech Stact ",
    description: "my personal portfolio built using html css js",
    image: "img/dev.png",
  },
  {
    title: "chucha finder app",
    description: "a simple and clean todo list application",
    image: "img/dev.png",
  }

];


// project============================
const container = document.getElementById("projects-container1");
projects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
 <img src="${project.image}" alt="${project.title}">
 <h3>${project.title}</h3>
 <p>${project.description}</p>
 <a href="${project.link}">
 <button>view project</button>
 </a>
 `;
  container.appendChild(card);
});





// certificate============================
const container1 = document.getElementById("projects-container2");
certificate.forEach((certificate) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
 <img src="${certificate.image}" alt="${certificate.title}">
 <h3>${certificate.title}</h3>
 <p>${certificate.description}</p>
 <button>view project</button>
 `;
  container1.appendChild(card);
});



// tech stack============================
const container2 = document.getElementById("projects-container3");
techz.forEach((techz) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
 <img src="${techz.image}" alt="${techz.title}">
 <h3>${techz.title}</h3>
 <p>${techz.description}</p>
 <button>view project</button>
 `;
  container2.appendChild(card);
});
