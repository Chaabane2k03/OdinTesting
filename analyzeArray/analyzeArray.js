export function analyzeArray (arr){
    let sum = 0
    let min = arr[0]
    let max = arr[0]
    let length = arr.length
    for(let i = 0;i<arr.length;i++){
        sum += arr[i]
        if(arr[i]<min){
            min = arr[i]
        }
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return {sum:sum,avg:sum/length,min:min,max:max}
}
