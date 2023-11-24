function solution(my_string, overwrite_string, s) {
    var answer = '';
    answer += my_string.substring(0, s);
    answer += overwrite_string
    answer += my_string.substring(overwrite_string.length + s)
    return answer;
}