import calculator from "./calculator";

describe("calculator", () => {
    it("should add two numbers", () => {
        expect(calculator.add(2, 3)).toBe(5);
    });

    it("should subtract two numbers", () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });

    it("should multiply two numbers", () => {
        expect(calculator.multiply(5, 3)).toBe(15);
    });

    it("should divide two numbers", () => {     
        expect(calculator.divide(15, 3)).toBe(5);
    });

    it("should return null for divide by zero", () => {
        expect(calculator.divide(15, 0)).toBe(null);
    });
})