class Human
{
    public string Name { get; set; }
    public int Strength { get; set; }
    public int Intelligence { get; set; }
    public int Dexterity { get; set; }
    public int Health { get; set; }



    public Human(string name)
    {
        Name = name;
        Strength = 3;
        Intelligence = 3;
        Dexterity = 3;
        Health = 100;
    }

    public Human(string name, int s, int i, int d, int h)
    {
        Name = name;
        Strength = s;
        Intelligence = i;
        Dexterity = d;
        Health = h;
    }

    // Build Attack method
    public int Attack(Human target)
    {
        int d = Strength * 3;
        target.Health -= d;
        Console.WriteLine($"{Name} attacked {target.Name} for :{d} damage!");
        return target.Health;
    }
}                                                          