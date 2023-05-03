
//Weist Konstanten die Referenz auf ein HTML-Element zu. Document.querySelector() findet HTML Element was mit CSS-Selektor übereinstimmt CSS-Selektor übereinstimmt.

const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")



function updateClock()
{
    //Neue Funktion erstellt, neue "Date"-Instanz erstellt
    const currentDate = new Date();  

    //speichert aktuelle Stunde/Minute/Sekunde in entsprechender Variable
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    
    //Entsprechende Anpassung der Uhrzeiger gemäss aktueller Uhrzeit
    const hourDeg = (hour / 12) * 360;    
    hourEl.style.transform = `rotate(${hourDeg}deg)`;

    const minuteDeg = (minute / 60) * 360;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
    
    const secondDeg = (second / 60) * 360;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

//Führt Funktion updateClock jede Sekunde aus
setInterval(updateClock, 1000);