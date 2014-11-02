// The call-site we care about is in the invocation 
// before the currently executing function.

function baz() {
	// call-stack is: 'baz'
	// call-site is in the global scope

	console.log("baz");
	bar(); // call-site for 'bar'
}

function bar() {
	// call-stack is: 'baz' -> 'bar'
	// call-site is in 'baz'

	console.log("bar");
	foo(); // call-site for 'foo'
}

function foo() {
	// call-stack is 'baz' -> 'bar' -> 'foo'
	// call-site is in 'bar'

	console.log('foo');
}

baz(); // call-site for 'baz'


function getThis(){
	// "use strict"; // if strict mode a throws TypeError: `this` is `undefined`

	console.log( this.a );
}

var a = 2;

(function(){
	"use strict"; 

	getThis(); // 2

})();



console.log("-----------------------------");















