document.getElementById("spawnCookie").addEventListener("click", function () {
  let container = document.getElementById("cookieContainer");
  let marquee = document.getElementById("marquee");
  let marquee_link = document.getElementById("marquee-link");
  for (let i = 0; i < 1; i++) {
    let cookie = document.createElement("p");
    cookie.alt = "Cookie!";
    cookie.style.position = "absolute";
    cookie.id = "cookie";
    cookie.innerHTML = "&#127850";
    marquee.innerHTML = "🍪 Poyos be eating cookies too! :3 🍪";
    marquee_link.href= "furnace";
    cookie.style.zIndex = "10";
    cookie.style.fontSize = "25px";
    cookie.style.left = Math.random(2) * (window.innerWidth - 50 ) + "px";
    cookie.style.top = Math.random(2) * (window.innerHeight - 50 ) + "px";
    cookie.style.animation = "rain 1s linear";
    container.appendChild(cookie);
    setTimeout(function () {
      container.removeChild(cookie);
    }, 1000);
  }
});
