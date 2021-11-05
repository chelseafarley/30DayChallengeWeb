using System;
using System.Collections.Generic;
using System.Net.Http;
using _30DayChallenge.DataModel;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace _30DayChallenge.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CovidController : ControllerBase
    {
        [HttpGet]
        public async System.Threading.Tasks.Task<IEnumerable<LocationOfInterest>> GetLocations()
        {
            using (HttpClient client = new HttpClient())
            {
                client.BaseAddress = new Uri("http://localhost:5002/");

                using (HttpResponseMessage response = await client.GetAsync("getlocations"))
                {
                    var responseContent = response.Content.ReadAsStringAsync().Result;
                    IList<LocationOfInterest> locationOfInterests = JsonConvert.DeserializeObject<IList<LocationOfInterest>>(responseContent);
                    return locationOfInterests;
                }
            }
        }
    }
}
