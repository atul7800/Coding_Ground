#### _Important links_

1. [Handeling events](https://eloquentjavascript.net/15_event.html)
2. [Event handeling by Scaler](https://www.scaler.com/topics/javascript/event-handling-in-javascript/)
3. [HTML event properties](https://www.w3schools.com/jsref/dom_obj_event_prop.asp)
4. [Explanation of event propagation](https://www.freecodecamp.org/news/a-simplified-explanation-of-event-propagation-in-javascript-f9de7961a06e/)

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
Event propagation is a way to describe the “stack” of events that are fired in a web browser.

There are two ways to handle event propagation:
1. Bubbling
2. Capturing (also called trickling)

### Bubbling
```js
grandParent.addEventListener('click', ()=>{
    console.log('Grandparent called.');
}, false);

parent.addEventListener('click', ()=>{
    console.log('Parent called.');
}, false);

child.addEventListener('click', ()=>{
    console.log('Child called.');
}, false);

childsChild.addEventListener('click', ()=>{
    console.log('Childs child called.');
}, false);
```
__Output:__
```
Childs child called.
Child called.
Parent called.
Grandparent called.
```

### Capturing/Trickling
```js
grandParent.addEventListener('click', ()=>{
    console.log('Grandparent called.');
}, true);

parent.addEventListener('click', ()=>{
    console.log('Parent called.');
}, true);

child.addEventListener('click', ()=>{
    console.log('Child called.');
}, true);

childsChild.addEventListener('click', ()=>{
    console.log('Childs child called.');
}, true);
```
__Output:__
```
Grandparent called.
Parent called.
Child called.
Childs child called.
```

__Notes:__
1. true - capturing
2. false - bubbling
3. If you don't pass any parameter then by default false will be passed
4. e.stopPropagation() to prevent propagation
5. e.preventDefault() to prevent default behavour
6. Capturing is given priority
       
__Eg:__
```js
grandParent.addEventListener('click', ()=>{
    console.log('Grandparent called.');
}, false);

parent.addEventListener('click', ()=>{
    console.log('Parent called.');
}, true);

child.addEventListener('click', ()=>{
    console.log('Child called.');
}, false);
```
__Output:__
```
Parent called.
Child called.
Grandparent called.
```


