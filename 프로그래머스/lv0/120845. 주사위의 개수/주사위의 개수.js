function solution(box, n) {
    let size = box.map(x => parseInt(x / n))
    let res = 1;
    for (let i of size) {
        res *= i
    }
    return res;
}