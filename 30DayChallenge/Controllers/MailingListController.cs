using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using _30DayChallenge.Data;
using _30DayChallenge.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace _30DayChallenge.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class MailingListController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public MailingListController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IList<MailingList> Get()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            IList<MailingList> mailingLists = _dbContext.MailingLists.Include(x => x.MailingLists).ThenInclude(y => y.Contact).Where(y => y.UserId == userId).ToList();

            //In real code I would create data models to send to front end. In hacky code I will just null out the cyclic reference
            foreach (MailingList mailingList in mailingLists)
            {
                foreach (MailingListContactLink mailingListContactLink in mailingList.MailingLists)
                {
                    mailingListContactLink.MailingList = null;
                    mailingListContactLink.Contact.MailingLists = null;
                }
            }

            return mailingLists;
        }
    }
}
