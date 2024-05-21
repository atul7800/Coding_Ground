/* 
let clickBtn = document.getElementById('btn');
        clickBtn.addEventListener('keydown', (event)=>{
            console.log("event: ",event);
            console.log("type: ",event.type);
            console.log("timeStamp: ", event.timeStamp);
            console.log("defaultPrevented: ",event.defaultPrevented);
            console.log("target: ",event.target);
            console.log("srcElement: ",event.srcElement);
            console.log("currentTarget: ",event.currentTarget);
            console.log("clientX: ",event.clientX);
            console.log("clientY: ",event.clientY);
            console.log("screenX: ",event.screenX);
            console.log("screenY: ",event.screenY);
            console.log("altKey: ", event.altKey);
            console.log("ctrlKey: ", event.ctrlKey);
            console.log("shiftKey: ", event.shiftKey);
        }, false)

https://www.w3schools.com/jsref/dom_obj_event_prop.asp 
*/

window.addEventListener(
    "load",
    () => {
      console.log("Page fully loaded.");
    },
    false
  );

  window.addEventListener(
    "resize",
    function () {
      console.log("Window resized");
    },
    false
  );

  document.getElementById("btn").addEventListener(
    "click",
    function showOutput() {
      console.log("Form submitted");
    },
    false
  );

  document.addEventListener("keydown", (event) => {
    console.log(`${event.keydown} pressed.`);
  });

  

