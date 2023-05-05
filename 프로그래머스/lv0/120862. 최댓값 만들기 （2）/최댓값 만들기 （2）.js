function solution(numbers) {
    let sortArr = [...numbers].sort((a,b) => b-a)
    let res1 = sortArr[0] * sortArr[1]
    let res2 = sortArr[sortArr.length - 1] * sortArr[sortArr.length - 2]
    
    if (res1 > res2) return res1;
    else return res2;
}