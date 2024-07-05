const caesarCipher ={
    encrypt : (str, shift) => {
        if (typeof str !== 'string') {
            return null
        }
        return str
            .split('')
            .map(char => {
                if (/[a-z]/.test(char)) {
                    return String.fromCharCode(
                        (char.charCodeAt(0) + shift - 97) % 26 + 97
                    );
                } else if (/[A-Z]/.test(char)) {
                    return String.fromCharCode(
                        (char.charCodeAt(0) + shift - 65) % 26 + 65
                    );
                } else {
                    return char;
                }
            })
            .join('');
    },

    decrypt : (str, shift) => {
        if (typeof str !== 'string') {
            return null
        }
        return str
            .split('')
            .map(char => {
                if (/[a-z]/.test(char)) {
                    return String.fromCharCode(
                        (char.charCodeAt(0) - shift - 97) % 26 + 97
                    );
                } else if (/[A-Z]/.test(char)) {
                    return String.fromCharCode(
                        (char.charCodeAt(0) - shift - 65) % 26 + 65
                    );
                } else {
                    return char;
                }
            })
            .join('');
    }
}

export default caesarCipher