function solution(hp) {
    let cnt = 0;
    for (let i=5; i>0; i-=2) {
        cnt += parseInt(hp/i)
        hp = hp % i
    } 
    return cnt;
}