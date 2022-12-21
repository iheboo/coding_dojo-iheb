class Buffet
{
    public List<Food> Menu;

    //constructor
    public Buffet()
    {
        Menu = new List<Food>()
        {
            // Set Menu to a hard coded list of 7 or more Food objects you instantiate manually
            new Food("Cake", 350, false, true),
            new Food("Pad Thai", 1200, true, true),
            new Food("Taco Combo", 400, true, false),
            new Food("Paella", 600, false, false),
            new Food("Sandwich", 450, false, false),
            new Food("Ice cream", 450, false, true),
            new Food("Apples and Peanut Butter", 250, false, true)

        };
    }

    public Food Serve()
    {
        // randomly selects a Food object from the Menu list and returns the Food object
        Random rand = new Random();
        Food dish = Menu[rand.Next(Menu.Count())];
        return dish;
    }
}
class Food
{
    public string Name;
    public int Calories;
    public bool IsSpicy;
    public bool IsSweet;

    // add a constructor that takes in all four parameters: Name, Calories, IsSpicy, IsSweet
    public Food(string name, int calories, bool isSpicy, bool isSweet)
    {
        Name = name;
        Calories = calories;
        IsSpicy = isSpicy;
        IsSweet = isSweet;
    }
}
class Ninja
{
    private int calorieIntake;
    public List<Food> FoodHistory;

    // add a constructor
    public Ninja()
    {
        calorieIntake = 0;
        FoodHistory = new List<Food>();
    }

    // add a public "getter" property called "IsFull"
    bool IsFull
    {
        get
        {
            return calorieIntake > 1200;
        }
    }

    // build out the Eat method
    public void Eat(Food item)
    {
        // If the ninja is not full...
        if (IsFull == false)
        {
            calorieIntake += item.Calories;
            FoodHistory.Add(item);
            Console.WriteLine($"The ninja just ate {item.Name}!");
            if (item.IsSpicy)
                Console.WriteLine($"OUCH! That {item.Name} was spicy!!!");
            if (item.IsSweet)
                Console.WriteLine($"MMMMMmmmmm {item.Name} is so sweet.");
        }
        else
        {
            Console.WriteLine("Warning! This ninja is already full!");
        }
    }
}