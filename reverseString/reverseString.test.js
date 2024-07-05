import { reverseString } from "./reverseString";

describe('reverseString', () => {
    it('should reverse a string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    it('It should display !popirotas on an input of satoripop!',()=>{
        expect(reverseString('satoripop!')).toBe('!popirotas');
    });
})