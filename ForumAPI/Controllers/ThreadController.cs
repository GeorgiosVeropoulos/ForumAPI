using ForumAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace ForumAPI.Controllers
{
	[ApiController]
	[Route("api/threads")]
	public class ThreadController : Controller
	{
		[Route("threads")]
		[HttpGet]
		public List<ForumThread> RetreiveAllThreads()
		{
			return ForumThread.CreateDemoThreads();
		}

		[Route("postsbythreadId")]
		[HttpGet]
		public List<Post> RetrievePostsByThreadId(int threadId)
		{


			return Post.ReturnPostsWithThreadID(threadId);
		}


	}
}
