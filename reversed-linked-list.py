def reverseList(currNode):
    if currNode.next != None:
        newHead = reverseList(currNode.next);
        currNode.next = None;
        newHead.next = currNode;
        return newHead.next;
    else:
        return currNode;

def reverse(currHead):
    newHead = currHead;
    while(newHead.next != None):
        newHead = newHead.next
    
    reverseList(currHead)
    return newHead