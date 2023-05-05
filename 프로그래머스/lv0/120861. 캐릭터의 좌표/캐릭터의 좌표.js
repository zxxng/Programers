function solution(keyinput, board) {
    let arr = [0,0]
    let size = [Math.floor(board[0]/2), Math.floor(board[1]/2)]
    for (let i of keyinput) {
        if (i === "left" && arr[0] > size[0]*-1) { arr[0] -= 1; }
        else if (i === "right" && arr[0] < size[0]) { arr[0] += 1; }
        else if (i === "up" && arr[1] < size[1]) arr[1] += 1;
        else if (i === "down" && arr[1] > size[1]*-1) arr[1] -= 1;
    }
    return arr;
}