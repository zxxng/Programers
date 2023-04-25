function solution(array, n) {
    const diff = array.sort((a,b) => a-b).map((e) => Math.abs(e-n));
    const minIdx = diff.indexOf(Math.min(...diff));
    return array[minIdx];
}