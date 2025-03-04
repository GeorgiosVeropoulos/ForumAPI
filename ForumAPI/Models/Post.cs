﻿namespace ForumAPI.Models
{

	public enum Category
	{
		Question,
		Suggestion,
		Clarification
	}

	public enum Status
	{
		ContainsProfanity,
		ContainsSpam,
		Ok
	}


	public class Post
	{
		public int Id { get; set; }

		public int ThreadId { get; set; }

		public Category PostCategory { get; set; }

		public string Title { get; set; }

		public string Content { get; set; }

		public static List<Post> newposts = CreateCookingPosts();

		public Post(int id, int threadId, Category postCategory, string title, string content)
		{
			Id = id;
			ThreadId = threadId;
			PostCategory = postCategory;
			Title = title;
			Content = content;
		}

		public static Status AddPost(Post post)
		{
			// Check if post already exists
			foreach(Post p in newposts)
			{
				if (p.Title == post.Title)
				{
					return Status.ContainsSpam;
				}
			}

			// Check if post contains profanity
			if(ContainsProfanity(post)) return Status.ContainsProfanity;

			newposts.Add(new Post(post.Id, post.ThreadId, post.PostCategory, post.Title, post.Content));
			return Status.Ok;
		}

		public static List<Post> ReturnPosts()
		{
			return newposts;
		}

		//public void Getcheckstatement()
		//{
		//	bool HasProfanity = containsProfanity(newposts[1]);
		//}

		public static bool ContainsProfanity(Post post)
		{
			string[] inStrArray = post.Content.Split(new char[] { ' ' });

			string[] words = profanityArray();

			foreach (string word in words)
			{
				foreach (string str in inStrArray)
					if (str.ToLower() == word.ToLower())
						return true;
			}
			return false;

		}
		private static string[] profanityArray()
		{
			string[] words = { "stupid", "bitch" };
			return words;
		}

		public static List<Post> ReturnPostsWithThreadID(int id)
		{
			List<Post> PostsWithSameThreadId = new List<Post>();
			for (int i = 0; i < newposts.Count(); i++)
			{
				if (newposts[i].ThreadId == id)
				{
					PostsWithSameThreadId.Add(newposts[i]);
				}
			}

			return PostsWithSameThreadId;
		}
		public static List<Post> CreateCookingPosts()
		{
			List<Post> posts = new List<Post>();
			posts.Add(new Post(1, 1, Category.Question, "How do I cook fish?", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat."));
			posts.Add(new Post(2, 1, Category.Suggestion, "How to cook fish", "Vel pharetra vel turpis nunc eget lorem dolor sed. Quam adipiscing vitae proin sagittis. Condimentum id venenatis a condimentum vitae sapien. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Arcu risus quis varius quam quisque id diam. Nisl tincidunt eget nullam non nisi est sit. Mattis molestie a iaculis at erat. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at."));
			posts.Add(new Post(3, 1, Category.Clarification, "Is this how you cook fish?", "Vel pharetra vel turpis nunc eget lorem dolor sed. Quam adipiscing vitae proin sagittis. Condimentum id venenatis a condimentum vitae sapien. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Arcu risus quis varius quam quisque id diam. Nisl tincidunt eget nullam non nisi est sit. Mattis molestie a iaculis at erat. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at."));
			return posts;
		}
	}
}
