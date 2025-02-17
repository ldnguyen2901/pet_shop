document.getElementById("open-account").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("create-account").style.display = "block";
});

document.getElementById("close-account").addEventListener("click", function() {
    document.getElementById("create-account").style.display = "none";
});