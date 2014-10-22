advanced-javascript
===================

scope, closure, object oriented, and asynchronous programming in JavaScript.

this binding AKA Call-site
===================

this binding is a constant source of confusion for the JavaScript developer who does not take the time to learn how the mechanism actually works. Guesses, trial-and-error, and blind copy-n-paste from Stack Overflow answers is not an effective or proper way to leverage this important this mechanism.

To learn this, you first have to learn what this is not, despite any assumptions or misconceptions that may lead you down those paths. this is neither a reference to the function itself, nor is it a reference to the function's lexical scope.

this is actually a binding that is made when a function is invoked, and what it references is determined entirely by the call-site where the function is called.
