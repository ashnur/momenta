void function(root){

    var u = require('totemizer')
        , r = require('rationals')
        , boo = require('boo')
        ;

    function zero_vector(size){
        var vector = [];
        while ( size-- > 0 ) { vector.push(0) }
        return vector
    }

    function dot_product(A, B){
        return u.zipWith(
            function(){return u.slice(arguments).reduce(r.mul)}
            , A, B
        ).reduce(r.add)
    }

    function cross_product(){ throw new Error('not implemented') }

    function scalar_multiplication(vector, scalar){
        return vector.map(function(v){ return v.mul(scalar) })
    }

    function scalar_division(vector, scalar){
        return vector.map( function(v, i){ return v.div(scalar) })
    }

    function addition(A, B){ return u.zipWith( r.add , A, B) }

    function subtraction(A, B){ return u.zipWith( r.sub , A ,B) }

    function momentum(arr){ return arr.map(r.checkInput) }

    momentum.r = r
    momentum.zero_vector = zero_vector
    momentum.scale = scalar_multiplication
    momentum.disperse = scalar_division
    momentum.add  = addition
    momentum.sub  = subtraction
    momentum.dot  = dot_product


    if ( typeof module !== 'undefined' && module.exports ) {
        module.exports = momentum
    } else {
        root.factory = momentum
    }

}(this)
