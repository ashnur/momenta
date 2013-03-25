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

    function gcd(vector){ return vector.reduce(gcd) }

    function dot_product(A, B){
        return u.zipWith(
            function(){return u.slice(arguments).reduce(function(p, c){
                return p.mul(c)
            })}
            , A, B
        ).reduce(function(p, c){
            return p.add(c)
        })
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
        return u.zipWith( function(p, c){ return p.add(c) } , A, B)
    }

    function subtraction(A, B){
        return u.zipWith( function(p, c){ return p.sub(c) } , A ,B)
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


    if ( typeof module !== 'undefined' && module.exports ) {
        module.exports = momentum
    } else {
        root.factory = momentum
    }

}(this)
