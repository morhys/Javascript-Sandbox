function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

var bar = function() {
	foo.call( obj );
};

bar(); // 2

setTimeout(bar, 100); // 2


// hard-bound 'bar' can no longer have it's 'this' overwritten
bar.call( window ); // 2

console.log('-----------------')


// The most typical way to wrap a function with a hard binding creates 
// a pass-thru of any arguments passed and any return value received.

function fooHardBinding(something) {
	console.log( this.b, something );
	return this.b + something;
}

var obj2 = {
	b: 3
};

var bar2 = function() {
	return fooHardBinding.apply( obj2, arguments);
};

var b = bar2( 3 ); 
console.log( b );


console.log('-----------------')

// Hard binding re-usable helper
function bind( func, ob ) {
	return function() {
		return func.apply( ob, arguments );
	};
}


function fooBind(something) {
	console.log('passed in: ' + this.c, something);
	return 'total: ' + (this.c + something);
}


var obj3 = {
	c: 4
};

var barBind = bind( fooBind, obj3 );

var c = barBind( 3 )
console.log( c )

































