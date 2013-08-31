'use strict'
require('better-stack-traces')
var expect = require('expect.js')
    , m = require('../')
    , r = m.r
    , u = require('totemizer')
    ;

describe('basic vector operations → ', function(){
    it('should cast elements in an array to rational numbers', function(){
        expect(m([1])[0]).to.be(r(1))
    })
    it('return vector with given size, all values equal to zero', function(){
        expect(m.zero_vector(13)).to.eql([0,0,0,0,0,0,0,0,0,0,0,0,0])
    })
    it('should multiply each element with the scalar', function(){
        expect(m.scale(m([1,3,5,7,11,13]), r(13))).to
            .eql(m([13,39,65,91,143,169]))
    })
    it('should add values of the same indeces together', function(){
        expect(m.add(m([1,3,5,7,11,13]), m([2,4,6,8,12,14]))).to
            .eql(m([3,7,11,15,23,27]))
    })
    it('should subtract values of the same indeces from each other', function(){
        expect(m.sub(m([1,3,5,7,11,13]), m([2,4,6,8,12,14]))).to
            .eql(m([-1,-1,-1,-1,-1,-1]))
    })
    it('should return the dot product of the input vectors', function(){
        expect(m.dot(m([1,3,5]), m([7,11,13]))).to.eql(r(105))
    })
    it('should divide each element with the scalar', function(){
        expect(m.disperse(m([1,4,7,9,16]),r(12))).to
            .eql(m([r(1,12),r(1,3),r(7,12),r(3,4),r(4,3)]))
    })
    it('should return the cross product of the input vectors', function(){
        expect(m.cross(m([1,3,5]), m([7,11,13]))).to.eql(m([-16,22,-10]))
    })
})
