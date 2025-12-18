import { Link } from "react-router-dom";
import {
    Briefcase,
    MapPin,
    Clock,
    DollarSign,
    Users,
    Heart,
    Rocket,
    Coffee,
    BookOpen,
    Award,
    ArrowRight,
    CheckCircle
} from "lucide-react";

export default function CareersPage() {
    const benefits = [
        { icon: <DollarSign className="text-primary" size={24} />, title: "Competitive Salary", description: "Industry-leading compensation packages" },
        { icon: <Heart className="text-primary" size={24} />, title: "Health Insurance", description: "Comprehensive health coverage for you and family" },
        { icon: <BookOpen className="text-primary" size={24} />, title: "Learning Budget", description: "Annual budget for courses and conferences" },
        { icon: <Coffee className="text-primary" size={24} />, title: "Flexible Hours", description: "Work when you're most productive" },
        { icon: <Rocket className="text-primary" size={24} />, title: "Growth Path", description: "Clear career progression opportunities" },
        { icon: <Users className="text-primary" size={24} />, title: "Great Team", description: "Work with passionate professionals" },
    ];

    const openings = [
        {
            title: "Senior React Developer",
            department: "Engineering",
            location: "Remote / Bengaluru",
            type: "Full-time",
            salary: "₹18-25 LPA",
            description: "Build modern web applications and mentor junior developers."
        },
        {
            title: "Full Stack Instructor",
            department: "Education",
            location: "Bengaluru",
            type: "Full-time",
            salary: "₹12-18 LPA",
            description: "Teach MERN stack development to aspiring developers."
        },
        {
            title: "Content Writer",
            department: "Marketing",
            location: "Remote",
            type: "Part-time",
            salary: "₹5-8 LPA",
            description: "Create engaging technical content for blog and courses."
        },
        {
            title: "Student Success Manager",
            department: "Operations",
            location: "Bengaluru",
            type: "Full-time",
            salary: "₹6-10 LPA",
            description: "Help students achieve their learning and career goals."
        },
        {
            title: "DevOps Engineer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            salary: "₹15-22 LPA",
            description: "Manage cloud infrastructure and CI/CD pipelines."
        },
        {
            title: "UI/UX Designer",
            department: "Design",
            location: "Remote / Bengaluru",
            type: "Full-time",
            salary: "₹10-16 LPA",
            description: "Design beautiful and intuitive user experiences."
        },
    ];

    const values = [
        "We believe in continuous learning and growth",
        "We value diversity and inclusion",
        "We encourage work-life balance",
        "We celebrate creativity and innovation",
        "We support open communication",
        "We reward excellence and initiative"
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
                            CAREERS
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-black mb-6 gradient-text leading-tight">
                            Join Our Mission
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            Help us empower the next generation of developers. We're looking for
                            passionate people who want to make a difference in tech education.
                        </p>
                        <a href="#openings" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition transform hover:scale-105">
                            View Open Positions <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black gradient-text mb-4">Why Work With Us?</h2>
                    <p className="text-xl text-gray-400">Perks and benefits that make a difference</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="glass-card p-6 hover:border-primary/50 transition group">
                            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                            <p className="text-gray-400">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Culture Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-black gradient-text mb-6">Our Culture</h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            At SeedCode Academy, we foster an environment where creativity thrives
                            and every team member's voice is heard. We believe that diverse perspectives
                            lead to better solutions and a more inclusive learning experience for our students.
                        </p>
                        <div className="space-y-4">
                            {values.map((value, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                                    <span className="text-gray-300">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="glass-card p-8 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10"></div>
                        <div className="relative z-10 text-center">
                            <div className="text-8xl mb-6">🚀</div>
                            <h3 className="text-2xl font-bold mb-4">Ready to Launch?</h3>
                            <p className="text-gray-400">
                                Join a team that's shaping the future of tech education.
                                Your ideas matter here.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Open Positions */}
            <div id="openings" className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black gradient-text mb-4">Open Positions</h2>
                    <p className="text-xl text-gray-400">Find your perfect role at SeedCode Academy</p>
                </div>
                <div className="space-y-4">
                    {/* {openings.map((job, index) => (
                        <div key={index} className="glass-card p-6 hover:border-primary/50 transition group">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Briefcase className="text-primary" size={20} />
                                        <span className="text-sm text-primary font-semibold">{job.department}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition">{job.title}</h3>
                                    <p className="text-gray-400 mb-4">{job.description}</p>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                        <span className="flex items-center gap-1">
                                            <MapPin size={16} /> {job.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock size={16} /> {job.type}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <DollarSign size={16} /> {job.salary}
                                        </span>
                                    </div>
                                </div>
                                <button className="px-6 py-3 bg-gradient-to-r from-primary to-primary-dark rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition flex items-center gap-2">
                                    Apply Now <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    ))} */}
                    <div className="text-center text-gray-400">THere is no job opening</div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="glass-card p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl font-black mb-4 gradient-text">Don't See Your Role?</h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                            We're always looking for talented people. Send us your resume and we'll reach out when a relevant position opens up.
                        </p>
                        <Link to="/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition transform hover:scale-105">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
