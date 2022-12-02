using ForumAPI.Controllers;
using ForumAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace ForumApi.NUnitTest
{
	internal class ThreadTests
	{

		[SetUp]
		public void SetUp()
		{
			var config = new HttpGetAttribute();


		}


		[Test]
		public void Test_Thread_Id()
		{
			List<ForumThread> newlist = ForumThread.CreateDemoThreads();

			Assert.That(newlist[0].Id, Is.EqualTo(1));
			Assert.That(newlist[0].Name, Is.EqualTo("Cooking"));

		}
		[Test]
		public void Test_Thread_Name()
		{

			List<ForumThread> newlist = ForumThread.CreateDemoThreads();

			Assert.That(newlist[0].Name, Is.EqualTo("Cooking"));

		}

		[Test]
		public void Test_Thread_RetrieveAllThreads()
		{
			ThreadController controller = new ThreadController();


			Assert.IsNotNull(controller.RetreiveAllThreads());

		}

		[Test]
		public void Test_Thread_RetrievePostsByThreadIds()
		{
			ThreadController controller = new ThreadController();


			Assert.That(controller.RetrievePostsByThreadId(1), Is.EqualTo(Post.ReturnPostsWithThreadID(1)));

		}


		public void Test_URL()
		{
			HttpWebRequest request = (HttpWebRequest)WebRequest.Create("https://localhost:7185/api");


			//Assert.That(request.Method,)

		}
	}
}
