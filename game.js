var player;
// drum not working

document.getElementById("next-page-button").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "winner.html";
  });

function playerRock() {
    player = 0;
    console.log("Player chose", player);
    window.location.href = "computer.html";
}

function playerPaper() {
    player = 1;
    console.log("Player chose", 1);
    window.location.href = "computer.html";
}

function playerScissor() {
    player = 2;
    console.log("Player chose", player);
    window.location.href = "computer.html";
    var drum = document.createElement("audio");
    drum.src = "tada.mp3";
    drum.autoplay=true;
    document.body.appendChild(drum);
    drum.play().catch(function(error) {
        console.error("Audio playback failed:", error);
    });
    drum.addEventListener('ended', function() {
        computerTurn();
    });
}

var computer = Math.floor(Math.random() * 3);
console.log(computer);

function computerTurn() {
    

    var imgWidth = "400px";  
    var imgHeight = "400px"; 
    var container = document.querySelector('.image-container')
    var img = document.createElement("img");
    img.style.width = imgWidth;
    img.style.height = imgHeight;

    if (computer == 0) {
        img.src = "rock.png";
    } else if (computer == 1) {
        img.src = "paper.png";
    } else if (computer == 2) {
        img.src = "scissor.png";
    } else {
        console.error("Invalid value for 'computer'");
        return;
    }
    container.appendChild(img); 
}

