function solution(numbers, direction) {
    let answer = [];
    let len = numbers.length - 1
    if (direction === 'right') {
        answer.push(numbers[len])
        answer.push(...numbers.slice(0, len))
    }
    else {
        answer.push(...numbers.slice(1, len + 1))
        answer.push(numbers[0])
    }
    return answer;
}