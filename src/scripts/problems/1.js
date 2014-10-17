function funcky(o){
	o = null;
}

var x = [];
funcky(x);
// x = []

function swap(a, b){
	var temp = a;
	a = b;
	b = temp;
}

var x = 1;
var y = 2;
// x = 1

// Write an argument that take and
// argument and returns that argument
function identity(x){
	return x;
}

var id = identity(4);
// id = 4

var add = addNumbers(4,5);
// console.log(add)

function multiNumbers(a, b){
	return a * b;
}

var multi = multiNumbers(4,5);
// console.log(multi)


function identifyf(x){
	return function(){
		return x;
	}
}

idf = identifyf(3);
// idf() // 3



addf(5)(5); // 10


addf = applyf(addNumbers);
// console.log(addf(2)(2))
// console.log(applyf(multiNumbers)(5)(6)); // 30





// A function that adds from two invocations
function addf(x){
	return function(y){
		return x + y;
	}
}

// A function that takes a binary function, and
// makes it callable with two invocations
function applyf(binary){
	return function(x){
		return function(y){
			return binary(x, y);
		};
	};
}

// Write two binary functions addNumbers + multiNumbers
// and return there sum product
function addNumbers(a, b){
	return a + b;
}

function addNumbers() {
	return Array.prototype.slice.call(arguments).reduce(function(prev, val) {
		return prev + val;
	}, 0);
}

// Write a function that takes a function as an argument,
// and can return a function that can supply a second argument.
function curry(func, first){
	return function(second){
		return func(first, second);
	}
}

function properCurry(func) {
	var args = Array.prototype.slice.call(arguments, 1);
	return function() {
		return func.apply(null, args.concat(Array.prototype.slice.call(arguments)));
	}
}


inc = addf(1);
inc = applyf(addNumbers)(1);
inc = curry(addNumbers, 1);

var fn = new Function('return function(a, b) { return a + b; }');


















