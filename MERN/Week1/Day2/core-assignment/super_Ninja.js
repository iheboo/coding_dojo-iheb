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
class  SuperNinja extends Ninja{
    constructor(name,health= 200,speed= 10,srtength=10,wisdom=10){
      super(name,health,speed,srtength,wisdom)  
      this.wisdom=wisdom
    }
    speakWisdom(){
        const message = super.drinkSake();
        console.log(message);
    }
}
const Ninjaboy = new SuperNinja ("Master Splinter")
Ninjaboy.speakWisdom();
Ninjaboy.showStats();
