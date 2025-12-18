import { Link } from "react-router-dom";
import {
    Calendar,
    Clock,
    User,
    ArrowRight,
    Tag,
    TrendingUp,
    BookOpen
} from "lucide-react";

export default function BlogPage() {
    const featuredPost = {
        id: 1,
        title: "The Complete Roadmap to Becoming a Full Stack Developer in 2025",
        excerpt: "A comprehensive guide covering everything you need to know to start your journey as a full stack developer, from choosing the right technologies to landing your first job.",
        author: "Prakash Kumar",
        date: "December 15, 2025",
        readTime: "12 min read",
        category: "Career Guide",
        image: "🚀"
    };

    const posts = [
        {
            id: 2,
            title: "React vs Vue vs Angular: Which Framework Should You Learn?",
            excerpt: "A detailed comparison of the three most popular JavaScript frameworks to help you make an informed decision.",
            author: "Priya Sharma",
            date: "December 10, 2025",
            readTime: "8 min read",
            category: "JavaScript",
            image: "⚛️"
        },
        {
            id: 3,
            title: "10 Projects to Build Your Developer Portfolio",
            excerpt: "Stand out from the crowd with these impressive project ideas that showcase your skills to potential employers.",
            author: "Rahul Verma",
            date: "December 5, 2025",
            readTime: "10 min read",
            category: "Projects",
            image: "💼"
        },
        {
            id: 4,
            title: "Understanding REST APIs: A Beginner's Guide",
            excerpt: "Learn the fundamentals of REST APIs, HTTP methods, and how to integrate external APIs in your applications.",
            author: "Sneha Patel",
            date: "November 28, 2025",
            readTime: "7 min read",
            category: "Backend",
            image: "🔗"
        },
        {
            id: 5,
            title: "CSS Grid vs Flexbox: When to Use Which?",
            excerpt: "Master the art of CSS layouts by understanding the strengths and use cases of Grid and Flexbox.",
            author: "Prakash Kumar",
            date: "November 20, 2025",
            readTime: "6 min read",
            category: "CSS",
            image: "🎨"
        },
        {
            id: 6,
            title: "Git & GitHub Best Practices for Beginners",
            excerpt: "Essential version control practices every developer should know to collaborate effectively.",
            author: "Rahul Verma",
            date: "November 15, 2025",
            readTime: "9 min read",
            category: "Tools",
            image: "📦"
        },
        {
            id: 7,
            title: "How to Ace Your Technical Interview",
            excerpt: "Tips and strategies from industry experts on cracking coding interviews at top tech companies.",
            author: "Priya Sharma",
            date: "November 10, 2025",
            readTime: "11 min read",
            category: "Career Guide",
            image: "🎯"
        },
    ];

    const categories = [
        { name: "All Posts", count: 24 },
        { name: "JavaScript", count: 8 },
        { name: "Career Guide", count: 5 },
        { name: "React", count: 4 },
        { name: "Backend", count: 3 },
        { name: "CSS", count: 2 },
        { name: "Tools", count: 2 },
    ];

    const trendingTopics = [
        "React 19 Features",
        "Node.js Best Practices",
        "TypeScript Tips",
        "System Design",
        "Docker Basics",
        "Interview Prep"
    ];

    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/10"></div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <span className="px-4 py-2 bg-primary/20 text-primary rounded-full font-semibold text-sm inline-block mb-6">
                            BLOG
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-black mb-6 gradient-text leading-tight">
                            Developer Insights
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Tutorials, guides, and industry insights to help you become a better developer.
                            Learn from experienced professionals and stay ahead in your career.
                        </p>
                    </div>
                </div>
            </div>

            {/* Featured Post */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="glass-card overflow-hidden hover:border-primary/50 transition group">
                    <div className="grid lg:grid-cols-2 gap-0">
                        <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 p-12 flex items-center justify-center">
                            <span className="text-9xl group-hover:scale-110 transition-transform">{featuredPost.image}</span>
                        </div>
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                                    Featured
                                </span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                                    {featuredPost.category}
                                </span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-primary transition">
                                {featuredPost.title}
                            </h2>
                            <p className="text-gray-400 text-lg mb-6">{featuredPost.excerpt}</p>
                            <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                                <span className="flex items-center gap-2">
                                    <User size={16} /> {featuredPost.author}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Calendar size={16} /> {featuredPost.date}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock size={16} /> {featuredPost.readTime}
                                </span>
                            </div>
                            <button className="self-start px-6 py-3 bg-gradient-to-r from-primary to-primary-dark rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition">
                                Read Article <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Categories */}
                        <div className="glass-card p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Tag className="text-primary" size={20} /> Categories
                            </h3>
                            <ul className="space-y-2">
                                {categories.map((cat, index) => (
                                    <li key={index}>
                                        <button className="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/5 transition text-left">
                                            <span className={index === 0 ? 'text-primary font-semibold' : 'text-gray-400'}>{cat.name}</span>
                                            <span className="text-sm text-gray-500">{cat.count}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Trending Topics */}
                        <div className="glass-card p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <TrendingUp className="text-primary" size={20} /> Trending
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {trendingTopics.map((topic, index) => (
                                    <span key={index} className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-primary/20 hover:text-primary transition cursor-pointer">
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="glass-card p-6 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10"></div>
                            <div className="relative z-10">
                                <BookOpen className="text-primary mb-4" size={32} />
                                <h3 className="text-xl font-bold mb-2">Newsletter</h3>
                                <p className="text-gray-400 text-sm mb-4">Get weekly developer tips straight to your inbox.</p>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg mb-3 focus:border-primary focus:outline-none"
                                />
                                <button className="w-full py-2 bg-gradient-to-r from-primary to-primary-dark rounded-lg font-semibold hover:shadow-lg transition">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Posts Grid */}
                    <div className="lg:col-span-3">
                        <div className="grid md:grid-cols-2 gap-6">
                            {posts.map((post) => (
                                <article key={post.id} className="glass-card overflow-hidden hover:border-primary/50 transition group">
                                    <div className="h-40 bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center">
                                        <span className="text-6xl group-hover:scale-110 transition-transform">{post.image}</span>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs font-semibold">
                                                {post.category}
                                            </span>
                                            <span className="text-xs text-gray-500">{post.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            <span className="flex items-center gap-2">
                                                <User size={14} /> {post.author}
                                            </span>
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Load More */}
                        <div className="text-center mt-12">
                            <button className="px-8 py-4 glass-card hover:bg-white/10 font-semibold transition">
                                Load More Articles
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="glass-card p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl font-black mb-4 gradient-text">Want to Contribute?</h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                            Share your knowledge with our community. We're always looking for guest writers!
                        </p>
                        <Link to="/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition transform hover:scale-105">
                            Submit an Article
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
