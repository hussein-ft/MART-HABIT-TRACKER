document.addEventListener("DOMContentLoaded", () => {
    const habitForm = document.getElementById("habitForm");
    const habitList = document.getElementById("habitList");

    // Load habits from localStorage
    let habits = JSON.parse(localStorage.getItem("habits")) || [];

    // Save habits to localStorage
    const saveHabits = () => {
        localStorage.setItem("habits", JSON.stringify(habits));
    };

    // Render habits in the habit list
    const renderHabits = () => {
        if (habitList) {
            habitList.innerHTML = habits
                .map((habit, index) => `
                    <div>
                        <p>${habit.name} - ${habit.completed ? "✔️ Completed" : "❌ Not Completed"}</p>
                        <button onclick="toggleCompletion(${index})">
                            Mark as ${habit.completed ? "Incomplete" : "Complete"}
                        </button>
                    </div>
                `)
                .join("");
        }
    };

    // Add a new habit
    if (habitForm) {
        habitForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const habitName = document.getElementById("habitName").value.trim();
            if (habitName) {
                habits.push({ name: habitName, completed: false });
                saveHabits();
                alert("Habit added!");
                habitForm.reset();
            } else {
                alert("Habit name cannot be empty!");
            }
        });
    }

    // Toggle habit completion
    window.toggleCompletion = (index) => {
        habits[index].completed = !habits[index].completed;
        saveHabits();
        renderHabits();
    };

    // Clear all habits
    window.clearHistory = () => {
        if (confirm("Are you sure you want to clear all habits?")) {
            habits = [];
            saveHabits();
            renderHabits();
            alert("All habits cleared!");
        }
    };

    // Render habits on Page 2
    renderHabits();
});
