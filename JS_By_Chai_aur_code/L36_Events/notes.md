#### _Important links_

1. [Handeling events](https://eloquentjavascript.net/15_event.html)
2. [Event handeling by Scaler](https://www.scaler.com/topics/javascript/event-handling-in-javascript/)
3. [HTML event properties](https://www.w3schools.com/jsref/dom_obj_event_prop.asp)
4. [Introduction to Events](https://javascript.info/events)

# Events

Events are actions performed when a user interacts with the page - like clicking an element, typing in a field. Events can be performed by browser itself as well.

The browser notifies the system that something has happened. It can be handled by registering a function, called an event handler, that listens for a particular type of event.

### Browser events examples

1. _**load**_:
   This event is triggered by the browser when entire page has finished loading.

   ```js
   window.addEventListener(
     "load",
     () => {
       console.log("Page fully loaded.");
     },
     false
   );
   ```

2. _**resize**_:
   Triggered when browser window is resized.
   ```js
   window.addEventListener(
     "resize",
     function () {
       console.log("Window resized");
     },
     false
   );
   ```

### User events example

1. _**click**_:
   ```js
   document.getElementById("submitBtn").addEventListener(
     "click",
     function showOutput() {
       console.log("Form submitted");
     },
     false
   );
   ```
2. _**keydown**_:
   Triggered when any key is pressed on the keyboard.
   ```js
   document.getElementByName("button").addEventListener("keydown", (event) => {
     console.log(`${event.keydown} pressed.`);
   });
   ```

## Event propagation

An event handler registered on an element with child elements inside will
