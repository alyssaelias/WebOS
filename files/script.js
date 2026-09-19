
dragElement(document.getElementById("window")).element.onmousedown = startDragging;


function dragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;
  e = e || window.event;
  e.preventDefault();
  currentX = initialX - e.clientX;
  currentY = initialY - e.clientY;
  initialX = e.clientX;
  initialY = e.clientY;
  element.style.top = (element.offsetTop - currentY) + "px";
  element.style.left = (element.offsetLeft - currentX) + "px";
}


  

  
function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
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
      <h1> Welcome to my OS</h1>
      <h2>My name is Alyssa and I'm 17 years old.</h2>
      <main>
        <img src="images/imageofme.png"/>
         <p> I love coding in my free time and this is my space to show you some of my projects. <br> For examply I coded <a href="https://alyssaelias.github.io/ChemE-curiosity-project/"> my own educational website. </a> <br> Give it a visit! I would greatly appreciate it! </p>
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