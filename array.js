class myArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get (index) {
        return this.data[this.index];
    }

    push (item) {
        this.data[this.length] = item;
        this.length++;
        //return this.length;
    }

    pop () {
        delete this.data[this.length-1];
        this.length-- ;
    }

    delete (index) {
        for(let i=index; i<this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length-- ;
    }
}

const array1 = new myArray();
array1.push(1);
array1.push(5);
array1.push(4);
array1.delete(1);
console.log(array1);