document.addEventListener("DOMContentLoaded", function() {
    loadProfile();
    loadHabits();
    loadStreak();
});

function addHabit() {
    let habitInput = document.getElementById("habitInput");
    let habitList = document.getElementById("habitList");
    if (habitInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = habitInput.value;
        habitList.appendChild(li);
        habitInput.value = "";
        saveHabits();
    }
}

function saveHabits() {
    let habits = [];
    document.querySelectorAll("#habitList li").forEach(li => habits.push(li.textContent));
    localStorage.setItem("habits", JSON.stringify(habits));
}

function loadHabits() {
    let habits = JSON.parse(localStorage.getItem("habits")) || [];
    let habitList = document.getElementById("habitList");
    habitList.innerHTML = "";
    habits.forEach(habit => {
        let li = document.createElement("li");
        li.textContent = habit;
        habitList.appendChild(li);
    });
}

function markCompleted() {
    let streakCount = document.getElementById("streakCount");
    let streak = parseInt(streakCount.textContent) + 1;
    streakCount.textContent = streak;
    localStorage.setItem("streak", streak);
}

function loadStreak() {
    let streakCount = document.getElementById("streakCount");
    streakCount.textContent = localStorage.getItem("streak") || 0;
}

function loadProfile() {
    let profileName = localStorage.getItem("profileName") || "Your Name";
    document.getElementById("profileName").textContent = profileName;
    let profilePic = localStorage.getItem("profilePic") || "images/default.png";
    document.getElementById("profilePic").src = profilePic;
}

document.getElementById("saveProfile").addEventListener("click", function() {
    let nameInput = document.getElementById("nameInput").value;
    let fileInput = document.getElementById("fileInput").files[0];
    if (nameInput) {
        localStorage.setItem("profileName", nameInput);
        document.getElementById("profileName").textContent = nameInput;
    }
    if (fileInput) {
        let reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem("profilePic", e.target.result);
            document.getElementById("profilePic").src = e.target.result;
        };
        reader.readAsDataURL(fileInput);
    }
});

