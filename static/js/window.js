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
  }
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
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
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
      elmnt.classList.toggle("hidden");
      elmnt.style.display = "none";
      elmnt.style.zIndex = "4";
    }

  } catch (e) {
    console.log(e);
  }
}

function openNewWindow(appName) {
  var megaContainer = document.getElementsByClassName("megacontainer")[0];
  var newWindow = document.createElement("div");
  newWindow.classList = "window";

  if (appName == "settings") {
    fetch('../../apps/settings.html')
      .then(response => response.text())
      .then(htmlContent => {
        newWindow.innerHTML = `<div id='windowtop-settings' class="windowtop"><div id='windowheader-settings' class="windowheader">Settings</div><button id="windowclose-settings">X</button></div><div class="windowcontent" id="windowcontent-settings">${htmlContent}</div>`;
        newWindow.id = "settings";
        megaContainer.appendChild(newWindow);
        dragElement(newWindow);
      });
  } else {
    app = appJson[appName]; // Define app here

    newWindow.style.width = app.width;
    newWindow.style.height = app.height;
    newWindow.style.display = "block";
    var id = appName;
    newWindow.id = id;

    activeApps.push(app.name);
    console.log(activeApps);

    newWindow.innerHTML = `<div id='windowtop-${id}' class="windowtop"><div id='windowheader-${id}' class="windowheader">${app.name}</div><button id="windowclose-${id}">X</button></div><div class="windowcontent" id="windowcontent-${id}"><iframe width="100%" height="100%" src="${app.src}"></iframe><div class="resize-handle"></div>`;
    megaContainer.appendChild(newWindow);
    dragElement(newWindow);
    console.log(activeApps);
  }
}

function saveWallpaper() {
  const selectElement = document.getElementById('wallpaperSelect');
  const megaContainer = document.getElementsByClassName("megacontainer")[0];

  var value = selectElement.value;
  var text = selectElement.options[selectElement.selectedIndex].text;

  megaContainer.style.backgroundImage = `url('static/wallpapers/${value}')`;
}