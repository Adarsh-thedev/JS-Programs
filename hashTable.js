class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for(let i=0; i<key.length; i++) {
            hash = (hash + key.charCodeAt(i)*1) % this.data.length; //generates a unique hash fn
            //console.log(hash);
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if(!this.data[address]) {
            this.data[address] = []; // if no data on the adress, create an empty array
        }
        this.data[address].push([key,value]);
        return this.data;
    }
}

const myHash  = new HashTable(50);
myHash.set('grapes',400);
myHash.set('banana',40);
myHash.set('apple',40);
//console.log(myHash);