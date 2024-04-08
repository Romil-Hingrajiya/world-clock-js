//only date
setInterval(()=>{
    d = new Date().toLocaleDateString('en-US', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
    });
    
    dInput = document.getElementById("date");

    dInput.value = d;

}, 1000);

// ==========================================================================================================================//
//analog clock
setInterval(() => {
  d = new Date();

  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();

  //calculate rotation of each hands with 360deg angle
  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  //assign rotation to (#)hands
  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}, 1000);



// ========================================================================================================================= //
//world clock
function updateTime(timezone, inputName){
    const timeZone = timezone;
    const d = new Date().toLocaleTimeString("en-US", {timeZone});
    const inputlocate = document.getElementById(inputName);
    
    inputlocate.value = d;
    inputlocate.style.fontSize = "20px";
    inputlocate.style.fontWeight = "700";
    inputlocate.style.fontFamily = "'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif";

}
setInterval(()=>{
    updateTime("Asia/Kolkata", "india");
    updateTime("America/Los_Angeles", "usa");
    updateTime("Europe/Moscow", "russia");
    updateTime("Europe/Berlin", "uk");
    updateTime("Asia/Shanghai", "china");
    updateTime("Asia/Dubai", "dubai");
}, 1000);


// var audio = new Audio();
// audio.play();
