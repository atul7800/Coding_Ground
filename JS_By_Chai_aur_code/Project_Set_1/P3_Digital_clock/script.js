let timeBox = document.getElementById('clock');

setInterval(function(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    timeBox.innerText = time;
}, 1000);