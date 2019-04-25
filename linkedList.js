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
        if(index >= this.length) {
            console.log("Index out of bound, added at tail");
            return this.append(value);
        }
        const newNode = {
            value : value,
            next : null
        }
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }

    remove(index) {
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
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