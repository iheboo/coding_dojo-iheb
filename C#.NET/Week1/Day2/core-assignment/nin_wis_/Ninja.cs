public class Ninja : Human 
{
    public Ninja (string name) : base(name)
    {
        Dexterity =75;
    }
     public override int Attack(Human target)
    {
        int dmg = Dexterity / 5;
        target.Health -= dmg;
        Console.WriteLine($"{Name} attacked {target.Name} for {dmg} damage and add {dmg} for my Health ");
        return target.Health;
    }
     public int Steal (Wizard target)
    {
        int invo =  Health - 5;
        target.Health -= invo;
        this.Health += 5;
        return target.Health;
    }
} 