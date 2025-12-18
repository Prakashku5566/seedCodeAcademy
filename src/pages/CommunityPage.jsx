import { Link } from "react-router-dom";
import {
    Users,
    MessageSquare,
    Github,
    Linkedin,
    Twitter,
    Youtube,
    Calendar,
    Trophy,
    Heart,
    ArrowRight,
    ExternalLink,
    Star
} from "lucide-react";

export default function CommunityPage() {
    const stats = [
        { number: "5000+", label: "Active Members" },
        { number: "200+", label: "Daily Discussions" },
        { number: "50+", label: "Weekly Events" },
        { number: "100+", label: "Projects Shared" },
    ];

    const channels = [
        {
            name: "Discord Server",
            description: "Join live discussions, get help, and connect with fellow learners",
            members: "3,500+ members",
            icon: <MessageSquare className="text-primary" size={24} />,
            link: "#",
            color: "from-indigo-500/20"
        },
        {
            name: "GitHub Organization",
            description: "Contribute to open source projects and showcase your work",
            members: "1,200+ contributors",
            icon: <Github className="text-primary" size={24} />,
            link: "#",
            color: "from-gray-500/20"
        },
        {
            name: "LinkedIn Group",
            description: "Professional networking and career opportunities",
            members: "2,000+ professionals",
            icon: <Linkedin className="text-primary" size={24} />,
            link: "#",
            color: "from-blue-500/20"
        },
        {
            name: "YouTube Channel",
            description: "Free tutorials, live coding sessions, and tech talks",
            members: "15K+ subscribers",
            icon: <Youtube className="text-primary" size={24} />,
            link: "#",
            color: "from-red-500/20"
        },
    ];

    const events = [
        { title: "Weekly Code Review Session", day: "Every Saturday", time: "4:00 PM IST", type: "Live" },
        { title: "JavaScript Deep Dive", day: "Dec 20, 2025", time: "6:00 PM IST", type: "Workshop" },
        { title: "Mock Interview Practice", day: "Dec 22, 2025", time: "5:00 PM IST", type: "Session" },
        { title: "Project Showcase", day: "Dec 25, 2025", time: "3:00 PM IST", type: "Event" },
    ];

    const topContributors = [
        { name: "Arjun K.", contributions: 156, badge: "🏆" },
        { name: "Priya S.", contributions: 142, badge: "🥈" },
        { name: "Rahul V.", contributions: 128, badge: "🥉" },
        { name: "Sneha P.", contributions: 98, badge: "⭐" },
        { name: "Amit T.", contributions: 87, badge: "⭐" },
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
                            COMMUNITY
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-black mb-6 gradient-text leading-tight">
                            Learn Together, Grow Together
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            Join a vibrant community of developers helping each other succeed.
                            Share knowledge, collaborate on projects, and build lasting connections.
                        </p>
                        <a href="#" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition transform hover:scale-105">
                            Join Discord <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="glass-card p-6 text-center hover:border-primary/50 transition">
                            <div className="text-4xl font-black gradient-text mb-2">{stat.number}</div>
                            <div className="text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Community Channels */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-black gradient-text mb-8">Join Our Channels</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {channels.map((channel, index) => (
                        <a key={index} href={channel.link} className="glass-card p-6 hover:border-primary/50 transition group block">
                            <div className={`absolute inset-0 bg-gradient-to-br ${channel.color} to-transparent opacity-0 group-hover:opacity-100 transition rounded-2xl`}></div>
                            <div className="relative z-10 flex items-start gap-4">
                                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition">
                                    {channel.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-xl font-bold group-hover:text-primary transition">{channel.name}</h3>
                                        <ExternalLink size={16} className="text-gray-500" />
                                    </div>
                                    <p className="text-gray-400 mb-2">{channel.description}</p>
                                    <span className="text-sm text-primary font-semibold">{channel.members}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Events & Contributors */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Upcoming Events */}
                    <div className="glass-card p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <Calendar className="text-primary" size={24} />
                            <h3 className="text-2xl font-bold">Upcoming Events</h3>
                        </div>
                        <div className="space-y-4">
                            {events.map((event, index) => (
                                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition">
                                    <div>
                                        <h4 className="font-semibold mb-1">{event.title}</h4>
                                        <p className="text-sm text-gray-400">{event.day} • {event.time}</p>
                                    </div>
                                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                                        {event.type}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <a href="#" className="mt-6 flex items-center justify-center gap-2 text-primary font-semibold hover:underline">
                            View all events <ArrowRight size={16} />
                        </a>
                    </div>

                    {/* Top Contributors */}
                    <div className="glass-card p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <Trophy className="text-primary" size={24} />
                            <h3 className="text-2xl font-bold">Top Contributors</h3>
                        </div>
                        <div className="space-y-4">
                            {topContributors.map((contributor, index) => (
                                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">{contributor.badge}</span>
                                        <div>
                                            <h4 className="font-semibold">{contributor.name}</h4>
                                            <p className="text-sm text-gray-400">{contributor.contributions} contributions</p>
                                        </div>
                                    </div>
                                    <Star className="text-yellow-500" size={20} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="glass-card p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10"></div>
                    <div className="relative z-10">
                        <Heart className="text-primary mx-auto mb-4" size={48} />
                        <h2 className="text-4xl font-black mb-4 gradient-text">Be Part of Something Amazing</h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                            Our community is built on collaboration, support, and shared growth. Every voice matters here.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#" className="px-10 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition transform hover:scale-105">
                                Join Discord
                            </a>
                            <Link to="/contact" className="px-10 py-4 glass-card hover:bg-white/10 rounded-full font-bold text-lg transition">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
