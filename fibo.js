function fibo( value ){
	var vFibo = 0,
	    num1 = 1,
	    num2 = 2

	if ( value == 2 || value == 1 || value == 0 )
		return value
	
		
	for (var i = 2; i < value; i++ ){
		vFibo = num2 + num1
		num1 = num2
		num2 = vFibo
	}

	return vFibo
}

Number.prototype.fibo = function(){
		var vFibo = 0,
	    num1 = 1,
	    num2 = 2

	if ( this == 2 )
		return this
	
	if ( this == 1 )
		return this 
	
	for (var i = 3; i <= this; i++ ){
		vFibo = num2 + num1
		num1 = num2
		num2 = vFibo
	}

	return vFibo 
}

Object.defineProperty( Number.prototype, "fibo", {
	get: function(){
		var vFibo = 0,
	    num1 = 1,
	    num2 = 2

		if ( this == 2 )
			return this
			
		if ( this == 1 )
			return this 
			
		for (var i = 3; i <= this; i++ ){
			vFibo = num2 + num1
			num1 = num2
			num2 = vFibo
		}

		return vFibo 
	},

	configurable: true,
	enumerable: true
})

///////// Число Фибоначчи (рекурсия) //////////

function fibo( value ){
	if ( value == 2 || value == 1 || value == 0 )
		return value
	
	return fibo(value - 2) + fibo( value - 1 )
}

Number.prototype.fibo = function(){
	if ( value == 2 || value == 1 || value == 0 )
		return value
	
	return fibo(value - 2) + fibo( value - 1 )
}

Object.defineProperty( Number.prototype, "fibo", {
	get: function(){
		if ( value == 2 || value == 1 || value == 0 )
			return value
	
		return fibo(value - 2) + fibo( value - 1 )
	},

	configurable: true,
	enumerable: true
})
