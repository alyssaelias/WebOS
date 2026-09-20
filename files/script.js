
dragElement(document.getElementById("window")).element.onmousedown=startDragging;


function drageElement(element, e) {
var initailX = 0;
var initialY = 0;
var currentX = 0;
var currentY = 0;
if (!e) return;
e.preventDefault();
currentX = initialX - e.clientX;
currentY = initialY - e.clientY;
initialX = e.clientX;
initialY = e.clientY;
element.style.top = (element.offsetTop - currentY) + "px";
element.style.left = (element.offsetLeft - currentX) + "px";
}

element.onmousedown = startDragging;

function startDragging(e) {
  document.onmouseup = stopDragging;
 document.onmousemove = dragElement;
  e = e || window.event;
  e.preventDefault();
  initalX = e.clientX;
  initialY = e.clientY;
  document.onmouseup = stopDragging;
  document.onmousemove = (event) => drageElement(e.currentTarget,event);
  element.style.top = (element.offsetTop - currentY) + "px";
 element.style.left = (element.offsetLeft - currentX) + "px";
}
   
function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
}
  
var welcomeScreen = document.querySelector("#welcome")
function closeWindow(element) {
  element.style.display = "none"
}
function openWindow(element) {
  element.style.display = "flex"
}


var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")
 welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

var selectedIcon = undefined

function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element
} 

function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = undefined
}

function handleIconTap(element) {
  if (element.classList.contains("selected")) {
    deselectIcon(element)
    openWindow(window)
  } else {
    selectIcon(element)
  }
}

dragElement(document.querySelector("#notes"))

var welcomeScreen = document.querySelector("#welcome")
var notesScreenClose = document.querySelector("#welcomeclose")
notesScreenClose.addEventListener("click", () => closeWindow(welcomeScreen));

var notesScreen = document.querySelector("#notes")
var notesScreenClose = document.querySelector("#notesclose")
notesScreenClose.addEventListener("click", () => closeWindow(notesScreen));

var biggestIndex = 2;

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
    handleWindowTap(element)
  )
}

function handleWindowTap(element) {
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
}

function openWindow(element) {
  element.style.display = "flex";
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
}

var topBar = document.querySelector("#top")

function openWindow(element) {
  element.style.display = "flex";
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

function handleWindowTap(element) {
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
  deselectIcon(selectedIcon)
}

var content = [
  {
    title: "Welcome",
    date: "06/28/2023",
    content: `
      <h1>Welcome to AlyssaOS!</h1>
      <p>Welcome to my personal WebOS! Use my personal assistant to get help with anything you need!</p>
      <h2> My name is Alyssa and I'm 17 years old. </h2>
      <main>
        <img src="images/imageofme.png" alt="Alyssa smiling warmly in a personal profile portrait, presented within the AlyssaOS welcome window; her expression creates a friendly and approachable tone.">
        <p> I am a high school student who is passionate about coding and technology. 
          I enjoy creating projects that are both fun and educational, and I hope to inspire others to learn about coding as well. 
          For example, I coded <a href="https://alyssaelias.github.io/ChemE-curiosity-project/">my own educational website. </a> 
           Give it a try and learn about chemical engineering!
        </p>
      </main>
      
    `
  }
]



function initializeIcon(name) {
var icon = document.querySelector("#" + name + "Icon")
var screen = document.querySelector("#" + name)
icon.addEventListener("click", () => handleIconTap(icon, screen));
}
initializeIcon("notes")

function initializeWindow(elementName) {
var screen = document.querySelector("#" + elementName)
addWindowTapHandling(screen)
makeClosable(elementName)
dragElement(screen)
if(elementName != "welcome") {
initializeIcon(elementName)  
}
}
initializeWindow("welcome")
initializeWindow("notes")

initializeWindow("photo")