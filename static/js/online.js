var online = 'False';
async function checkStatus() {
    try {
        var url = 'https://api.statusbadges.me/presence/1147531188148375623';
        fetch(url)
            .then(response => response.json())
            .then(data => {
            online = data.status;
            console.log("Online: " + online)
            if (online == "online") {
                var h2 = document.getElementById("status");
                h2.textContent = "Currently Online";
            }
            else {
                var h2 = document.getElementById("status");
                h2.textContent = "Currently Offline";
            }});
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}
checkStatus();