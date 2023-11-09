function binarySearch(arr, item){
    bottom = 0
    top = arr.length - 1
    while(bottom <= top){
        middle = Math.floor((bottom + top) / 2)
        if(arr[middle] == item) return middle
        else if (arr[middle] > item) {
            top = middle - 1
        } else {
            bottom = middle + 1
        }
    }
    return null
}

arr = [1,2,6,8,24,55,100]
console.log(binarySearch(arr, 8))