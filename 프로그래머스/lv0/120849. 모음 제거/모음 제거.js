function solution(my_string) {
    my_string = Array.from(my_string).filter((v)=>!['a','e','i','o','u'].includes(v))
    return my_string.join('')
}