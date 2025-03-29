document.addEventListener("DOMContentLoaded", () => {
    const habitForm = document.getElementById("habitForm");
    const habitNameInput = document.getElementById("habitName");
    const habitGoalInput = document.getElementById("habitGoal");
    const habitItems = document.getElementById("habitItems");

    // Add habit functionality
    habitForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const habitName = habitNameInput.value.trim();
        const habitGoal = habitGoalInput.value.trim();

        if (habitName && habitGoal) {
            addHabit(habitName, habitGoal);
            habitNameInput.value = ""; // Clear inputs
            habitGoalInput.value = "";
        }
    });

    function addHabit(name, goal) {
        const habitDiv = document.createElement("div");
        habitDiv.className = "habit-item";

        const habitText = document.createElement("span");
        habitText.textContent = `${name} - Goal: ${goal} days`;
        habitDiv.appendChild(habitText);

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => habitItems.removeChild(habitDiv));

        habitDiv.appendChild(deleteBtn);
        habitItems.appendChild(habitDiv);
    }
});
// Save data to local storage in index.html
const habits = [
    { date: "2025-03-28", name: "Daily Exercise", status: "Completed" },
    { date: "2025-03-29", name: "Drink Water", status: "Missed" }
];
localStorage.setItem("habitHistory", JSON.stringify(habits));

// Retrieve data in history.html
const storedHabits = JSON.parse(localStorage.getItem("habitHistory") || "[]");
