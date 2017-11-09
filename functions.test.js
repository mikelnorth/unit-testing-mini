const fns = require('./functions.js');

test("return number 2", () => {
    expect(fns.returnTwo()).toBe(2)
})

test("greet by name", () => {
    expect(fns.gretting('Mike')).toBe('Hello, Mike')
    expect(fns.gretting('Bannanna')).toBe('Hello, Bannanna')
})

describe('Math functions', () => {
    test("add", () => {
        expect(fns.add(3,2)).toBe(5)
        expect(fns.add(5,9)).toBe(14)
    })
    
    test("subtract", () => {
        expect(fns.subtract(3,2)).toBe(1)
        expect(fns.subtract(5,9)).toBe(-4)
    })
    
    test("multiply", () => {
        expect(fns.multiply(3,2)).toBe(6)
        expect(fns.multiply(5,9)).toBe(45)
    })
    
    test("divide", () => {
        expect(fns.divide(2,2)).toBe(1)
        expect(fns.divide(10,2)).toBe(5)
    })
})