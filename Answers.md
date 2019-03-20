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

Checkoff 1.3
The onClick property takes in a function name, and upon a click the event triggers the function call with parameters of either none or the event itself. Since our addToCart function takes in a single, different parameter, we need to wrap it in a function that takes in no parameters and simply calls and returns the result of addToCart. Upon a click, our handleClick function will trigger and the result of that is our desired result from addToCart.

Checkoff 1.4
a. The .map function allowed us to create a singly defined Product component across our list of given products, resulting in a list of Product components that we did not have to manually write ourselves.
b. The data from an object may have specific variable/field names, so it is better to abstract away and modularize for any type of data (especially when scaling) rather than to hardcode and assume.