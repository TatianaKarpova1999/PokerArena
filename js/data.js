document.addEventListener("DOMContentLoaded", function () {
    const tournamentDates = document.querySelectorAll(".tournament-date");
  
    tournamentDates.forEach((dateElement) => {
      const daysToAdd = parseInt(dateElement.getAttribute("data-days"), 10);
      const today = new Date();
      today.setDate(today.getDate() + daysToAdd);
  
      // Форматируем дату как "DD.MM.YYYY"
      const formattedDate = today.toLocaleDateString("en-GB");
  
      dateElement.textContent = `Tournament Date: ${formattedDate}`;
    });
  });
  