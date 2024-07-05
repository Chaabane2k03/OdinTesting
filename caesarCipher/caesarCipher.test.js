import caesarCipher from "./caesarCipher";
describe('caesarCipher', () => {

    it('should encrypt a string', () => {
        expect(caesarCipher.encrypt('hello', 3)).toBe('khoor');
    });

    it('should decrypt a string', () => {
        expect(caesarCipher.decrypt('khoor', 3)).toBe('hello');
    });
    
})