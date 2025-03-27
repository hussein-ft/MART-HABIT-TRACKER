document.addEventListener("DOMContentLoaded", function() {
    loadProfile();
    loadHabits();
    loadStreak();
    updateHabitSummary();
});

function addHabit() {
    let habitInput = document.getElementById("habitInput");
    let habitList = document.getElementById("habitList");
    if (habitInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = habitInput.value;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function() {
            li.remove();
            saveHabits();
            updateHabitSummary();
        };

        li.appendChild(deleteBtn);
        habitList.appendChild(li);
        habitInput.value = "";
        saveHabits();
        updateHabitSummary();
    }
}

function saveHabits() {
    let habits = [];
    document.querySelectorAll("#habitList li").forEach(li => habits.push(li.textContent.replace("Delete", "")));
    localStorage.setItem("habits", JSON.stringify(habits));
}

function loadHabits() {
    let habits = JSON.parse(localStorage.getItem("habits")) || [];
    let habitList = document.getElementById("habitList");
    habitList.innerHTML = "";
    habits.forEach(habit => {
        let li = document.createElement("li");
        li.textContent = habit;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function() {
            li.remove();
            saveHabits();
            updateHabitSummary();
        };

        li.appendChild(deleteBtn);
        habitList.appendChild(li);
    });
    updateHabitSummary();
}

function markCompleted() {
    let streakCount = document.getElementById("streakCount");
    let streak = parseInt(streakCount.textContent) + 1;
    streakCount.textContent = streak;
    localStorage.setItem("streak", streak);
    updateHabitSummary();
}

function loadStreak() {
    let streakCount = document.getElementById("streakCount");
    streakCount.textContent = localStorage.getItem("streak") || 0;
}

function updateHabitSummary() {
    let habits = JSON.parse(localStorage.getItem("habits")) || [];
    let streak = localStorage.getItem("streak") || 0;
    document.getElementById("habitSummary").textContent = Tracked Habits: ${habits.length} | Completed Streaks: ${streak};
}

function loadProfile() {
    let profileName = localStorage.getItem("profileName") || "Your Name";
    document.getElementById("profileName").textContent = profileName;
    let profilePic = localStorage.getItem("profilePic") || "images/default.png";
    document.getElementById("profilePic").src = profilePic;
}