// List to hold names
let nameList = [];

// Function to create a new input field
function createNameField() {
    const nameContainer = document.getElementById('nameInputs');

    // Create a wrapper for the input and remove button
    const fieldWrapper = document.createElement('div');
    fieldWrapper.classList.add('name-field-wrapper'); 

    // Create input box
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter a name';
    input.classList.add('name-input');

    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('action-button', 'remove-btn');

    // Event listener to remove the input field
    removeButton.addEventListener('click', () => {
        fieldWrapper.remove();
    });

    // Append input and remove button to wrapper
    fieldWrapper.appendChild(input);
    fieldWrapper.appendChild(removeButton);

    // Add wrapper to the container
    nameContainer.appendChild(fieldWrapper);
}

// Function to clear all input fields and results
function clearAll() {
    // Remove all input fields
    const nameContainer = document.getElementById('nameInputs');
    const nameFields = nameContainer.querySelectorAll('.name-field-wrapper');
    nameFields.forEach(field => field.remove());

    // Clear randomized names display
    const resultContainer = document.getElementById('randomizedList');
    resultContainer.innerHTML = '<p>No names to display</p>';

    // Reset the list of names
    nameList = [];
}

// Function to randomize and display names
function displayRandomizedNames() {
    // Get all input values
    const inputs = document.querySelectorAll('.name-input');
    nameList = Array.from(inputs)
        .map(input => input.value.trim())
        .filter(name => name.length > 0);

    const resultContainer = document.getElementById('randomizedList');

    if (nameList.length === 0) {
        resultContainer.innerHTML = '<p>No names to randomize</p>';
        return;
    }

    // Shuffle and display names
    const shuffledNames = shuffleArray(nameList);
    resultContainer.innerHTML = shuffledNames
        .map(name => `<div class="name-box">${name}</div>`)
        .join('');
}

// Function to shuffle an array
function shuffleArray(array) {
    return array
        .slice()
        .sort(() => Math.random() - 0.5);
}
