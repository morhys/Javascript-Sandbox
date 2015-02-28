// This code allows the identify() and the speak() to be re-used
// against multiple CONTEXT (ME and YOU) objects. Rather than needing a 
// separate version of the function for each object.

function identify() {
	return this.name.toUpperCase();
}

function speak() {
	var greeting = "Hello, I'm " + identify.call(this);
	console.log(greeting);
}

var me = {
	name: 'morhys'
};

var you = {
	name: 'you'
};


identify.call( me ); // MORHYS
identify.call( you ); // YOU

speak.call( me ); // Hello, I'm MORHYS
speak.call( you ); // Hello, I'm YOU


// Instead of relying on this, you can explicitly pass in the CONTEXT object
// to both identify and speak

function identifyAgain(context) {
	return context.name.toUpperCase();
}

function speakIt(context) {
	var greeting = "Hello, I'm " + identifyAgain( context );
	console.log( greeting );
}

identifyAgain( you ); // YOU
speakIt( me ); //  Hello, I'm MORHYS


function CountNumbers(number) {
	console.log( "CountNumbers: " + number );

	// keep track of how many times count number has been called
	// Note: `this` IS actually `CountNumbers` now, based on
    // how `CountNumbers` is called (see below)
	this.count++;
}

CountNumbers.count = 0;

var i;

for(i = 0; i < 10; i++) {
	if(i > 5) {
		// using call(), which ensures the 'this'
		// points to the function object (CountNumbers) itself
		CountNumbers.call(CountNumbers, i);
	}
}

// CountNumbers: 6
// CountNumbers: 7
// CountNumbers: 8
// CountNumbers: 9


console.log( CountNumbers.count ); // 4



















