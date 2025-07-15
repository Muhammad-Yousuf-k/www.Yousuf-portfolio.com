// for typing animation==================================================================
var i = 0;
var txt = "Specialized in Web Wevelopment"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    // console.log("sdsdssd");
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
  },

  {
    title: "Tic Tak Toe",
    description: "practicing to enchant to skills, To Make a Game",
    image: "img/TTT.jpg",
    link: "https://muhammad-yousuf-k.github.io/tik-tak-toe/",
  },
  {
    title: "YouTube Clone",
    description: "practicing to enchant to skills, try to clone YouTube",
    image: "icon/YouTubeLogo.svg",
    link: "https://muhammad-yousuf-k.github.io/youtube_cloned/",
  },
  {
    title: "Origin Digital",
    description: "practicing to enchant to skills, try to make leads Mangement System",
    image: "img/origin digital logo.png",
    link: "https://muhammad-yousuf-k.github.io/Origin-Digital-Service/#",
  },

];
const certificate = [
  {
    title: "Web Development",
    description: "by Visionery IT Institute",
    image: "img/web_certi.jpg",
    Status: "Complete"
  },
  {
    title: "C.I.T",
    description: "by Visionery IT Institute",
    image: "img/cit_certi.jpg",
    Status: "Complete"
  },
  {
    title: "Matric",
    description: "by Pak German Capital School",
    image: "img/TTT.jpg",
    Status: "Complete"
  },
  {
    title: "(DAE) in software engineering",
    description: "by Capital Institute",
    image: "img/TTT.jpg",
    Status: "continue"
  }

];
const techz = [
  {
    icon: "icon/html.svg",
    name: "HTML",
  },
  {
    icon: "icon/css.svg",
    name: "CSS",
  },
  {
    icon: "icon/javascript.svg",
    name: "JavaScript",
  },
  {
    icon: "icon/wordpress.svg",
    name: "WordPress",
  },
  {
    icon: "icon/photoshop.svg",
    name: "PhotoShop",
  },
  {
    icon: "icon/microsoft_office.svg",
    name: "Microsoft Office",
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
 <a href="${project.link}" target="_blank">
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
  card.innerHTML = `<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img class="flip_img" src="${certificate.image}" alt="Avatar">
    </div>
    <div class="flip-card-back">
      <h1>${certificate.title}</h1>
      <p>${certificate.description}</p>
      <p>Status: ${certificate.Status}</p>
      <p style="margin-top: 10px">Click to view</p>
    </div>
  </div>
</div> `;
  container1.appendChild(card);
});



// tech stack============================
const container2 = document.getElementById("projects-container3");
techz.forEach((techz) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `    <div class="cd_box">
        <img class="cd_box_img" src="${techz.icon}" alt="">
        <h1>${techz.name}</h1>
    </div>
 `;
  container2.appendChild(card);
});


//for burger btn===============================================================

let burger = document.getElementById("bug")

burger.addEventListener("click", () => {
  let ul = document.getElementById("nv_ul")
  // ul.setAttribute("display", "none");

  console.log(ul);

  if (ul.style.display === "none") {
    ul.style.display = "flex"
    console.log("true");

  } else {
    ul.style.display = "none"
    console.log("false");
  }
})
