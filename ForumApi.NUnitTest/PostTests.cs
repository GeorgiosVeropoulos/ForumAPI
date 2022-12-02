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

		public void TestTheAdditionOfaPostInTheList()
		{
			var post = new Post(1, 1, 0, "test1", "test1.1");


		}
	}
}