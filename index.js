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
        scalar = r.checkInput(scalar)
        return vector.map(function(v){ return v.mul(scalar) })
    }

    function scalar_division(vector, scalar){
        scalar = r.checkInput(scalar)
        return vector.map( function(v, i){ return v.div(scalar) })
    }

    function addition(A, B){
        return u.zipWith( r.add , A, B)
    }

    function subtraction(A, B){
        return u.zipWith( r.sub , A ,B)
    }

    function v(arr){
        var inst = arr.map(r.checkInput)
        inst.__proto__ = v.prototype
        return inst
    }
    v.prototype = Object.create(Array.prototype)

    v.prototype.scale = u.enslave(scalar_multiplication)
    v.prototype.disperse = u.enslave(scalar_division)
    v.prototype.add  = u.enslave(addition)
    v.prototype.sub  = u.enslave(subtraction)
    v.prototype.mul  = u.enslave(addition)
    v.prototype.dot  = u.enslave(dot_product)


    function momentum(arr){
        return v(arr)
    }

    momentum.r = r
    momentum.zero_vector = zero_vector
    momentum.scale = u.enslave(scalar_multiplication)
    momentum.disperse = u.enslave(scalar_division)
    momentum.add  = u.enslave(addition)
    momentum.sub  = u.enslave(subtraction)
    momentum.mul  = u.enslave(addition)
    momentum.dot  = u.enslave(dot_product)


    if ( typeof module !== 'undefined' && module.exports ) {
        module.exports = momentum
    } else {
        root.factory = momentum
    }

}(this)
