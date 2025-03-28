document.addEventListener("DOMContentLoaded", () => {
    const habitForm = document.getElementById("habitForm");
    const habitList = document.getElementById("habitList");

    // Retrieve stored habits from localStorage
    let habits = JSON.parse(localStorage.getItem("habits")) || [];

    // Save habits to localStorage
    const saveHabits = () => {
        localStorage.setItem("habits", JSON.stringify(habits));
    };

    // Render habits in the habit list
    const renderHabits = () => {
        if (habitList) {
            habitList.innerHTML = habits
                .map((habit, index) => {
                    return `
                        <div>
                            <p>${habit.name} - ${habit.completed ? "✔️ Completed" : "❌ Not Completed"}</p>
                            <button onclick="toggleCompletion(${index})">Mark ${habit.completed ? "Incomplete" : "Complete"}</button>
                        </div>
                    `;
                })
                .join("");
        }
    };

    // Add a new habit
    if (habitForm) {
        habitForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const habitName = document.getElementById("habitName").value;
            if (habitName.trim() !== "") {
                habits.push({ name: habitName.trim(), completed: false });
                saveHabits();
                alert("Habit Added!");
                habitForm.reset();
            } else {
                alert("Habit name cannot be empty.");
            }
        });
    }

    // Toggle habit completion
    window.toggleCompletion = (index) => {
        habits[index].completed = !habits[index].completed;
        saveHabits();
        renderHabits();
    };

    // Clear habit history
    window.clearHistory = () => {
        if (confirm("Are you sure you want to clear all habits?")) {
            habits = [];
            saveHabits();
            renderHabits();
            alert("History Cleared!");
        }
    };

    // Initialize habit list on Page 2
    renderHabits();
});
