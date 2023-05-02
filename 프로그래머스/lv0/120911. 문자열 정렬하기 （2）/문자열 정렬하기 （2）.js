function solution(my_string) {
    let lowString = my_string.toLowerCase().split('');
    return lowString.sort().join('');
}