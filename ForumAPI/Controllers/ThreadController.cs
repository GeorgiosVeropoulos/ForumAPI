using ForumAPI.Models;
using Microsoft.AspNetCore.Mvc;


namespace ForumAPI.Controllers
{
	[ApiController]
	[Route("api/threads")]
	public class ThreadController : Controller
	{
		[HttpGet]
		public List<ForumThread> RetreiveAllThreads()
		{
			return ForumThread.GetAllThreads();
		}

		[HttpGet("{id}")]
		public List<Post> RetrievePostsByThreadId(int id)
		{
			return Post.ReturnPostsWithThreadID(id);
		}


	}
}
