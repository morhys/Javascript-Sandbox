// 'this' does not, in any way, refer to a function's lexical scope. It is true that 
// internally, scope is kind of like an object with properties for each of the available 
// identifiers. But the scope "object" is not accessible to JavaScript code.

function foo() {
	var a = 2;
	this.bar();
}

function bar() {
	console.log( this.a );
}


foo(); // undefined

// 'this' is  binding that is made when a function is invoked, and what it references 
// is determined entirely by the call-site where the function is called.
