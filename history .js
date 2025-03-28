document.addEventListener("DOMContentLoaded", () => {
    const habitHistoryTable = document.querySelector("#habitHistory tbody");

    // Mock data for habit history
    const habitData = [
        { date: "2025-03-25", name: "Morning Walk", status: "Completed" },
        { date: "2025-03-26", name: "Drink Water", status: "Missed" },
        { date: "2025-03-27", name: "Meditation", status: "Completed" }
    ];

    habitData.forEach(entry => {
        const row = document.createElement("tr");

        const dateCell = document.createElement("td");
        dateCell.textContent = entry.date;

        const nameCell = document.createElement("td");
        nameCell.textContent = entry.name;

        const statusCell = document.createElement("td");
        statusCell.textContent = entry.status;

        row.appendChild(dateCell);
        row.appendChild(nameCell);
        row.appendChild(statusCell);

        habitHistoryTable.appendChild(row);
    });
});
