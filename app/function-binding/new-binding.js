// There's really no such thing as "constructor functions", but rather 
// construction calls of functions.

// When a function is invoked with new in front of it, otherwise known as a 
// constructor call, the following things are done automatically:

// 1. A brand new object is created (aka, constructed) out of thin air
// 2. The newly constructed object is [[Prototype]]-linked
// 3. The newly constructed object is set as the this binding for that function call
// 4. Unless the function returns its own alternate object, the new-invoked function 
// 	  call will automatically return the newly constructed object.


function Foo(a) {
	this.a = a;
}

var bar = new Foo( 2 );
console.log( bar.a );


// By calling Foo(..) with new KEYWORD, a new object is constructed and sets the new 
// object as the this for the call of foo(..). NEW is a function call's this can be bound.