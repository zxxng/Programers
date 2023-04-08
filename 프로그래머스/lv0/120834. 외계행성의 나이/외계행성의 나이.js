function solution(age) {
    let arr = 'abcdefghij';
    let answer = '';
    while (age !== 0) {
        answer = arr[age%10] + answer;
        age = parseInt(age/10)
    }
    return answer;
}