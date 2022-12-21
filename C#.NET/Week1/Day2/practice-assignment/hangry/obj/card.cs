public class Card
{
    public string Name;
    public string categorys;
    public int Value;

    public Card(string c, int val)
    {
        switch (val)
        {
            case 11:
                Name = "Jack";
                break;
            case 12:
                Name = "Queen";
                break;
            case 13:
                Name = "King";
                break;
            case 1:
                Name = "Ace";
                break;
            default:
                Name = val.ToString();
                break;
        }
        categorys = c;
        Value = val;
    }

    public override string ToString()
    {
        return $@"
        Name: {Name}
        categorys: {categorys}
        Value: {Value}";
    }
}