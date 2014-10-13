function funcky(o){
	o = null;
}

var x = [];
funcky(x);
console.log(x); // []


function swap(a, b){
	var temp = a;
	a = b;
	b = temp;
}

var x = 1;
var y = 2;
console.log(x); // 1

function identity(x){
	return x;
}

var id = identity(4);
console.log(id);

function addNumbers(a, b){
	return a + b;
}

var add = addNumbers(4,5);
console.log(add)

function multiNumbers(a, b){
	return a * b;
}

var multi = multiNumbers(4,5);
console.log(multi)


function identifyf(x){
	return function(){
		return x;
	}
}

idf = identifyf(3);
console.log(idf()); // 3

function addf(x){
	return function(y){
		return x + y;
	}
}

function applyf(binary){
	return function(x){
		return function(y){
			return binary(x, y);
		};
	};
}

addf = applyf(addNumbers);
console.log(addf)
console.log(addf(3)(4)); // 7
console.log(applyf(multiNumbers)(5)(6)); // 30



function curry(func, first){
	return function(second){
		return func(first, second);
	}
}


add3 = curry(addf, 3);
console.log(add3);
console.log(add3(4));















