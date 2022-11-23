class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}
class Unit extends Card {
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res ;
    }
    attack(target){
    target.res=target.res-this.power
    }
}
class Effect extends Card{
    constructor(name,cost,text,stat,magnitud){
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.magnitud=magnitud;
    }
    act(target){
        target.res+= this.magnitud
        console.log(target.res)
    }
    box(target){
        target.power+= this.magnitud
        console.log(target.power)
    }
    play( target ) {
            if( target instanceof Unit ) {
              console.log(this.text);
            } else {
                throw new Error( "Target must be a unit!" );
            }
        }
        
}
const Red_Belt_Ninja = new Unit ('Red Belt Ninja',3,3,4)
const Black_Belt_Ninja = new Unit ('Black Belt Ninja',4,5,4)

const Hard_Algorithm = new Effect ('Hard_Algorithm',2,'increase resilience by 3','resilience',3)
const Unhandled_Promise_Rejection = new Effect ('Unhandled Promise Rejection',1,'reduces resilience by 2','resilience',-2)
const Pair_Programming = new Effect ('Pair Programming',3,'increase s power by 2','power',2)

Hard_Algorithm.act(Red_Belt_Ninja)
Hard_Algorithm.play(Red_Belt_Ninja)

Unhandled_Promise_Rejection.act(Red_Belt_Ninja)
Unhandled_Promise_Rejection.play(Red_Belt_Ninja)

Pair_Programming.box(Red_Belt_Ninja)
Pair_Programming.play(Red_Belt_Ninja)

Black_Belt_Ninja.attack(Red_Belt_Ninja)
    