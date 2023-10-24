// Setze die Ziel-Uhrzeit (24-Stunden-Format)
const zielUhrzeit = new Date('2023-10-24T16:00:00').getTime();

// Aktualisiere den Countdown alle 1 Sekunde
const timer = setInterval(function () {
    const jetzt = new Date().getTime();
    const differenz = zielUhrzeit - jetzt;

    const tage = Math.floor(differenz / (1000 * 60 * 60 * 24));
    const stunden = Math.floor((differenz % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minuten = Math.floor((differenz % (1000 * 60 * 60)) / (1000 * 60));
    const sekunden = Math.floor((differenz % (1000 * 60) / 1000));

    const countdownElement = document.getElementById('timer');
    countdownElement.innerHTML = `${tage} Tage, ${stunden} Stunden, ${minuten} Minuten, ${sekunden} Sekunden`;

    // Wenn der Countdown abgelaufen ist
    if (differenz < 0) {
        clearInterval(timer);
        countdownElement.innerHTML = "Countdown abgelaufen!";
    }
}, 1000);
