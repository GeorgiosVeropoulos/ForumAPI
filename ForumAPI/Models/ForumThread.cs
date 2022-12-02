namespace ForumAPI.Models
{
	public class ForumThread
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public List<Post> Posts { get; set; }

		public ForumThread(int id, string name, List<Post> posts)
		{
			Id = id;
			Name = name;
			Posts = posts;
		}

		public static List<ForumThread> CreateDemoThreads()
		{
			List<ForumThread> threads = new List<ForumThread>();

			threads.Add(new ForumThread(1, "Cooking", Post.CreateCookingPosts()));

			return threads;
		}
	}
}
