public class Card
{
    public string Name;
    public string Suit;
    public int Value;

    public Card(string s, int val)
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
        Suit = s;
        Value = val;
    }

    public override string ToString()
    {
        return $@"
        Name: {Name}
        Suit: {Suit}
        Value: {Value}";
    }
}
public class Deck
{
    public List<Card> cards = new List<Card>();

    public Deck()
    {
        Reset();
    }
    public List<Card> Reset()
    {
        cards.Clear();

        string[] suits =
        {
            "Hearts",
            "Diamonds",
            "Spades",
            "Clubs"
        };

        foreach (string suit in suits)
        {
            for (int i = 1; i < 14; i++)
            {
                cards.Add(new Card(suit, i));
            }
        }
        return cards;
    }

    public Card Deal()
    {
        Card cardDealt = cards[0];
        cards.RemoveAt(0);
        return cardDealt;
    }

    public void Shuffle()
    {
        List<Card> unshuffled = this.cards;
        List<Card> shuffled = new List<Card>();
        Random rand = new Random();
        while (unshuffled.Count > 0)
        {
            int idx = rand.Next(0, unshuffled.Count);
            shuffled.Add(unshuffled[idx]);
            unshuffled.RemoveAt(idx);

        }
        this.cards = shuffled;
    }

}
class Player
{
    private string name;
    private List<Card> hand;
    public Player(string name)
    {
        this.name = name;
        hand = new List<Card>();
    }

    public string Name
    {
        get { return name; }
    }

    public Card Draw(Deck d)
    {
        Card theCard = d.Deal();
        hand.Add(theCard);
        return theCard;
    }

    public Card Discard(int idx)
    {
        Card theCard;
        if (idx < hand.Count)
        {
            theCard = hand[idx];
            hand.RemoveAt(idx);
            return theCard;
        }
        else { return null!; }
    }

}