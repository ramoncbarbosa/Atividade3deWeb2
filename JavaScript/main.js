function toggleOptions() {
    var options = document.getElementById("options");
    if (options.style.display === "block") {
        options.style.display = "none";
    } else {
        options.style.display = "block";
    }
}

function selectBank(bank) {
    document.querySelector(".escolha-banco-label").textContent = bank;
    document.getElementById("options").style.display = "none";
}