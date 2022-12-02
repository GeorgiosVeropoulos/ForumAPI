namespace ForumAPI.Models
{
	public class ForumThread
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public static List<ForumThread> threads = CreateDemoThreads();

		public ForumThread(int id, string name)
		{
			Id = id;
			Name = name;
		}

		public static List<ForumThread> GetAllThreads() {
			return threads;
		}

		public static List<ForumThread> CreateDemoThreads()
		{
			List<ForumThread> threads = new List<ForumThread>();
			threads.Add(new ForumThread(1, "Cooking"));
			threads.Add(new ForumThread(1, "Dancing"));
			return threads;
		}
	}
}
