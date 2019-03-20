# Answers!
Keep your answers to each checkoff question here for safe keeping. You will need to copy them over to the submission form at the end of the project. 

Event Listener Review:
In our original code, it will perform the handleClick function upon compiling and before we are able to click on our button. Since the function already executed, clicking the button will have no effect. Instead, we should pass in an arrow function that either takes in an event (if handleClick utilizes event attributes) or none. 

Instead we should pass in:
<button onClick={() => handleClick}>
   Click me
</button>

In the first example, when we click on the button, "👋" will be passed in setEmoji. However, in the second example, the function itself is called upon compilation however nothing is passed in before and after clicking. Thus, nothing will happen when we click on the button.

Checkoff 1.1
ReactDOM.render renders our Cart component at the root of the page.

Checkoff 1.2
Pro: Nice, clean UI elements readily available.
Con: Documentation between libraries and integration may be difficult to understand and implement.