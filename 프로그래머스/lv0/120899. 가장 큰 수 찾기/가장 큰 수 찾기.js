function solution(array) {
    let arr = [...array].sort((a,b) => b-a);
    return [arr[0], array.indexOf(arr[0])];
}