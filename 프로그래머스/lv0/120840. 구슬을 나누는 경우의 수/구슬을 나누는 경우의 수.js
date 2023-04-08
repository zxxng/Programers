function factorial(number) {
    let s = BigInt(1)
    for (let i = 1; i <= number; i++) {
      s *= BigInt(i);
    }
    return s;
}

function solution(balls, share) {
    return factorial(balls)/(factorial(balls-share)*factorial(share));
}