import { Link } from "react-router-dom";
import {
    BookOpen,
    Code,
    Terminal,
    FileText,
    Video,
    Download,
    ExternalLink,
    ChevronRight,
    Search,
    Zap
} from "lucide-react";

export default function DocumentationPage() {
    const categories = [
        {
            title: "Getting Started",
            icon: <Zap className="text-primary" size={24} />,
            description: "Quick start guides to begin your learning journey",
            docs: [
                { title: "Platform Overview", time: "5 min read" },
                { title: "Setting Up Your Environment", time: "10 min read" },
                { title: "Your First Project", time: "15 min read" },
                { title: "Course Navigation Guide", time: "5 min read" },
            ]
        },
        {
            title: "HTML & CSS",
            icon: <Code className="text-primary" size={24} />,
            description: "Foundation of web development",
            docs: [
                { title: "HTML5 Semantic Elements", time: "8 min read" },
                { title: "CSS Flexbox Complete Guide", time: "12 min read" },
                { title: "CSS Grid Layout", time: "15 min read" },
                { title: "Responsive Design Patterns", time: "10 min read" },
            ]
        },
        {
            title: "JavaScript",
            icon: <Terminal className="text-primary" size={24} />,
            description: "Core programming concepts and ES6+",
            docs: [
                { title: "JavaScript Fundamentals", time: "20 min read" },
                { title: "ES6+ Features", time: "15 min read" },
                { title: "Async/Await & Promises", time: "12 min read" },
                { title: "DOM Manipulation", time: "10 min read" },
            ]
        },
        {
            title: "React.js",
            icon: <Code className="text-primary" size={24} />,
            description: "Building modern user interfaces",
            docs: [
                { title: "React Components & JSX", time: "10 min read" },
                { title: "Hooks Deep Dive", time: "18 min read" },
                { title: "State Management", time: "15 min read" },
                { title: "React Router", time: "12 min read" },
            ]
        },
        {
            title: "Node.js & Express",
            icon: <Terminal className="text-primary" size={24} />,
            description: "Backend development essentials",
            docs: [
                { title: "Node.js Basics", time: "15 min read" },
                { title: "Express Framework", time: "12 min read" },
                { title: "RESTful API Design", time: "18 min read" },
                { title: "Middleware & Routing", time: "10 min read" },
            ]
        },
        {
            title: "Database",
            icon: <FileText className="text-primary" size={24} />,
            description: "MongoDB, SQL, and data management",
            docs: [
                { title: "MongoDB Fundamentals", time: "15 min read" },
                { title: "Mongoose ODM", time: "12 min read" },
                { title: "SQL Basics", time: "18 min read" },
                { title: "Database Design", time: "20 min read" },
            ]
        },
    ];

    const resources = [
        { icon: <Video size={20} />, title: "Video Tutorials", count: "200+ videos" },
        { icon: <FileText size={20} />, title: "Written Guides", count: "150+ articles" },
        { icon: <Download size={20} />, title: "Cheat Sheets", count: "50+ PDFs" },
        { icon: <Code size={20} />, title: "Code Examples", count: "500+ snippets" },
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
                            DOCUMENTATION
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-black mb-6 gradient-text leading-tight">
                            Learn & Reference
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            Comprehensive guides, tutorials, and references to help you master
                            web development. Everything you need in one place.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search documentation..."
                                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:outline-none text-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Resources */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {resources.map((resource, index) => (
                        <div key={index} className="glass-card p-6 text-center hover:border-primary/50 transition group cursor-pointer">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/30 transition text-primary">
                                {resource.icon}
                            </div>
                            <h3 className="font-bold mb-1">{resource.title}</h3>
                            <p className="text-sm text-gray-400">{resource.count}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Documentation Categories */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-black gradient-text mb-8">Browse by Topic</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <div key={index} className="glass-card overflow-hidden hover:border-primary/50 transition group">
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition">
                                        {category.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold group-hover:text-primary transition">{category.title}</h3>
                                        <p className="text-sm text-gray-400">{category.description}</p>
                                    </div>
                                </div>
                                <ul className="space-y-2">
                                    {category.docs.map((doc, i) => (
                                        <li key={i}>
                                            <a href="#" className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/5 transition group/item">
                                                <span className="flex items-center gap-2">
                                                    <ChevronRight size={16} className="text-primary" />
                                                    <span className="text-gray-300 group-hover/item:text-white">{doc.title}</span>
                                                </span>
                                                <span className="text-xs text-gray-500">{doc.time}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="px-6 py-4 bg-white/5 border-t border-white/10">
                                <a href="#" className="flex items-center justify-center gap-2 text-primary font-semibold hover:underline">
                                    View all <ExternalLink size={16} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="glass-card p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10"></div>
                    <div className="relative z-10">
                        <BookOpen className="text-primary mx-auto mb-4" size={48} />
                        <h2 className="text-4xl font-black mb-4 gradient-text">Can't Find What You Need?</h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                            Our support team is here to help. Reach out and we'll get you the answers you need.
                        </p>
                        <Link to="/support" className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition transform hover:scale-105">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
