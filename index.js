// Save profile name
const saveProfileButton = document.getElementById("save-profile");
if (saveProfileButton) {
    saveProfileButton.addEventListener("click", () => {
        const nameInput = document.getElementById("name");
        if (nameInput.value) {
            localStorage.setItem("userName", nameInput.value); // Save to local storage
            alert(`Profile Saved: ${nameInput.value}`);
        } else {
            alert("Please enter your name.");
        }
    });
}

// Add habits
const addHabitButton = document.getElementById("add-habit");
if (addHabitButton) {
    addHabitButton.addEventListener("click", () => {
        const habitInput = document.getElementById("new-habit");
        if (habitInput.value) {
            let habits = JSON.parse(localStorage.getItem("habits")) || [];
            habits.push(habitInput.value);
            localStorage.setItem("habits", JSON.stringify(habits));
            alert(`New Habit Added: ${habitInput.value}`);
            habitInput.value = ""; // Clear input
        } else {
            alert("Please enter a habit.");
        }
    });
}

// Display habits on Habit List page
const habitList = document.getElementById("habit-list");
if (habitList) {
    const habits = JSON.parse(localStorage.getItem("habits")) || [];
    habits.forEach(habit => {
        const li = document.createElement("li");
        li.textContent = habit;
        habitList.appendChild(li);
    });
}
