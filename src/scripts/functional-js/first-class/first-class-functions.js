module.exports = function(){


	var fortyTwo = function(){ 
		return 42;
	}

	var fortyTwos = [ 42, function(){ return 45; }];

	42 + (function(){
		return 42;
	})();

	function weirdAdd(n,f){
		return n + f();
	}

	weirdAdd(42, function(){ return 42 });

	return 42;

	return function(){ return 42; };

};