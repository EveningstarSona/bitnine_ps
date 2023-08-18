function myDigitalClock() {
    const clock = document.querySelector("#clock");
    var zone = "AM";

    function updateClock(clock, zone) {
        var d1 = new Date();
        var hours = d1.getHours(); // 0 - 23
        var minutes = d1.getMinutes(); // 0 - 59
        var seconds = d1.getSeconds(); // 0 - 59

        let min_sec = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
        let am_pm = (zone == 'AM') ? (hours < 12 ? "AM" : "PM") : "";
        let hou = (zone == 'AM') ? (hours % 12 || 12) : hours;

        clock.innerHTML = `${String(hou).padStart(2,'0')}:${min_sec}${am_pm}`;
    }
    
    setInterval(updateClock, 500, clock, zone);
}

myDigitalClock();

// Code expects existing element with id clock.

// padStart is used in order to fix times such as 9:9:9AM, making it 09:09:09AM.

// In this function, zone is considered as the 12hour ("AM")/24hour (any other) boolean variable.