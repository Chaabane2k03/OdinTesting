import { capitalize } from "./capitalize.js";

describe('capitalize', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('should return an empty string if the input is an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  it('should return null if the input is not a string', () => {
    expect(capitalize(123)).toBe(null);
    expect(capitalize(true)).toBe(null);
    expect(capitalize({})).toBe(null);
  });

  

  it('should handle strings with special characters', () => {
    expect(capitalize('!Hello')).toBe('!Hello');
  });

  it('should handle strings with numbers', () => {
    expect(capitalize('123Hello')).toBe('123Hello');
  });

  it('should handle strings with spaces', () => {
    expect(capitalize(' Hello')).toBe(' Hello');
  });

  it('should handle strings with multiple words', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });
});