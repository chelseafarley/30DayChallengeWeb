using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using _30DayChallenge.Data;
using _30DayChallenge.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace _30DayChallenge.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public ContactController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IList<Contact> Get()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            return _dbContext.Contacts.Where(x => x.UserId == userId).ToList();
        }
    }
}
