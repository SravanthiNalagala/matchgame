document.addEventListener("DOMContentLoaded", function () {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    let targetColor = "";

    function generateNewGame() {
        targetColor = colors[Math.floor(Math.random() * colors.length)];
        const targetColorElement = document.getElementById("targetColor");
        targetColorElement.textContent = targetColor;
        targetColorElement.style.color = targetColor;
        document.getElementById("message").textContent = "";

        const colorOptionsDiv = document.getElementById("colorOptions");
        colorOptionsDiv.innerHTML = "";

        const shuffledOptions = colors.slice().sort(() => Math.random() - 0.5);

        shuffledOptions.forEach(function (color) {
            const colorBox = document.createElement("div");
            colorBox.className = "color-box";
            colorBox.style.backgroundColor = color;
            colorBox.dataset.color = color;
            colorBox.addEventListener("click", function () {
                checkColor(color);
            });
            colorOptionsDiv.appendChild(colorBox);
        });
    }

    function checkColor(color) {
        const messageElement = document.getElementById("message");
        if (color === targetColor) {
            messageElement.textContent = "Correct! 🎉";
            messageElement.style.color = "green";
        } else {
            messageElement.textContent = "Try Again! ❌";
            messageElement.style.color = "red";
        }
    }

    document.getElementById("newGameBtn").addEventListener("click", generateNewGame);
    generateNewGame();
});
