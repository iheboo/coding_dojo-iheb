class Ninja {
    constructor(name,health=0,speed=3,srtength=3){
        this.health=health
        this.name=name
        this.speed=speed
        this.srtength=srtength
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(this.name,this.srtength,this.speed,this.health)
    }
    drinkSake(){
        this.health += 10;
        console.log(this.health)
    }
}
const hani = new Ninja("hani");
hani. sayName();
hani. showStats();
hani.drinkSake();
hani. showStats();
