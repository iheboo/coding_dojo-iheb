public class Samurai : Human
{
    public Samurai  (string name) : base(name)
    {
        Health=200;
    }
       public override int Attack(Human target)
    {
        int dmg = Health;
        if(this.Health<=50){
        target.Health -= dmg;
        }
        Console.WriteLine($"{Name} attacked {target.Name} for {dmg} damage and add {dmg} for my Health ");
        return target.Health;
    }
    public int Meditate ()
    {
        int invo =  Health ;
        if(this.Health==0){
            this.Health=invo;
        }
             return this.Health;
    }
}