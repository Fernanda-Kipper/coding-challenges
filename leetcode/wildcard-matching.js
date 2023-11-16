/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// S = aba
// P = aba****
var isMatch = function(s, p) {
    let sIndex = 0;
    let pIndex = 0;

    let pStarIndex = -1;
    let sStarIndex = -1;

    while(sIndex < s.length){
        if(pIndex < p.length && compareChar(s[sIndex], p[pIndex])){
            sIndex++;
            pIndex++;
        } else if (pIndex < p.length && p[pIndex] === "*"){
            pStarIndex = pIndex;
            sStarIndex = sIndex;
            pIndex++;
        } else if (sStarIndex != -1){
            sIndex = sStarIndex + 1;
            pIndex = pStarIndex + 1;
            sStarIndex++;
        } else {
            return false;
        }
    }

    while(pIndex < p.length && p[pIndex] === "*"){
        pIndex++;
    }

    return pIndex === p.length
};

function compareChar(s,p){
    if(p === "?") return true
    return p === s
}