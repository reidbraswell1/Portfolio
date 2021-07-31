function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let ampm = updateAmPm(hour);
    hour = updateHour(hour);
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + ampm;
    let t = setTimeout(function () {
        currentTime()
    }, 1000);
}

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}

function updateAmPm(hour, min) {
    let ampm;

    if (hour > 12) {
        hour = hour - 12;
        ampm = "PM";
    } else if (hour == 12 && min == 0) {
        ampm = "Noon";
    } else if (hour == 00 && min == 0) {
        ampm = "Midnight";
    }
    else {
        ampm = "AM";
    }
    return ampm;
}

function updateHour(hour) {

    if (hour > 12) {
        hour = hour - 12;
    }
    return hour;
}

currentTime();