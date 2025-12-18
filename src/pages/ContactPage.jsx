import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageSquare,
    Linkedin,
    Twitter,
    Instagram,
    Youtube,
    CheckCircle
} from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    };

    const contactInfo = [
        {
            icon: <Mail className="text-primary" size={24} />,
            title: "Email Us",
            value: "hello@seedcode.academy",
            link: "mailto:hello@seedcode.academy"
        },
        {
            icon: <Phone className="text-primary" size={24} />,
            title: "Call Us",
            value: "+91 98765 43210",
            link: "tel:+919876543210"
        },
        {
            icon: <MapPin className="text-primary" size={24} />,
            title: "Visit Us",
            value: "Bengaluru, Karnataka, India",
            link: "#"
        },
        {
            icon: <Clock className="text-primary" size={24} />,
            title: "Office Hours",
            value: "Mon - Sat: 9AM - 8PM",
            link: "#"
        }
    ];

    const socials = [
        { icon: <Linkedin size={24} />, name: "LinkedIn", link: "#" },
        { icon: <Twitter size={24} />, name: "Twitter", link: "#" },
        { icon: <Instagram size={24} />, name: "Instagram", link: "#" },
        { icon: <Youtube size={24} />, name: "YouTube", link: "#" },
    ];

    const faqs = [
        {
            question: "How do I enroll in a course?",
            answer: "Simply browse our courses, select the one you want, and click 'Enroll Now'. You can pay online and get instant access."
        },
        {
            question: "Do you offer placement assistance?",
            answer: "Yes! All our courses include dedicated placement assistance with resume building, mock interviews, and job referrals."
        },
        {
            question: "Can I get a refund if I'm not satisfied?",
            answer: "We offer a 7-day money-back guarantee. If you're not satisfied within the first week, you can request a full refund."
        },
        {
            question: "Are the courses suitable for beginners?",
            answer: "Absolutely! Our courses are designed to take you from zero to job-ready, regardless of your prior experience."
        }
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
                            CONTACT US
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-black mb-6 gradient-text leading-tight">
                            Let's Connect
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Have questions about our courses? Want to partner with us?
                            Or just want to say hello? We'd love to hear from you!
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Info Cards */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactInfo.map((info, index) => (
                        <a
                            key={index}
                            href={info.link}
                            className="glass-card p-6 hover:border-primary/50 transition group text-center"
                        >
                            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition">
                                {info.icon}
                            </div>
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            <p className="text-gray-400">{info.value}</p>
                        </a>
                    ))}
                </div>
            </div>

            {/* Contact Form & Map */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="glass-card p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <MessageSquare className="text-primary" size={28} />
                            <h2 className="text-2xl font-bold">Send us a Message</h2>
                        </div>

                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
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
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Subject</label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition"
                                        >
                                            <option value="">Select a topic</option>
                                            <option value="courses">Course Inquiry</option>
                                            <option value="support">Technical Support</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="careers">Careers</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Your Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition resize-none"
                                        placeholder="Tell us how we can help you..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition flex items-center justify-center gap-2"
                                >
                                    <Send size={20} /> Send Message
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Map & Social */}
                    <div className="space-y-6">
                        {/* Map Placeholder */}
                        <div className="glass-card p-8 h-64 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10"></div>
                            <div className="relative z-10 text-center">
                                <MapPin className="text-primary mx-auto mb-4" size={48} />
                                <h3 className="text-xl font-bold mb-2">Our Location</h3>
                                <p className="text-gray-400">
                                    123 Tech Park, Koramangala<br />
                                    Bengaluru, Karnataka 560095
                                </p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="glass-card p-8">
                            <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {socials.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.link}
                                        className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-primary/20 transition group"
                                    >
                                        <span className="text-gray-400 group-hover:text-primary transition">
                                            {social.icon}
                                        </span>
                                        <span>{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black gradient-text mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-gray-400">Quick answers to common questions</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="glass-card p-6 hover:border-primary/50 transition">
                            <h3 className="text-lg font-bold mb-3 text-primary">{faq.question}</h3>
                            <p className="text-gray-400">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="glass-card p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl font-black mb-4 gradient-text">Ready to Start Learning?</h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                            Don't wait! Start your coding journey today and transform your career.
                        </p>
                        <Link
                            to="/#courses"
                            className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition transform hover:scale-105"
                        >
                            Browse Courses
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
