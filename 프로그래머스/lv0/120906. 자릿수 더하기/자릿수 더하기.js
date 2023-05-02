function solution(n) {
    let arr = n.toString().split('');
    let sum = 0;
    for (let i of arr) {
        sum += i * 1;
    }
    return sum;
}