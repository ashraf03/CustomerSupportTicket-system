1. What is JSX, and why is it used?
   
   JSX (JavaScript XML) is a syntax extension used in React that allows you to write HTML-like code inside JavaScript.

Why is JSX used?

    Easy to write UI
    Looks like HTML → easy to understand
    Readable code
    Cleaner and more structured than pure JavaScript
    Dynamic content
    Combines HTML + JavaScript
    You can use logic inside UI

2. What is the difference between State and Props?
   
   State : Data managed inside a component
   Props : Data passed from parent to child
   
3. What is the useState hook, and how does it work?
   
   useState is a React hook that allows functional components to manage state. It returns the current state and a function to update it, and when the state changes, the component re-renders.

4 How can you share state between components in React?

State can be shared between components by lifting it up to a common parent and passing it down via props. Child components can update the state using callback functions passed from the parent.

5. How is event handling done in React?

   Event handling in React is done using JSX event attributes like onClick, where functions are passed as handlers. React uses a synthetic event system to manage events efficiently.
