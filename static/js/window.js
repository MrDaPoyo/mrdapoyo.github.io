appJson = {
  "browser": {
    "name": "Web Browser",
    "width": "300px",
    "height": "400px",
    "src": "apps/browser.html"
  },
  "newspaper": {
    "name": "Newspaper",
    "width": "600px",
    "height": "500px",
    "src": "https://reporter.poyo.study"
  },
}
appJson = JSON.stringify(appJson);
appJson = JSON.parse(appJson);

var activeApps = [];


function dragElement(elmnt) {
  try {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var header = document.getElementById("windowheader-" + elmnt.id);
    header.onmousedown = dragMouseDown;
    var button = document.getElementById("windowclose-" + elmnt.id);

    var toggler = document.getElementById("button-" + elmnt.id);

    button.onclick = closeWindow;
    function dragMouseDown(event) {
      event.preventDefault();
      pos3 = event.clientX;
      pos4 = event.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
      elmnt.style.zIndex = "9999";
    }
    function elementDrag(event) {
      event.preventDefault();
      pos1 = pos3 - event.clientX;
      pos2 = pos4 - event.clientY;
      pos3 = event.clientX;
      pos4 = event.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
      elmnt.style.zIndex = "4";
    }
    function closeWindow() {
      elmnt.remove();
    }

    toggler.addEventListener("click", function () {
      var window = document.getElementById(elmnt.id);
      if (window.style.display == "none") {
        window.style.display = "block";
      } else {
        window.style.display = "none";
      }
    });

  } catch (e) {
    console.log(e);
  }
}

function openNewWindow(appName) {

  app = appJson[appName];
  if (!document.getElementById(appName)) {

    activeApps.push(app.name);
    console.log(activeApps);

    var newWindow = document.createElement("div", { class: "window" });
    var id = appName;
    newWindow.id = id;
    var megaContainer = document.getElementsByClassName("megacontainer")[0];
    var newWindow = document.createElement("div");
    newWindow.className = "window";
    newWindow.style.width = app.width;
    newWindow.style.height = app.height;
    newWindow.style.display = "block";
    newWindow.id = id;
    newWindow.innerHTML = `<div id='windowtop-${id}' class="windowtop"><div id='windowheader-${id}' class="windowheader">${app.name}</div><button id="windowclose-${id}">X</button></div><iframe width="100%" height="100%" src="${app.src}"></iframe>`;
    megaContainer.appendChild(newWindow);
    dragElement(newWindow);
    console.log(activeApps);
  }
}