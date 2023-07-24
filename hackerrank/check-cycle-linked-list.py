def has_cycle(head, visited = []):
    if head in visited:
        return 1;
    else:
        visited.append(head)
        if(head.next == None):
            return 0;
        else:
            return has_cycle(head.next, visited);