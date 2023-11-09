def quicksort(array):
    if(len(array) < 2):
        return array
    else:
        pivot = array[0]
        less = [i for i in array[1:] if i <= pivot]
        bigger = [i for i in array[1:] if i > pivot]
        return quicksort(less) + [pivot] + quicksort(bigger)

arr = [12,2,55,9,1,4,5,30]
print(quicksort(arr))