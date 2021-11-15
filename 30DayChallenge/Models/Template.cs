namespace _30DayChallenge.Models
{
    public class Template
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }

        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
    }
}
