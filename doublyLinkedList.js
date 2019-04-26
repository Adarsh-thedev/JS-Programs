class LikedList {
    constructor(value) {
        this.head = {
            value : value,
            next : null,
            prev : null
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
            next : null,
            prev : null
        };
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) { // insertion at the front
        const newNode = {
            value : value,
            next : null,
            prev : null
        };
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }
}

const myLinkedList = new LikedList(10);
myLinkedList.append(5);
//myLinkedList.append(16);
myLinkedList.prepend(1);
// myLinkedList.insert(22,30);
// myLinkedList.remove(2);
console.log(myLinkedList.printList());