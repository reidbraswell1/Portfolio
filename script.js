// Loop every second getting the time and present a date in
// the format 'DDD HH : MM : SS AM/PM'
function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let ampm = updateAmPm(hour);
    let day = date.getDay();
    let daySpelled = updateDay(day);
    hour = updateHour(hour);
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = daySpelled + " " + hour + " : " + min + " : " + sec + " " + ampm;
    let t = setTimeout(function () {
        currentTime()
    }, 1000);
}

// Add a leading zero to the hour min and sec
function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}

// Return a AM PM Noon or Midnight indication for a given hour and minutes
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

// Return the hour as 1 - 12 instead of 0 - 23
function updateHour(hour) {

    if (hour > 12) {
        return hour - 12;
    }
    else if(hour == 0) {
        return 12;
    }
}

// Returned the spelled day of the week
function updateDay(day) {
    switch(day) {
        case 0:
            return "SUN";
        case 1:
            return "MON";
        case 2:
            return "TUE";
        case 3:
            return "WED";
        case 4:
            return "THU";
        case 5:
            return "FRI";
        case 6:
            return "SAT";
    }    
}

currentTime();