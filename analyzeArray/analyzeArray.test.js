import {analyzeArray} from "./analyzeArray";

describe('analyzeArray', () => {
    it('should return object', () => {
        expect(typeof analyzeArray([1, 8, 3, 4, 2, 6])).toBe('object');
    });

    it('should return object with sum,avg,min,max', () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({sum: 24, avg: 4 , min: 1, max: 8});
    });

   
})