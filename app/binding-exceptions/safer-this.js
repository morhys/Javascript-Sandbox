// Hard binding re-usable helper
function bind( func, ob ) {
	return function() {
		return func.apply( ob, arguments );
	};
}


function foo( a, b ) {
	console.log( "a:" + a + ", b:" + b );
}

var o = Object.create( null );

foo.apply( o, [2,3]);

var bar = foo.bind( o, 2);
bar( 3 );