using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using _30DayChallenge.Data;
using _30DayChallenge.DataModel;
using _30DayChallenge.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RabbitMQ.Client;

namespace _30DayChallenge.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GameController : ControllerBase
    {
        [HttpPost]
        public ActionResult Post(GameResult gameResult)
        {
            var factory = new ConnectionFactory() { HostName = "localhost" };
            using (var connection = factory.CreateConnection())
            {
                using (var channel = connection.CreateModel())
                {
                    channel.QueueDeclare(queue: "game_results", durable: false, exclusive: false, autoDelete: false, arguments: null);
                    string message = $"{gameResult.WinnerName} won {gameResult.Name}";
                    var body = Encoding.UTF8.GetBytes(message);

                    channel.BasicPublish(exchange: "", routingKey: "game_results", basicProperties: null, body: body);
                }
            }
            return Ok();
        }
    }
}
