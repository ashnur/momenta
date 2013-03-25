'use strict'
require('better-stack-traces')
var expect = require('expect.js')
    , m = require('../')
    , r = m.r
    , u = require('totemizer')
    ;

describe('basic vector operations → ', function(){
    it('should multiply each element with the scalar', function(){
        expect(m([1,3,5,7,11,13]).scale(13)).to
            .eql(m([13,39,65,91,143,169]))
    })
    it('should add values of the same indeces together', function(){
        expect(m([1,3,5,7,11,13]).add(m([2,4,6,8,12,14]))).to
            .eql(m([3,7,11,15,23,27]))
    })
    it('should subtract values of the same indeces from each other', function(){
        expect(m([1,3,5,7,11,13]).sub(m([2,4,6,8,12,14]))).to
            .eql(m([-1,-1,-1,-1,-1,-1]))
    })
    it('should return the dot product of the input vectors', function(){
        expect(m([1,3,5]).dot(m([7,11,13]))).to.eql(r(105))
    })
    it('should divide each element with the scalar', function(){
        expect(m([1,4,7,9,16]).disperse(12)).to
            .eql(m([r(1,12),r(1,3),r(7,12),r(3,4),r(4,3)]))
    })
})
