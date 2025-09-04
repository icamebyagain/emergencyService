### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
getElementById - Selects a single element
getElementsByClassName- Selects all elements same class
querySelector- Selects the first element 
querySelectorAll- Selects all elements that matches the type
2. How do you **create and insert a new element into the DOM**?
create with - document.createElement()
then use (name).innertext = "" to set innertext then use appendChild to select parent element

3. What is **Event Bubbling** and how does it work?
its the process of how the eventshandler work, when u set an event for a target, the way it go to parentnode to childnode then comes back from childnode to parentnode again


4. What is **Event Delegation** in JavaScript? Why is it useful?

when u target a childnode and can use eventhandler on child to make listen the parent is  event delegation ,

its good for cleaner code and performance 
5. What is the difference between **preventDefault() and stopPropagation()** methods?
preventDefault() - Prevents the default action that the browser usally do
stopPropagation()- Stops the event from bubbling
---