public class Wizard : Human
{
    public Wizard (string name): base(name)
    {
         Health = 50;
         Intelligence = 25;
    }
    public override int Attack(Human target)
    {
        int dmg = Intelligence * 3;
        target.Health -= dmg;
        this.Health += dmg;
        Console.WriteLine($"{Name} attacked {target.Name} for {dmg} damage and add {dmg} for my Health ");
        return target.Health;
    }
    public int Heal (Wizard target)
    {
        int invo =  Intelligence * 3;
        target.Health += invo;
        return target.Health;
    }
}