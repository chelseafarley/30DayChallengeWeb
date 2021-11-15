using System.Collections.Generic;

namespace _30DayChallenge.Models
{
    public class MailingList
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IList<MailingListContactLink> MailingLists { get; set; }

        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
    }
}
