using System;
using System.Collections.Generic;
using System.Net.Http;
using _30DayChallenge.DataModel;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Stripe.Checkout;

namespace _30DayChallenge.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CheckoutApiController : ControllerBase
    {
        [HttpPost]
        public ActionResult CreateCheckoutSession()
        {
            var domain = "https://localhost:5001";
            var options = new SessionCreateOptions()
            {
                LineItems = new List<SessionLineItemOptions>()
                {
                    new SessionLineItemOptions()
                    {
                        Price = "price_1JuTSMCt6G2oaq5Sx90jkIJG",
                        Quantity = 1
                    }
                },
                PaymentMethodTypes = new List<string>()
                {
                    "card"
                },
                Mode = "payment",
                SuccessUrl = domain + "/success",
                CancelUrl = domain + "/cancel"
            };

            var service = new SessionService();
            Session session = service.Create(options);

            Response.Headers.Add("Location", session.Url);
            return new StatusCodeResult(303);
        }

    }
}
