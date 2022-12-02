using ForumAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace ForumAPI.Controllers
{

	[ApiController]
	[Route("api/post")]
	public class PostController : Controller
	{


		[Route("post")]
		[HttpGet]
		public ActionResult<List<Post>> Test()
		{
			return Post.ReturnPosts();
		}

		//private static List<Post> Posts = new List<Post>()
		//{
		//	new Post(id: 1,Category.Question,title: "titlestring", content: "contentstring")
		//};

		[Route("post")]
		[HttpPost]
		public ActionResult<List<Post>> Create(Post post)   //can be made async 
		{

			//Post..Add(post);
			//return Ok(Posts);
			return Post.Posts(post);
		}



	}
}
