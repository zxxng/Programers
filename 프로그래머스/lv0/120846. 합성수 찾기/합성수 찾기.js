function solution(n) {
    let cnt = 0;
    for (let i=3; i<=n; i++) {
        let num = 0;
        for (let j=1; j<=i; j++){
            if (i%j===0){
                num++;
            }
        }
        if (num >= 3) {
            cnt++;
        }
    }
    return cnt;
}