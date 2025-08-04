import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaCalendarAlt, FaUser, FaComment } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "How to Make the Perfect Pizza at Home",
      excerpt: "Learn the secrets to making restaurant-quality pizza in your own kitchen with our step-by-step guide.",
      date: "June 15, 2023",
      category: "Recipes",
      image: "/blogImage/one.jpg",
      author: "Chef Maria"
    },
    {
      id: 2,
      title: "10 Essential Kitchen Tools Every Home Cook",
      excerpt: "Discover the must-have tools that will make your cooking experience easier and more enjoyable.",
      date: "May 28, 2023",
      category: "Tips",
      image: "/blogImage/two.jpg",
      author: "Chef John"
    },
    {
      id: 3,
      title: "The Health Benefits of Mediterranean Diet",
      excerpt: "Explore why the Mediterranean diet is consistently ranked as one of the healthiest eating patterns and diet is regular.",
      date: "April 12, 2023",
      category: "Nutrition",
      image: "/blogImage/three.jpg",
      author: "Nutritionist Sarah"
    },
    {
      id: 4,
      title: "Seasonal Ingredients: What to Cook This Summer",
      excerpt: "Make the most of summer produce with these delicious and refreshing recipe ideas.",
      date: "July 3, 2023",
      category: "Seasonal",
      image: "/blogImage/four.avif",
      author: "Chef Michael"
    },
    {
      id: 5,
      title: "Baking 101: Understanding Different Types of Flour",
      excerpt: "A comprehensive guide to choosing the right flour for your baking projects.",
      date: "March 22, 2023",
      category: "Baking",
      image: "/blogImage/five.jpg",
      author: "Baker Emily"
    },
    {
      id: 6,
      title: "Vegetarian Meal Prep Ideas for Busy Weekdays",
      excerpt: "Save time or eat healthy with these simple vegetarian meal prep recipes.Working whole day make sure to relax proper meal.",
      date: "February 18, 2023",
      category: "Meal Prep",
      image: "/blogImage/six.jpg",
      author: "Millen Evike"
    }
  ];

  const blgpost = blogPosts.find(item => item.id === Number(id));

  useEffect(() => {
    if (!blgpost) {
      navigate("/blogs");
    }
  }, [blgpost, navigate]);

  if (!blgpost) return null;

  const { title, excerpt, category, image, author, date } = blgpost;

  const relatedPosts = blogPosts.slice(0, 2);
  const tags = ["Business", "Delivery", "Food", "Online", "Online Food"];

  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handle = (e) => {
    e.preventDefault();
    if (comment.trim() === "") return;

    const newComment = {
      text: comment,
      date: new Date().toLocaleDateString(),
      likes: 0,
    };

    setCommentsList(prev => [newComment, ...prev]);
    setComment("");
  };

  const handleLike = (index) => {
    setCommentsList(prev =>
      prev.map((cmt, i) =>
        i === index ? { ...cmt, likes: cmt.likes + 1 } : cmt
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 lg:flex gap-8 font-sans">
      {/* Main Content */}
      <div className="w-full lg:w-8/12">
        {/* Breadcrumb */}
        <div className="bg-pink-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-2">Post Details</h3>
          <p className="text-sm text-gray-500">
            <Link to="/blogs">Blogs</Link> / <span className="text-pink-600">{title}</span>
          </p>
        </div>

        {/* Blog Title & Meta */}
        <div className="mb-6">
          <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 text-sm font-semibold rounded-full mb-4">{category}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-1"><FaUser /> {author}</span>
            <span className="flex items-center gap-1"><FaCalendarAlt /> {date}</span>
            <span className="flex items-center gap-1"><FaComment /> {commentsList.length} Comments</span>
          </div>
        </div>

        {/* Featured Image */}
        <img src={image} alt={title} className="rounded-lg mb-6" />

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>{excerpt}</p>
          <p>Lorem ipsum dolor sit amet consectetur. Habitasse metus urna nam nunc prain quis dignissim.</p>
          <blockquote className="border-l-4 border-pink-500 pl-4 text-pink-600 italic">
            “The wise man popularised in the 160s with the release circum stances any occur in which toil and pain can procure him some great pleasure.”
          </blockquote>
          <h2 className="text-2xl font-semibold text-gray-900">Discover great stuff & services</h2>
          <ul className="grid grid-cols-2 list-disc pl-6 gap-2">
            <li>Etiam porta sem malesuada euismod.</li>
            <li>Porta sem area Product.</li>
            <li>Service sem porta sem malesuada</li>
            <li>Etiam porta sem malesuada euismod.</li>
          </ul>
        </div>

        {/* Comment Form */}
        <div className="mt-12 border rounded-lg p-6 bg-white">
          <h3 className="text-2xl font-semibold mb-4">Leave a Reply</h3>
          <form className="space-y-4">
            <textarea
              onChange={handleChange}
              value={comment}
              rows="5"
              className="w-full border rounded-lg p-4"
              placeholder="Comment*"
            />
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="border" />
              Save my info for next time
            </label>
            <button onClick={handle} type="submit" className="bg-pink-600 text-white px-6 py-3 rounded-lg">
              See More
            </button>
          </form>
        </div>

        {/* Comments */}
        <div className="my-6 p-3 rounded-md">
  <h1 className="font-bold text-xl mb-4">Recent Comments:</h1>
  {commentsList.map((cmt, index) => (
    <div
      key={index}
      className="border-b pb-4 mb-4"
    >
      <div className="flex justify-between items-start">
        <p className="text-gray-800 w-10/12">{cmt.text}</p>
        <span className="text-sm text-gray-500">{cmt.date}</span>
      </div>
      <div className="mt-2">
        <button
          onClick={() => handleLike(index)}
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-red-600"
        >
          <CiHeart className="text-xl" />
          {cmt.likes} likes
        </button>
      </div>
    </div>
  ))}
</div>

      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-4/12 mt-12 lg:mt-0">
        <div className="space-y-8 sticky top-10">
          {/* Search */}
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-4">Search</h3>
            <div className="flex">
              <input type="text" className="flex-1 p-3 border rounded-l-lg" placeholder="Search here..." />
              <button className="bg-pink-600 text-white px-4 rounded-r-lg">Search</button>
            </div>
          </div>

          {/* Related Posts */}
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-4">Latest Posts</h3>
            <ul className="space-y-4">
              {relatedPosts.map((post, idx) => (
                <li key={idx} className="flex gap-3">
                  <img src={post.image} className="w-16 h-16 object-cover rounded" alt={post.title} />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{post.title}</p>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span key={tag} className="bg-gray-100 text-sm px-3 py-1 rounded-full hover:bg-pink-600 hover:text-white transition">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
