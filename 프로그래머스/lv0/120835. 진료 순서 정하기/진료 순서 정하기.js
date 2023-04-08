function solution(emergency) {
    let tmp = [...emergency].sort((a,b)=>b-a)
    let answer = []
    for (let i=0; i<tmp.length; i++){
        answer[i] = tmp.indexOf(emergency[i])+1
    }
    return answer;
}