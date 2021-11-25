using System.Threading.Tasks;

namespace _30DayChallenge.Hubs.Clients
{
    public interface IGameClient
    {
        Task ReceiveGameResult(string message);
    }
}
