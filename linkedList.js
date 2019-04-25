class LikedList {
    constructor(value) {
        this.head = {
            value : value,
            next : null
        };
        this.tail = this.head; // initially when we have only one item head = tail
        this.length = 1;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    append(value) {  // insertion at the end
        const newNode = {
            value : value,
            next : null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) { // insertion at the front
        const newNode = {
            value : value,
            next : null
        };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    traverseToIndex(index) {
     let counter = 0;
     let currentNode = this.head;
     while(counter != index) {
         currentNode = currentNode.next;
         counter++;
     }
     return currentNode;
    }

    insert(index,value) {
        if(index >= this.length) { //index out of bound
            console.log("Index out of bound, added at tail");
            return this.append(value);
        }
        const newNode = {
            value : value,
            next : null
        }
        const leader = this.traverseToIndex(index-1); //previos node from the index where insertion is to be done
        const holdingPointer = leader.next; // node at the index where insertion is to be performed
        leader.next = newNode; // pointer of previous node -> new node
        newNode.next = holdingPointer; // pointer of new node -> node which was at the index of insertion
        this.length++; 
        return this.printList();         
    }

    remove(index) {
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next; // pointer points to the next node of the node at the given index
        this.length--;
        return this.printList; 
    }
}

const myLinkedList = new LikedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(120);
myLinkedList.insert(22,30);
myLinkedList.remove(2);
console.log(myLinkedList.printList());