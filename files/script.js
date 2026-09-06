// Make the DIV element draggable:
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
