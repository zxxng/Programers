function solution(rsp) {
    let res = '';
    for (let i of rsp) {
        if (i === '2') res += '0';
        else if (i === '0') res += '5';
        else res += '2';
    }
    return res;
}