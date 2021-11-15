using System.Collections.Generic;

namespace _30DayChallenge.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Company { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public IList<MailingListContactLink> MailingLists { get; set; }

        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
    }
}
