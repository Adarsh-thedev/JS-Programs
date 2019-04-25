class LikedList {
    constructor(value) {
        this.head = {
            value : value,
            next : null
        }
        this.tail = this.head; // initially when we have only one item head = tail
        this.length = 1;
    }

    append(value){
        const newNode = {
            value : value,
            next : null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
}

const myLinkedList = new LikedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(120);
console.log(myLinkedList);