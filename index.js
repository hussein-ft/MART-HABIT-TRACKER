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
          habitNameInput.value = "";
          habitGoalInput.value = "";
      }
  });

  function addHabit(name, goal) {
      const habitDiv = document.createElement("div");
      habitDiv.textContent = `${name} - Goal: ${goal} days`;
      habitItems.appendChild(habitDiv);
  }
});
