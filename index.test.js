let expect = chai.expect;

describe('sum(a,b)', () => {
    it('should return the sum of two numbers', () =>{
        expect(sum(1,2)).to.equal(3)    
 });
});

describe('sumArray(arr')', () => {
    it('should return the sum of an array of numbers', () => {
        expect(sumArray(array1)).equal(15)
    })

it('should return a number', () =>{
    expect(sumArray(array1)).to.be.a('number')
});

});