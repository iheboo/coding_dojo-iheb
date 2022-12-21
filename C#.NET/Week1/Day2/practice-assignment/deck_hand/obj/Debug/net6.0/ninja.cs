class Ninja
{
    private int caloriesMg;
    public List<Food> FoodHistory;

    // add a constructor
    public Ninja()
    {
        caloriesMg = 0;
        FoodHistory = new List<Food>();
    }

    // add a public "getter" property called "IsFull"
    bool IsFull
    {
        get
        {
            return caloriesMg > 1200;
        }
    }

    // build out the Eat method
    public void Eat(Food item)
    {
        // If the ninja is not full...
        if (IsFull == false)
        {
            caloriesMg += item.Calories;
            FoodHistory.Add(item);
            Console.WriteLine($"hungir{item.Name}!");
            if (item.IsSpicy)
                Console.WriteLine($"  {item.Name} so hot!!!");
            if (item.IsSweet)
                Console.WriteLine($" {item.Name} is so cool.");
        }
        else
        {
            Console.WriteLine("Warning! This ninja is already full!");
        }
    }
}