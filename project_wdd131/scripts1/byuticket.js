document.getElementById("purchaseBtn").addEventListener("click", function() {
    const movie = document.getElementById("movie").value;
    const showtime = document.getElementById("showtime").value;
    const tickets = document.getElementById("tickets").value;

    const summary = `
        <h2>Booking Confirmed!</h2>
        <p><strong>Movie:</strong> ${movie}</p>
        <p><strong>Showtime:</strong> ${showtime}</p>
        <p><strong>Tickets:</strong> ${tickets}</p>
    `;

    document.getElementById("summary").innerHTML = summary;
});
