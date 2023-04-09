function solution(numbers, k) {
    let idx = k * 2 - 2;
    return numbers[idx%numbers.length];
}