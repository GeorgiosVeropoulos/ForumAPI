using ForumAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace ForumAPI.Controllers
{

	[ApiController]
	[Route("api/post")]
	public class PostController : Controller
	{


		// [HttpGet]
		// public ActionResult<List<Post>> Test()
		// {
		// 	return Post.ReturnPosts();
		// }

		//private static List<Post> Posts = new List<Post>()
		//{
		//	new Post(id: 1,Category.Question,title: "titlestring", content: "contentstring")
		//};

		[HttpPost]
		// public ActionResult<List<Post>> Create(Post post)   //can be made async 
		public ActionResult<string> Create(Post post)   //can be made async 
		{

			//Post..Add(post);
			//return Ok(Posts);
			Status addingPostStatus = Post.AddPost(post);
			if (addingPostStatus == Status.Ok)
			{
				return Ok("Post added successfully");
			}
			else if (addingPostStatus == Status.ContainsProfanity)
			{
				return BadRequest("Post contains profanity");
			}
			else if (addingPostStatus == Status.ContainsSpam)
			{
				return BadRequest("Post contains spam");
			}
			else
			{
				return BadRequest("Post could not be added");
			}
		}



	}
}
