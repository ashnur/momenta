void function(root){

    var u = require('totemizer')
        , r = require('rationals')
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

    function cross_product(v1, v2){
        return [(v1[1].mul(v2[2])).sub(v2[1].mul(v1[2]))
                , (v1[2].mul(v2[0])).sub(v2[2].mul(v1[0]))
                , (v1[0].mul(v2[1])).sub(v2[0].mul(v1[1]))]
    }

    function scalar_multiplication(vector, scalar){
        return vector.map(function(v){ return v.mul(scalar) })
    }

    function scalar_division(vector, scalar){
        return vector.map( function(v, i){ return v.div(scalar) })
    }

    function addition(A, B){ return u.zipWith( r.add , A, B) }

    function subtraction(A, B){ return u.zipWith( r.sub , A ,B) }

    function momenta(arr){ return arr.map(r.checkInput) }

    momenta.r = r
    momenta.zero_vector = zero_vector
    momenta.scale = scalar_multiplication
    momenta.disperse = scalar_division
    momenta.add = addition
    momenta.sub = subtraction
    momenta.dot = dot_product
    momenta.cross = cross_product
    momenta.gcd = function(vector){ return vector.reduce(r.gcd) }


    if ( typeof module !== 'undefined' && module.exports ) {
        module.exports = momenta
    } else {
        root.factory = momenta
    }

}(this)
