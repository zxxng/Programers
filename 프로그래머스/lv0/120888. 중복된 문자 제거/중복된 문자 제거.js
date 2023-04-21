function solution(my_string) {
    let res = new Set(my_string);
    return Array.from(res).join('');
}