/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let flowersPlanted = 0;
    if(n <= 0) return true;
    if(flowerbed.length === 1){
        return flowerbed[0] === 0 && n <= 1;
    }
    for(let i=0; i < flowerbed.length; i++){
        let currentBed = flowerbed[i];
        if(currentBed === 1) continue;
        if(i > 0 && i < flowerbed.length - 1){
            let bedBefore = flowerbed[i-1];
            let bedAfter = flowerbed[i+1];
            if(bedBefore === 0 && bedAfter === 0){
                flowerbed[i] = 1;
                flowersPlanted++;
            }
        }else if(i===0){
            let bedAfter = flowerbed[i+1];
            if(bedAfter === 0){
                flowerbed[i] = 1;
                flowersPlanted++;
            }
        }else {
            let bedBefore = flowerbed[i-1];
            if(bedBefore === 0){
                flowerbed[i] = 1;
                flowersPlanted++;
            }
        }
    }
    return flowersPlanted >= n;
};