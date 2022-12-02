using ForumAPI.Models;


namespace ForumApi.NUnitTest
{
	public class PostTests
	{


		[Test]
		public void Test_The_Id_Of_A_Post()
		{
			var post = new Post(1, 1, 0, "test1", "test1.1");


			Assert.That(post.Id, Is.EqualTo(1));
		}

		[Test]
		public void TestTheProfanityOfAPost()
		{
			var post = new Post(1, 1, 0, "test1", "bitch");

			bool profanity = Post.containsProfanity(post);

			Assert.IsTrue(profanity);

		}


	}
}