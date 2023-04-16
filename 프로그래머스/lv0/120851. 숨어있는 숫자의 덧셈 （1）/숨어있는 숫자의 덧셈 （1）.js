function solution(my_string) {
    let sum = 0;
    let arr = my_string.split('')
    for (let i=0; i<arr.length; i++){
        if (Number(arr[i]) >= 0 && Number(arr[i]) <= 9) {
            sum += Number(arr[i])
        }  
    }
    return sum;
}