import { Link } from "react-router-dom";
import {
    Users,
    Target,
    Award,
    Heart,
    Rocket,
    Globe,
    CheckCircle,
    Star,
    BookOpen,
    Code
} from "lucide-react";

export default function AboutPage() {
    const stats = [
        { number: "5000+", label: "Students Trained" },
        { number: "95%", label: "Placement Rate" },
        { number: "50+", label: "Industry Partners" },
        { number: "4.9/5", label: "Student Rating" },
    ];

    const values = [
        {
            icon: <Target className="text-primary" size={32} />,
            title: "Mission-Driven",
            description: "We're committed to making quality tech education accessible to everyone, regardless of their background."
        },
        {
            icon: <Heart className="text-primary" size={32} />,
            title: "Student-First",
            description: "Every decision we make is centered around what's best for our students' learning and career growth."
        },
        {
            icon: <Rocket className="text-primary" size={32} />,
            title: "Industry-Ready",
            description: "Our curriculum is designed with input from industry experts to ensure you're job-ready from day one."
        },
        {
            icon: <Globe className="text-primary" size={32} />,
            title: "Community-Focused",
            description: "Join a thriving community of developers who support each other's growth and success."
        },
    ];

    const team = [
        { name: "Prakash Kumar", role: "Founder & CEO", emoji: "👨‍💻" },
        { name: "Priya Sharma", role: "Head of Curriculum", emoji: "👩‍🏫" },
        { name: "Rahul Verma", role: "Lead Instructor", emoji: "👨‍🎓" },
        { name: "Sneha Patel", role: "Student Success", emoji: "🎯" },
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
                            ABOUT US
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-black mb-6 gradient-text leading-tight">
                            Empowering Developers Since 2020
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            SeedCode Academy was founded with a simple mission: to bridge the gap between
                            theoretical knowledge and practical skills in software development. We believe
                            everyone deserves access to world-class tech education.
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="glass-card p-8 text-center hover:border-primary/50 transition group">
                            <div className="text-4xl lg:text-5xl font-black gradient-text mb-2 group-hover:scale-110 transition-transform">
                                {stat.number}
                            </div>
                            <div className="text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Our Story */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-black mb-6 gradient-text">Our Story</h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                SeedCode Academy started as a small initiative in 2020, when our founder
                                noticed a significant gap between what colleges taught and what the industry
                                actually needed. Fresh graduates were struggling to find jobs not because
                                they lacked potential, but because they lacked practical, industry-relevant skills.
                            </p>
                            <p>
                                We began with just 10 students and a vision to create developers who could
                                contribute to real projects from day one. Today, we've grown to train over
                                5,000 students, with a 95% placement rate in top tech companies.
                            </p>
                            <p>
                                Our approach is simple: learn by building. Every course includes hands-on
                                projects that mirror real-world scenarios, mentorship from industry experts,
                                and a supportive community that grows together.
                            </p>
                        </div>
                    </div>
                    <div className="glass-card p-8 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10"></div>
                        <div className="relative z-10 text-center">
                            <div className="text-8xl mb-6">🌱</div>
                            <h3 className="text-2xl font-bold mb-4">From Seed to Success</h3>
                            <p className="text-gray-400">
                                Every great developer starts as a seed. We provide the environment,
                                resources, and nurturing needed to help you grow into a thriving tech professional.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Values */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black gradient-text mb-4">Our Values</h2>
                    <p className="text-xl text-gray-400">The principles that guide everything we do</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <div key={index} className="glass-card p-6 hover:border-primary/50 transition group">
                            <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                            <p className="text-gray-400">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black gradient-text mb-4">Meet Our Team</h2>
                    <p className="text-xl text-gray-400">The passionate people behind SeedCode Academy</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <div key={index} className="glass-card p-6 text-center hover:border-primary/50 transition group">
                            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{member.emoji}</div>
                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                            <p className="text-primary">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="glass-card p-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl font-black gradient-text mb-8 text-center">Why Choose SeedCode?</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                "Industry-aligned curriculum updated quarterly",
                                "1:1 mentorship from experienced developers",
                                "Real projects for your portfolio",
                                "Lifetime access to course materials",
                                "Dedicated placement assistance",
                                "Active alumni network of 5000+ developers"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="text-primary flex-shrink-0" size={24} />
                                    <span className="text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center">
                    <h2 className="text-4xl font-black mb-4 gradient-text">Ready to Start Your Journey?</h2>
                    <p className="text-xl text-gray-400 mb-8">Join thousands of students who transformed their careers with us</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/#courses" className="px-10 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition transform hover:scale-105">
                            Explore Courses
                        </Link>
                        <Link to="/contact" className="px-10 py-4 glass-card hover:bg-white/10 rounded-full font-bold text-lg transition">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
