const assert = require('chai').assert;
const expect = require('chai').expect;

const frequencyCounter = require('../charCount');

// When both all and have are used, the target object must both contain all of the passed-in 
// keys AND the number of keys in the target object must match the number of keys passed in 
// (in other words, a target object must have all and only all of the passed-in keys). 


let errorMessage1 = frequencyCounter(['a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b'])

describe('Field test for frequencyCounter', function(){

    it('Function returns an object', function(){
        assert.isObject(frequencyCounter(['a']), 'object');
    })

    it('Function run with single argument', function(){
        expect(frequencyCounter(['a'])).to.have.all.keys('a')
    })

    it('Function run with single REOCCURING argument ', function(){
        expect(frequencyCounter(['a','a','a','a'])).to.have.all.keys('a')
    })

    it('Function run with multiple single arguments ', function(){
        expect(frequencyCounter(['a', 'b', 'a', 'b'])).to.have.all.keys('a', 'b')
    })

    it('Function run with multiple single arguments ', function(){
        assert.isString(errorMessage1)})
});