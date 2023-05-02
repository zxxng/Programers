function solution(n, numlist) {
    let res = numlist.filter((e) => e % n === 0)
    return res;
}