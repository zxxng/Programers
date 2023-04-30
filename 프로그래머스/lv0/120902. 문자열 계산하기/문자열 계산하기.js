function solution(my_string) {
    let arr = [...my_string.split(' ')];
    let num = arr[0]*1;
    arr.forEach((sign, idx) => {
        if (sign === '+') num += arr[idx+1]*1;
        else if (sign === '-') num -= arr[idx+1]*1
    })
    return num;
}