document.addEventListener("DOMContentLoaded", function(){ 
    var player = localStorage.getItem("playerChoice");
    var computer = Math.floor(Math.random() * 3);

    console.log(computer);
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

    document.querySelector('.image-container').appendChild(img)

    var result = determineWinner(player, computer);
    localStorage.setItem("getResult", result);

    document.getElementById("next-page-button").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "winner.html";
    });

});


function determineWinner(player, computer) {
    let result;
    const tie = "It's a tie!";
    const cwin = "Computer wins!";
    const pwin = "Player wins!";
    console.log("Player val: ", player);
    console.log("Comp val: ", computer);
    if (player == 0) {
        if (computer == 0) {
            result = tie;
        } else if (computer == 1) {
            result = cwin;
        } else {
            result = pwin;
        }
    } else if (player == 1) {
        if (computer == 0) {
            result = pwin;
        } else if (computer == 1) {
            result = tie;
        } else {
            result = cwin;
        }
    } if (player == 2) {
        if (computer == 0) {
            result = cwin;
        } else if (computer == 1) {
            result = pwin;
        } else {
            result = tie;
        }
    }

    localStorage.setItem("gameResult", result);
    console.log("Result stored:", result);
}
