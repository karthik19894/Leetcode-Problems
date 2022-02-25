/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const revisions1 = version1.split(".");
    const revisions2 = version2.split(".");
    let p1 = 0, p2 = 0;
    while(p1 < revisions1.length || p2 < revisions2.length){
        let rev1 = p1 < revisions1.length ? revisions1[p1] : 0;
        let rev2 = p2 < revisions2.length ? revisions2[p2] : 0;
        if(parseInt(rev1) < parseInt(rev2)) return -1;
        else if(parseInt(rev1) > parseInt(rev2)) return 1;
        else{
            p1++;
            p2++;
        }
    }
    return 0;
};