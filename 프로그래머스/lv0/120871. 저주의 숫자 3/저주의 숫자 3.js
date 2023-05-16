function solution(n) {
    let answer = 0;

    const checkNum = (k)=>{
        const numbers = String(k).split("")
        if(k%3===0|| numbers.includes("3")){
            answer++
            checkNum(answer)
    	} else {
        return
    	}
    }
    for(let i = 0; i<n; i++){
        answer++
        checkNum(answer)
    }
    return answer
}