function solution(quiz) {
    return ( quiz.map((e) => {
        let arr = e.split(' ');
        let x = parseInt(arr[0]);
        let y = parseInt(arr[2]);
        let z = 0;
        
        if (arr[1] === '+') z = x + y;
        else z = x - y;
        
        if (z === parseInt(arr[4])) return "O";
        else return "X"
    }))
}