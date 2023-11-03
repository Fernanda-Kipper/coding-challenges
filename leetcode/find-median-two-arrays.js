/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged = [...nums1, ...nums2].sort((i, j) => i - j)
    if(merged.length % 2 == 0){
        return (merged[(merged.length / 2) - 1] + merged[merged.length / 2]) / 2
    } else {
        return merged[Math.floor(merged.length / 2)]
    }
};