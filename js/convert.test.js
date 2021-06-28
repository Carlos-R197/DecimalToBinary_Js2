const convert = require('./convert')

describe('This program test the convert function, which returns decimal numbers in binary', () => {
    it('should convert the decimal number 0 to its binary value', () => {
        expect(convert(0)).toBe('0')
    })

    it('should convert the decimal number 9 to its binary value', () => {
        expect(convert(9)).toBe('1001')
    })

    it('should convert the decimal number 598 to its binary value', () => {
        expect(convert(598)).toBe('1001010110')
    })

    it('should convert the decimal number 1036 to its binary value', () => {
        expect(convert(1036)).toBe('10000001100')
    })

    it('should convert the decimal number 1769 to its binary value', () => {
        expect(convert(1769)).toBe('11011101001')
    })
})