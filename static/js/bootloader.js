var body = document.getElementsByTagName('body')[0];

function loadDesktop() {
    setTimeout(function() {
    for (var i = 0; i < 100; i++) {
        body.style.opacity = 1 - i / 100;
    }
    window.location.href = '/desktop.html';
}, 1000);
}