// If you pass null or undefined as a this binding parameter to call, 
// apply, or bind, those values are effectively ignored, and instead 
// the default binding rule applies to the invocation.


// Hard binding re-usable helper
function bind( func, ob ) {
	return function() {
		return func.apply( ob, arguments );
	};
}


function Foo() {
	console.log( this.a );
}

var a = 2;

Foo.call( null ); // 2


function FooAdd(a, b) {
	console.log( "a:" + a + ", b:" + b );
}

// spreading out array as parameters
FooAdd.apply( null, [2, 3] ); // a: 2, b: 3

// currying with 'bind()'
var bar = FooAdd.bind( null, 2);
bar( 3 ); // a:2, b:3 
