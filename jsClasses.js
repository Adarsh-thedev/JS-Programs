class Player{
    constructor(name,type){
        this.name = name;
        this.type = type;
    }

    Introduce () {
        console.log(`Hello ! I'm ${this.name} and I'm a ${this.type}`);
    }
}

class Cricketer extends Player {
    constructor(name,type){
        super(name,type);
    }

    Play () {
        console.log(`I'm ${this.name}, let's play Cricket`);
    }
}

class Footballer extends Player {
    constructor(name,type){
        super(name,type);
    }

    Play () {
        console.log(`I'm ${this.name}, let's play Football`);
    }
}

Cricketer1 = new Cricketer('Adarsh','Cricketer');
Cricketer1.Introduce();
Cricketer1.Play();