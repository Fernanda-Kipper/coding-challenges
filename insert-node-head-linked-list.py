#
# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
# Being SinglyLinkedListNode a class Provided by the runner

# class SinglyLinkedListNode

def insertNodeAtHead(oldHead, data):
    newHead = SinglyLinkedListNode(data);
    newHead.next = oldHead;
    return newHead;