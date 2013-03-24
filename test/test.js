'use strict'
var expect = require('expect.js')
    , m = require('../')
    ;

describe('basic vector operations → ', function(){
    it('should multiply each element with the scalar', function(){
        expect(m.scale([1,3,5,7,11,13],13)).to
            .eql([13,39,65,91,143,169])
    })
    it('should add values of the same indeces together', function(){
        expect(m.add([1,3,5,7,11,13],[2,4,6,8,12,14])).to
            .eql([3,7,11,15,23,27])
    })
    it('should subtract values of the same indeces from each other', function(){
        expect(m.sub([1,3,5,7,11,13],[2,4,6,8,12,14])).to
            .eql([-1,-1,-1,-1,-1,-1])
    })
    it('should return the dot product of the input vectors', function(){
        expect(m.dot([1,3,5],[7,11,13])).to.eql(105)
    })
    it('even with more than two vectors', function(){
        expect(m.dot([ 1, 3, 7,11,13]
                         ,[ 7,11,13, 1, 3]
                         ,[ 3, 7, 1,13,11]
                         ,[11,13, 3, 7, 1]
                         ,[13, 1,11, 3, 7]
                         )).to
            .eql(3*5*7*11*13)
    })
})
