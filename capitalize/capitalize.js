/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The string to capitalize.
 * @returns {string} - The capitalized string.
 * @throws {Error} - If the input is not a string or if it starts with a non-alphabetic character.
 */
export function capitalize(str) {

  if (typeof str !== 'string') {
    return null
  }

  if(str.length === 0) 
    return str

  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/.test(str[i])) {
      return str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1, str.length + 1);
    }
    else if (/[A-Z]/.test(str[i])) {
      return str 
    }
  }

  throw new Error('Invalid input. The string must contain at least one alphabetic letter.');
  
  
}