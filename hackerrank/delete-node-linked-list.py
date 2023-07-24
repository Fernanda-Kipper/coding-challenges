def deleteNode(head, position):
    if(position == 0):
        return head.next;
    currNode = head;
    for x in range(0,position - 1):
        currNode = currNode.next
    currNode.next = currNode.next.next
    return head