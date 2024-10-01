var player;
// drum not working

function playerRock() {
    player = 0;
    console.log("Player chose", player);
    localStorage.setItem("playerChoice", player);
    window.location.href = "computer.html";
}

function playerPaper() {
    player = 1;
    console.log("Player chose", 1);
    localStorage.setItem("playerChoice", player);
    window.location.href = "computer.html";
}

function playerScissor() {
    player = 2;
    console.log("Player chose", player);
    localStorage.setItem("playerChoice", player);
    window.location.href = "computer.html";
}

