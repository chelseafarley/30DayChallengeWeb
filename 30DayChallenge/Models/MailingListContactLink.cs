namespace _30DayChallenge.Models
{
    public class MailingListContactLink
    {
        public int Id { get; set; }

        public int MailingListId { get; set; }
        public MailingList MailingList { get; set; }

        public int ContactId { get; set; }
        public Contact Contact { get; set; }
    }
}
