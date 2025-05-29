document.addEventListener("DOMContentLoaded", function () {
    const checkButton = document.getElementById("Palindrome");
    const textInput = document.getElementById("textInput");
    const resultElement = document.getElementById("result");

    // Check Palindrome
    checkButton.addEventListener("click", function () {
        const inputText = textInput.value.trim();

        // Validate input
        if (inputText === "") {
            resultElement.textContent = "Please enter a word to check.";
            resultElement.style.color = "orange";
            return;
        }

        // Process input
        const processedText = inputText.toLowerCase().replace(/[^a-z0-9]/g, "");
        const reversedText = processedText.split("").reverse().join("");

        // Check if palindrome
        if (processedText === reversedText) {
            resultElement.textContent = `"${inputText}" is a palindrome!`;
            resultElement.style.color = "green";
        } else {
            resultElement.textContent = `"${inputText}" is not a palindrome.`;
            resultElement.style.color = "red";
        }
    });
});