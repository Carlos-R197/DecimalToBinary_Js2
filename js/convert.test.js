const convert = require('./convert')

describe('This program test the convert function, which returns decimal numbers in binary', () => {
    it('should convert the decimal number 0 to its binary value', () => {
        expect(convert(0)).toBe(0)
    })
})