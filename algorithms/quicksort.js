function quickSort(arr){
    if(arr.length < 2) {
        return arr
    }
    else {
        pivot = arr[0]
        greater = [...arr].splice(1).filter(item => (item > pivot))
        smaller = [...arr].splice(1).filter(item => (item <= pivot))
        sortedSmaller = quickSort(smaller)
        sortedGreater = quickSort(greater)
        return [...sortedSmaller, pivot, ...sortedGreater]
    }
}

arr = [12,2,55,9,1,4,5,30]
console.log(quickSort(arr))