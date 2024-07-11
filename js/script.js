let day = document.getElementById('day');
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

const timer = () => {

    let days = 0;
    let hr = 0;
    let min = 0;
    let sec = 0;

    day.innerHTML = days;
    hour.innerHTML = hr;
    minute.innerHTML = min;
    second.innerHTML = sec;

    setInterval(() => {
        sec++;
        second.innerHTML = sec;

        if(days <= 9){
            day.innerHTML = "0" + days;
        }
        if(hr <= 9){
            hour.innerHTML = "0" + hr;
        }
        if(min <= 9){
            minute.innerHTML = "0" + min;
        }
        if(sec <= 9){
            second.innerHTML = "0" + sec;
        }

        if(sec >= 60){
            sec = 0;
            second.innerHTML = sec++;
            minute.innerHTML = min++;
        }

        if(min > 59){
            min = 0;
            second.innerHTML = sec++;
            minute.innerHTML = min++;
            hour.innerHTML = hr++;
        }

        if(hr > 23){
            hr = 0;
            second.innerHTML = sec++;
            minute.innerHTML = min++;
            hour.innerHTML = hr++;
            day.innerHTML = days++;
        }

    }, 1000)
}
window.onload = function() {
    alert("please click and start timer");
    timer();
};
