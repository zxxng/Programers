function solution(s1, s2) {
    let set_s1 = new Set(s1);
    let set_s2 = new Set(s2);
    
    return [...set_s1].filter(e => set_s2.has(e)).length;
}