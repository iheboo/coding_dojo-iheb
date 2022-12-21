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

        string[] categoris =
        {
            "Hearts",
            "Diamonds",
            "Spades",
            "Clubs"
        };

        foreach (string cs in categoris)
        {
            for (int i = 1; i < 14; i++)
            {
                cards.Add(new Card(cs, i));
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
        List<Card> unsh = this.cards;
        List<Card> sh = new List<Card>();
        Random rand = new Random();
        while (unsh.Count > 0)
        {
            int idx = rand.Next(0, unsh.Count);
            sh.Add(unsh[idx]);
            unsh.RemoveAt(idx);

        }
        this.cards = sh;
    }

}