/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let valueL1 = BigInt(getValueFromList(l1))
    let valueL2 = BigInt(getValueFromList(l2))
    let result = (valueL1 + valueL2).toString().split("").reverse()
    
    let headNode =  new ListNode(result[0], null)
    let currentNode = headNode

    for(i = 1; i < result.length; i++){
        currentNode.next = new ListNode(result[i], null)
        currentNode = currentNode.next
    }

    return headNode
};

function getValueFromList(list){
    if(list.next){
        return getValueFromList(list.next) + list.val.toString()
    }
    return list.val.toString()
}