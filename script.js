function setCountdown() {
    const setDateInput = document.getElementById('setDate');
    const setTimeInput = document.getElementById('setTime');
    const selectedDate = new Date(`${setDateInput.value}T${setTimeInput.value}`);

    if (selectedDate && !isNaN(selectedDate.getTime())) {
        startCountdown(selectedDate);
    } else {
        alert('Ungültiges Datum oder Uhrzeit. Bitte überprüfen.');
    }
}

function startCountdown(zielUhrzeit) {
    const countdownElement = document.getElementById('timer');
    const timer = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const jetzt = new Date().getTime();
        const differenz = zielUhrzeit - jetzt;

        if (differenz <= 0) {
            clearInterval(timer);
            countdownElement.innerHTML = "Countdown abgelaufen!";
        } else {
            const tage = Math.floor(differenz / (1000 * 60 * 60 * 24));
            const stunden = Math.floor((differenz % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minuten = Math.floor((differenz % (1000 * 60 * 60)) / (1000 * 60));
            const sekunden = Math.floor((differenz % (1000 * 60) / 1000));

            countdownElement.innerHTML = `${tage} Tage, ${stunden} Stunden, ${minuten} Minuten, ${sekunden} Sekunden`;
        }
    }
}
