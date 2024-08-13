body = document.getElementById("body");
    if (window.location.href.includes('?xp=true')) {
      body.id = "xp-mode-bg";
}
      var id = ""
var idLoaded = localStorage.getItem("id")
var letters = "abcdefghijklmnopqrstuvABCDEFGHIJKLMNOPQRS0123456789"
if (idLoaded) {
    id = idLoaded
} else {
    for (let i = 0; i < 8; i++) {
        id += letters[Math.round(Math.random()*(letters.length-1))]
    }
    localStorage.setItem("id", id)
}
      var ws = new WebSocket("wss://verbena-spotless-appeal.glitch.me/:8080")
ws.addEventListener("open", (event) => {
    ws.send(JSON.stringify({view: true}))
})