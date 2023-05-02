function solution(num, k) {
    num = num.toString()
    if (num.indexOf(k) !== -1) {
        return num.indexOf(k) + 1;
    }
    return -1;
}