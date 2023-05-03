function solution(my_str, n) {
    let res = [];
    let str = my_str.split('');
    for (let i=0; i<my_str.length/n; i++) {
        res.push(str.splice(0,n).join(''));
    }
    return res;
}