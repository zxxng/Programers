function solution(s) {
    s = s.split(' ');
    let res = 0;
    for (let i in s) {
        if (s[i] === 'Z') {
            res -= s[i-1]
        } else {
            res += (s[i]*1);
        }
    }
    return res;
}