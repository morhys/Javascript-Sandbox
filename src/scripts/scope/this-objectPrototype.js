module.exports = function(){


	// call site for 'this'

	function baz(){
		// call site is: baz
		// so, out call-site is in the global scope
		console.log("baz");
		bar();
	}

	function bar(){
		// call-stack is: "baz" -> "bar"
		console.log("bar");
		foo();
	}

	function foo(){
		// call-stack is: 'baz' -> 'bar' -> 'foo'
		// so, our call sire is in 'bar'

		console.log("foo");
	}

	baz(); // <- call site for baz.

}