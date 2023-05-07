function current_time(){
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";


    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let today = date.getDate();
    let year = date.getFullYear();

    if(hours==0){
        hours = 12;
    }
    if(hours>12){
        hours=hours-12;
        session = "PM";
    }
    
    hours=(hours<10) ? `0${hours}` : hours;
    minutes=(minutes<10)? `0:${minutes}` : minutes;
    seconds=(seconds<10) ? `0:${seconds}` : seconds;

    let time = `
        <div>
            <div class="time">${hours}:${minutes}:${seconds}</div>
            <div>${today} | ${month} | ${year}</div>
            <div class="day">${day}</div>
        </div>
    `;
    document.getElementById("clock").innerHTML=time;
    setTimeout(current_time,1000);
}
current_time();