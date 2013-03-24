void function(root){

    var momentum = Object.create(null)
        , u = require('totemizer')
        ;

    function add(p,c){ return Number(p||0)+Number(c||0) }

    function subtract(p,c){ return Number(p||0)-Number(c||0) }

    function multiply(p,c){ return Number(p||0)*Number(c||0) }

    function divide(p,c){ return Number(p||0)/Number(c||0) }

    function zero_vector(size){
        var vector = [];
        while ( size-- > 0 ) { vector.push(0) }
        return vector
    }

    function gcd(vector){ return vector.reduce(gcd) }

    function dot_product(){
        return u.zipWithArray(
            function(){return u.slice(arguments).reduce(multiply)}
            , u.slice(arguments)
        ).reduce(add)
    }

    function cross_product(){ throw new Error('not implemented') }

    function scalar_multiplication(vector, scalar){
        return vector.map(function(v, i){ return Number(v)*Number(scalar) })
    }

    function scalar_division(vector, scalar){
        return vector.map(
            function(v, i){
                return momentum.scalar_operations.divide(v, scalar)
            }
        )
    }

    function addition(){
        return u.zipWithArray(
            function(p, c){
                return momentum.scalar_operations.add(p,c)
            }
            , u.slice(arguments)
        )
    }

    function subtraction(){
        return u.zipWithArray(
            function(p, c){
                return momentum.scalar_operations.sub(p,c)
            }
            , u.slice(arguments)
        )
    }

    momentum.scalar_operations = {
        add : add
        , sub : subtract
        , mul : multiply
    }

    momentum.scale = scalar_multiplication
    momentum.disperse = scalar_division

    momentum.add  = addition
    momentum.sub  = subtraction
    momentum.mul  = addition
    momentum.dot  = dot_product

    if ( typeof module !== 'undefined' && module.exports ) {
        module.exports = momentum
    } else {
        root.factory = momentum
    }

}(this)
