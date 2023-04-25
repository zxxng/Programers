function solution(order) {
    let arr = order.toString()
    return arr.replace(/[^369]/g,'').length
}