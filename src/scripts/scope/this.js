module.exports = function() { 

	// "use strict";

	function identify(){
		return this.name.toUpperCase();
	}

	function speak(){
		var greeting = "Hello, I'm " + identify.call(this);
		console.log(greeting);
	}

	var me = {
		name: "Morhys"
	}

	var you = {
		name: "Reader"
	}

	identify.call(me); // MORHYS
	identify.call(you); // READER

	speak.call(me); // Hello, I'm MORHYS
	speak.call(you); // Hello, I'm READER

	console.log("------------------------------------");


	// Instead of using this, you can explicitly pass in a context object to both
	// identifyContext() and speakContext()

	function identifyContext(context){
		return context.name.toUpperCase();
	}

	function speakContext(context){
		var greeting = "Hello, I'm " + identifyContext(context);
		console.log(greeting);
	}

	identifyContext(you);
	speakContext(me);

	console.log("------------------------------------");


	// Track how many times foo is called

	function foo(num){
		console.log("foo: " + num);

		// Keep track of how many times 'foo' is called
		this.countNum++;
	}

	foo.countNum = 0;

	var i;

	for(i=0; i<10; i++){
		if(i > 5){
			foo(i);
		}
	}

	console.log(foo.countNum); // 0? WTF

	console.log("------------------------------------");

	function foo2(num){
		console.log("foo: " + num);

		// keep track of how many times foo2 is being called
		data.count++;
	}

	var data = {
		count: 0
	}

	var i;

	for(i=0; i<10; i++){
		if(i > 5){
			foo2(i)
		}
	}

	console.log(data.count); // 4

	console.log("------------------------------------");

	function foo(num) {
	    console.log( "foo: " + num );

	    // keep track of how many times `foo` is called
	    foo.count++;
	}

	foo.count = 0;

	var i;

	for (i=0; i<10; i++) {
	    if (i > 5) {
	        foo( i );
	    }
	}
	// foo: 6
	// foo: 7
	// foo: 8
	// foo: 9

	// how many times was `foo` called?
	console.log( foo.count ); // 4

	console.log("------------------------------------");


	function trackFoo(num) {
	    console.log( "foo: " + num );

	    // keep track of how many times `foo` is called
	    // Note: `this` IS actually `trackFoo` now, based on
	    // how `trackFoo` is called (see below)
	    this.count++;
	}

	trackFoo.count = 0;

	var i;

	for (i=0; i<10; i++) {
	    if (i > 5) {
	        // using `call(..)`, we ensure the `this`
	        // points at the function object (`trackFoo`) itself
	        trackFoo.call( trackFoo, i );
	    }
	}
	// foo: 6
	// foo: 7
	// foo: 8
	// foo: 9

	// how many times was `trackFoo` called?
	console.log( trackFoo.count ); // 4


	function fooAgain(){
		var a = 2;
		this.bar();
	}

	function bar(){
		console.log(this.a);
	}

	// fooAgain(); // referenceError: a is not defined















}