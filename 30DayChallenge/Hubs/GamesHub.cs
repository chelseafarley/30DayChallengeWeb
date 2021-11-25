using System.Threading.Tasks;
using _30DayChallenge.Hubs.Clients;
using Microsoft.AspNetCore.SignalR;

namespace _30DayChallenge.Hubs
{
    public class GamesHub : Hub<IGameClient>
    {
        public async Task SendGameResult(string result)
        {
            await Clients.All.ReceiveGameResult(result);
        }
    }
}
