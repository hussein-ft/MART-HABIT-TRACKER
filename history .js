document.addEventListener("DOMContentLoaded", () => {
    const habitHistoryTable = document.getElementById("habitHistory").getElementsByTagName("tbody")[0];

    // Example data (this would come from local storage or a database in a real app)
    const habitHistory = [
        { date: "2025-03-28", name: "Daily Exercise", status: "Completed" },
        { date: "2025-03-29", name: "Drink Water", status: "Missed" },
        { date: "2025-03-30", name: "Read Books", status: "Completed" }
    ];

    // Populate the table with data
    habitHistory.forEach(habit => {
        const row = habitHistoryTable.insertRow(); // Create a new row

        // Add cells for Date, Habit Name, and Status
        const dateCell = row.insertCell(0);
        const nameCell = row.insertCell(1);
        const statusCell = row.insertCell(2);

        // Fill the cells with data
        dateCell.textContent = habit.date;
        nameCell.textContent = habit.name;
        statusCell.textContent = habit.status;
    });
});
