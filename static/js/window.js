appJson = {
  "browser": {
    "name": "Web Browser",
    "width": "400px",
    "height": "400px",
    "src": "apps/browser.html",
    "icon": "static/images/icons/planet.png"
  },
  "newspaper": {
    "name": "Newspaper",
    "width": "600px",
    "height": "500px",
    "src": "https://reporter.poyo.study",
    "icon": "static/images/icons/newspaper.png"
  },
  "poyopad": {
    "name": "PoyoPad",
    "width": "400px",
    "height": "400px",
    "src": "apps/poyopad.html",
    "icon": "static/images/icons/poyopad.png"
  },
  "eshop": {
    "name": "PoyoShop",
    "width": "600px",
    "height": "500px",
    "src": "apps/eshop.html",
    "icon": "static/gifs/eshop_wobbly_uwu_quick.gif"
  },
  "about": {
    "name": "System info",
    "width": "600px",
    "height": "300px",
    "src": "apps/about.html"
  }, 
  "config": {
    "name": "Settings",
    "width": "400px",
    "height": "250px",
    "src": "apps/settings.html",
    "icon": "static/images/icons/settings.png"
  },
  //"poyoxplorer": {
  //  "name": "PoyoXPlorer",
  //  "width": "400px",
  //  "height": "300px",
  //  "src": "apps/poyoxplorer.html",
  //  "icon": "static/gifs/filesystem.png"
  //},
}

appJson = JSON.stringify(appJson);
appJson = JSON.parse(appJson);

var activeApps = [];

function dragElement(elmnt) {
  try {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var header = document.getElementById("windowtop-" + elmnt.id);
    header.onmousedown = dragMouseDown;
    var button = document.getElementById("windowclose-" + elmnt.id);

    var toggler = document.getElementById("button-" + elmnt.id);

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      rect = elmnt.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(event) {
      event.preventDefault();
      elmnt.style.top = (event.clientY - offsetY) + "px";
      elmnt.style.left = (event.clientX - offsetX) + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
      elmnt.style.zIndex = "4";
    }
    function closeWindow() {
      toggleWindowVisibility(elmnt.id);
      elmnt.style.zIndex = "4";
    }
    function toggleWindowVisibility(appName) {
      var windowElement = document.getElementById(appName);
      windowElement.classList.toggle("minimized");
      if (windowElement.classList.contains("hidden")) {
        setTimeout(function () {
          windowElement.classList.remove("hidden");
          windowElement.style.display = "block";
        }, 100);
      } else {
        setTimeout(function () {
          windowElement.classList.add("hidden");
          windowElement.style.display = "none";
        }, 100);
      }
    }
    button.onclick = function () {
      toggleWindowVisibility(elmnt.id);
    }

    toggler.onclick = function () {
      toggleWindowVisibility(elmnt.id);
    }

  } catch (e) {
    console.log(e);
  }
}

function openNewWindow(appName) {
  var megaContainer = document.getElementsByClassName("megacontainer")[0];
  var newWindow = document.createElement("div");
  newWindow.classList = "window";
  if (appName == "newspaper") {
    newWindow.innerHTML = `<div id='windowtop-newspaper' class="windowtop"><div id='windowheader-newspaper' class="windowheader">Newspaper</div><button id="windowclose-newspaper">X</button></div><iframe src="https://reporter.poyo.study" class="windowcontent" id="windowcontent-newspaper"></iframe>`;
    newWindow.id = "newspaper";
    newWindow.style.width = "600px";
    newWindow.style.height = "500px";
    megaContainer.appendChild(newWindow);
    dragElement(newWindow);
  } else {
    app = appJson[appName]; // Define app here
    fetch('../../' + app.src)
      .then(response => response.text())
      .then(htmlContent => {
        newWindow.innerHTML = `<div id='windowtop-${appName}' class="windowtop"><div id='windowheader-${appName}' class="windowheader">${app.name}</div><button id="windowclose-${appName}">X</button></div><div class="windowcontent" id="windowcontent-${appName}">${htmlContent}</div>`;
        newWindow.id = appName;
        newWindow.style.width = app.width;
        newWindow.style.height = app.height;
        megaContainer.appendChild(newWindow);
        dragElement(newWindow);
      });
  }
}

function saveWallpaper() {
  const selectElement = document.getElementById('wallpaperSelect');
  const megaContainer = document.getElementsByClassName("megacontainer")[0];

  var value = selectElement.value;

  megaContainer.style.backgroundImage = `url('static/wallpapers/${value}')`;
}

if (document.addEventListener) {
  document.addEventListener('contextmenu', function (e) {
    alert("You've tried to open context menu"); //here you draw your own menu
    e.preventDefault();
  }, false);
} else {
  document.attachEvent('oncontextmenu', function () {
    alert("You've tried to open context menu");

  });
}

function addIconsToNavbar(json) {
  var navbar = document.getElementById("navbar");
  Object.keys(json).forEach(function(key) {
    if (json[key].icon == undefined) {
      return;
    } else {
    var button = document.createElement("button");
    button.classList = "icon";
    button.id = "button-" + key;
    button.onclick = function () {
      openNewWindow(key);
    }
    var iconContainer = document.createElement("div"); 
    iconContainer.classList = "icon-container";
    var icon = document.createElement("img");
    icon.src = json[key].icon;
    iconContainer.appendChild(icon);
    button.appendChild(iconContainer);
    navbar.appendChild(button);}
  });
}

addIconsToNavbar(appJson);