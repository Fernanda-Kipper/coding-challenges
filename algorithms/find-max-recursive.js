function findMaxRecursive(arr){
    if(arr.length == 1) {
        return arr[0]
    } else {
        restMax = findMaxRecursive(arr.slice(1))
        if (arr[0] > restMax) {
            return arr[0]
        } else return restMax
    }
}

arr = [0,2,55,9,1,4,5,30]
console.log(findMaxRecursive(arr))