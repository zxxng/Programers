function solution(cipher, code) {
    return cipher.split('').filter((val, idx) => (idx+1) % code === 0).join('')
}