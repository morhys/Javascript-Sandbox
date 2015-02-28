// Invoking foo with explicit binding by foo.call(..) 
// allows us to force its this to be obj.

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};


foo.call( obj );