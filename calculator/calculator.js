const calculator ={
    divide: (num1, num2) => {
        if(num2 === 0){
            return null
        }
        return num1 / num2
    },
    multiply: (num1, num2) => num1 * num2,
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2
}

export default calculator