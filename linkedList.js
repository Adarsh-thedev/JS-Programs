class LikedList {
    constructor(value) {
        this.head = {
            value : value,
            next : null
        }
        this.tail = null;
        this.length = 1;
    }
}

const myLinkedList = new LikedList(10);
console.log(myLinkedList);