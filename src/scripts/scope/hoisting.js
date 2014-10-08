module.exports = function() { 


	// How hoisting is set when javascript is compiled

	a;
	b;
	var a = b;
	var b = 2;
	b;
	a;


	// When compiled

	var a;
	var b;
	a;
	b;
	a = b;
	b = 2;
	b;
	a;


}