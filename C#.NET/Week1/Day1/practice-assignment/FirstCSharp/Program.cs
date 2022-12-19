// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");
// Variable to interpolate
// string place = "Coding Dojo";
//Interpolated string, note the $
// string message = $"Hello {place}";
// Displaying final message
// Console.WriteLine(message);
// Another option uses placeholders like so
// Note this does NOT have a $ at the start
// Console.WriteLine("Hello {0}", place);
// Console.WriteLine("The value of pi is " + 3.14159);
//  Console.WriteLine("My name is {0}, I am " + 28 + " years old", "Tim");
// Console.WriteLine($"My name is {0}, I am " + 28 + " years old", "Tim");
// int numRings = 5;
// string name = "Kobe";
// if (numRings >= 5 && name == "Kobe")
// {
//   Console.WriteLine($"Welcome to the party {name}, congratulations on your {numRings} championships!");
// }
// int numRings = 5;
// int numOfAllStarAppearances = 17;
// if (numRings >= 5 || numOfAllStarAppearances > 3)
// {
//   Console.WriteLine("Welcome, you are truly a legend");
// }
// bool crazy = false;
// if (!crazy)
// {
//     Console.WriteLine("Let's party!");
// }
// loop from 1 to 5 including 5
// for (int i = 1; i <= 5; i++)
// {
//     Console.WriteLine(i);
// }
// // loop from 1 to 5 excluding 5
// for (int i = 1; i < 5; i++)
// {
//     Console.WriteLine(i);
// }
//The execution section does not always have to use ++
// for (int i = 1; i < 6; i = i + 1)
// {
//     Console.WriteLine(i);
// }
// int i = 1;
// while (i < 6)
// {
//     i = i + 1;
//     Console.WriteLine(i);
// }
Random rand = new Random();
for(int val = 0; val < 10; val++)
{
    //Prints the next random value between 2 and 8
    Console.WriteLine(rand.Next(1,9));
}









