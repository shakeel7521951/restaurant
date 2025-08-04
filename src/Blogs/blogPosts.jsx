import { FaSearch, FaCalendarAlt, FaUser, FaTag, FaFolder } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const BlogGrid = () => {
    const navigate = useNavigate();
    const blogPosts = [
         {
            id: 1,
            title: "How to Make the Perfect Pizza at Home",
            except: "Learn the secrets to making restaurant-quality pizza in your own kitchen with our step-by-step guide.",
            date: "June 15, 2023",
            category: "Recipes",
            image: "blogImage/one.jpg",
            author: "Chef Maria"
        },
        {
            id: 2,
            title: "10 Essential Kitchen Tools Every Home Cook",
            except: "Discover the must-have tools that will make your cooking experience easier and more enjoyable.",
            date: "May 28, 2023",
            category: "Tips",
            image: "blogImage/two.jpg",
            author: "Chef John"
        },
        {
            id: 3,
            title: "The Health Benefits of Mediterranean Diet",
            except: "Explore why the Mediterranean diet is consistently ranked as one of the healthiest eating patterns and diet is regular.",
            date: "April 12, 2023",
            category: "Nutrition",
            image: "blogImage/three.jpg",
            author: "Nutritionist Sarah"
        },
        {
            id: 4,
            title: "Seasonal Ingredients: What to Cook This Summer",
            except: "Make the most of summer produce with these delicious and refreshing recipe ideas.",
            date: "July 3, 2023",
            category: "Seasonal",
            image: "blogImage/four.avif",
            author: "Chef Michael"
        },
        {
            id: 5,
            title: "Baking 101: Understanding Different Types of Flour",
            except: "A comprehensive guide to choosing the right flour for your baking projects.",
            date: "March 22, 2023",
            category: "Baking",
            image: "blogImage/five.jpg",
            author: "Baker Emily"
        },
        {
            id: 6,
            title: "Vegetarian Meal Prep Ideas for Busy Weekdays",
            except: "Save time or eat healthy with these simple vegetarian meal prep recipes.Working whole day make sure to relax proper meal.",
            date: "February 18, 2023",
            category: "Meal Prep",
            image: "blogImage/six.jpg",
            author: "Millen Evike"
        }
    ];


    const latestPosts = blogPosts.slice(0, 3);
    const categories = [
        { name: "Recipes", count: 12 },
        { name: "Tips", count: 8 },
    ];

    const tags = ["Italian", "Vegetarian", "Quick Meals", "Healthy"];

    const Navigate = (post) => {
        navigate(`/blogDetail/${post.id}`, { state:post});
        console.log({state:post})
    };

    return (
        <div className="container flex flex-col lg:flex-row mx-auto px-4 py-16 gap-8">
            <div className="w-full lg:w-8/12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map(post => (
                        <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                            <div className="relative">
                                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded text-sm font-medium">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-gray-500 text-sm mb-3">
                                    <span className="flex items-center mr-3">
                                        <FaCalendarAlt className="mr-1" /> {post.date}
                                    </span>
                                    <span className="flex items-center">
                                        <FaUser className="mr-1" /> {post.author}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 hover:text-red-500">
                                    <a href="#">{post.title}</a>
                                </h3>
                                <p className="text-gray-600 mb-4">{post.except}</p>
                                <Link onClick={() => Navigate(post)} className="text-red-500 font-medium hover:text-red-600">
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-4/12 space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <FaSearch className="mr-2" /> Search
                    </h2>
                    <div className="flex">
                        <input type="text" className="w-full px-4 py-2 border rounded-l-lg" placeholder="Search by category..." />
                        <button className="bg-red-500 text-white px-4 py-2 rounded-r-lg">
                            <FaSearch />
                        </button>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Latest Posts</h2>
                    {latestPosts.map(post => (
                        <div key={post.id} className="flex items-center space-x-4 mb-4">
                            <img src={post.image} className="w-16 h-16 object-cover rounded" alt={post.title} />
                            <div>
                                <h4 className="font-medium hover:text-red-500">{post.title}</h4>
                                <p className="text-sm text-gray-500 flex items-center">
                                    <FaCalendarAlt className="mr-1" /> {post.date}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <FaFolder className="mr-2" /> Categories
                    </h2>
                    <ul>
                        {categories.map((cat, i) => (
                            <li key={i} className="flex justify-between hover:text-red-500">
                                <a href="#">{cat.name}</a>
                                <span className="text-sm bg-gray-200 px-2 rounded-full">{cat.count}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <FaTag className="mr-2" /> Tags
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, i) => (
                            <a key={i} href="#" className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-red-500 hover:text-white">
                                {tag}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogGrid;