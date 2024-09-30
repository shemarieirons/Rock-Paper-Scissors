function getName() {
    var Pname = document.getElementById("myName").value;
    console.log("Entered name:", Pname);
    window.location.href = "playerpick.html";
}

document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();
    getName();
});