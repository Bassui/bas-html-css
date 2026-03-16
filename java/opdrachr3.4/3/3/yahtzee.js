// Global array for dice rolls
let diceArray = [];

// Get DOM elements
const rollBtn = document.getElementById("rollBtn");
const diceContainer = document.getElementById("diceContainer");
const countContainer = document.getElementById("countContainer");

// Event listener for roll button
rollBtn.addEventListener("click", rollDice);

/**
 * Rolls 5 dice with random values between 1 and 6
 * Displays the results and shows the count of each number
 */
function rollDice() {
    // Clear previous results
    diceArray = [];
    diceContainer.innerHTML = "";
    countContainer.innerHTML = "";

    // Roll 5 dice with random values 1-6
    for (let i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        diceArray.push(randomNumber);
    }

    // Display the dice
    displayDice();

    // Display the count of each number
    displayCounts();
}

/**
 * Displays the dice values on the screen
 */
function displayDice() {
    diceArray.forEach(num => {
        const die = document.createElement("div");
        die.classList.add("die");
        die.textContent = num;
        diceContainer.appendChild(die);
    });
}

/**
 * Counts how many times a specific number appears in the array
 * @param {number} number - The number to count
 * @returns {number} - How many times the number appears
 */
function countNumber(number) {
    let count = 0;
    for (let i = 0; i < diceArray.length; i++) {
        if (diceArray[i] === number) {
            count++;
        }
    }
    return count;
}

/**
 * Displays the count of each number (1-6) from the last roll
 */
function displayCounts() {
    let countsHTML = "<h3>Teltelling:</h3>";

    for (let i = 1; i <= 6; i++) {
        const count = countNumber(i);
        countsHTML += `<div class="count-item">Aantal ${i}'s: ${count}</div>`;
    }

    countContainer.innerHTML = countsHTML;
}
