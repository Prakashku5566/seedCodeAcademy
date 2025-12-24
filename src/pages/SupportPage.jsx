import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Headphones,
    Mail,
    MessageSquare,
    Phone,
    Clock,
    CheckCircle,
    Send,
    FileText,
    Video,
    BookOpen,
    ArrowRight
} from "lucide-react";

export default function SupportPage() {
    const [ticketForm, setTicketForm] = useState({
        name: "",
        email: "",
        category: "",
        priority: "",
        subject: "",
        description: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setTicketForm({ ...ticketForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setTicketForm({ name: "", email: "", category: "", priority: "", subject: "", description: "" });
    };

    const supportOptions = [
        {
            icon: <MessageSquare className="text-primary" size={28} />,
            title: "Live Chat",
            description: "Get instant help from our support team",
            availability: "Mon-Sat, 9AM-8PM IST",
            action: "Start Chat"
        },
        {
            icon: <Mail className="text-primary" size={28} />,
            title: "Email Support",
            description: "Send us a detailed message",
            availability: "Response within 24 hours",
            action: "Send Email"
        },
        {
            icon: <Phone className="text-primary" size={28} />,
            title: "Phone Support",
            description: "Speak directly with our team",
            availability: "Mon-Fri, 10AM-6PM IST",
            action: "Call Now"
        },
        {
            icon: <Video className="text-primary" size={28} />,
            title: "Schedule a Call",
            description: "Book a one-on-one session",
            availability: "Available slots daily",
            action: "Book Call"
        },
    ];

    const quickLinks = [
        { icon: <FileText size={20} />, title: "Getting Started Guide", link: "/documentation" },
        { icon: <BookOpen size={20} />, title: "FAQ", link: "/faq" },
        { icon: <MessageSquare size={20} />, title: "Community Forum", link: "/community" },
        { icon: <Video size={20} />, title: "Video Tutorials", link: "/documentation" },
    ];

    const categories = [
        "Account & Billing",
        "Course Access",
        "Technical Issues",
        "Certificate",
        "Refund Request",
        "Other"
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
                            SUPPORT
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-black mb-6 gradient-text leading-tight">
                            We're Here to Help
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Have questions or facing issues? Our support team is ready to assist you.
                            Choose your preferred way to reach us.
                        </p>
                    </div>
                </div>
            </div>

            {/* Support Options */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {supportOptions.map((option, index) => (
                        <div key={index} className="glass-card p-6 hover:border-primary/50 transition group text-center">
                            <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition">
                                {option.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                            <p className="text-gray-400 mb-3">{option.description}</p>
                            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
                                <Clock size={14} />
                                <span>{option.availability}</span>
                            </div>
                            <button className="w-full py-3 bg-gradient-to-r from-primary to-primary-dark rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition">
                                {option.action}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Links & Support Ticket */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Quick Links */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="glass-card p-6">
                            <h3 className="text-xl font-bold mb-4">Quick Help</h3>
                            <div className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <Link key={index} to={link.link} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition group">
                                        <span className="text-primary">{link.icon}</span>
                                        <span className="group-hover:text-primary transition">{link.title}</span>
                                        <ArrowRight size={16} className="ml-auto text-gray-500 group-hover:text-primary transition" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="glass-card p-6 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10"></div>
                            <div className="relative z-10">
                                <Headphones className="text-primary mb-4" size={32} />
                                <h3 className="text-xl font-bold mb-2">Need Urgent Help?</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    Our priority support line is available for critical issues.
                                </p>
                                <a href="tel:+918252540260" className="text-primary font-semibold hover:underline">
                                    +91 82525 40260
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Support Ticket Form */}
                    <div className="lg:col-span-2 glass-card p-8">
                        <h3 className="text-2xl font-bold mb-6">Submit a Support Ticket</h3>

                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                                <h4 className="text-2xl font-bold mb-2">Ticket Submitted!</h4>
                                <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={ticketForm.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={ticketForm.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Category</label>
                                        <select
                                            name="category"
                                            value={ticketForm.category}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none"
                                        >
                                            <option value="">Select category</option>
                                            {categories.map((cat, i) => (
                                                <option key={i} value={cat}>{cat}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Priority</label>
                                        <select
                                            name="priority"
                                            value={ticketForm.priority}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none"
                                        >
                                            <option value="">Select priority</option>
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
                                            <option value="high">High</option>
                                            <option value="urgent">Urgent</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={ticketForm.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none"
                                        placeholder="Brief description of your issue"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Description</label>
                                    <textarea
                                        name="description"
                                        value={ticketForm.description}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none resize-none"
                                        placeholder="Please describe your issue in detail..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition flex items-center justify-center gap-2"
                                >
                                    <Send size={20} /> Submit Ticket
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
