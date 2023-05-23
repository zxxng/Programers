function solution(numlist, n) {
    return numlist.sort((a,b) => {
        const [way1, way2] = [Math.abs(a-n), Math.abs(b-n)]
        if(way1 === way2) return b-a
        return way1-way2
    })
}