import { useState } from "react";
import { Link } from "react-router-dom";
import {
    HelpCircle,
    ChevronDown,
    ChevronUp,
    Search,
    BookOpen,
    CreditCard,
    GraduationCap,
    Settings,
    Shield,
    MessageSquare
} from "lucide-react";

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(null);
    const [activeCategory, setActiveCategory] = useState("all");

    const categories = [
        { id: "all", name: "All Questions", icon: <HelpCircle size={18} /> },
        { id: "courses", name: "Courses", icon: <BookOpen size={18} /> },
        { id: "payment", name: "Payment", icon: <CreditCard size={18} /> },
        { id: "certification", name: "Certification", icon: <GraduationCap size={18} /> },
        { id: "technical", name: "Technical", icon: <Settings size={18} /> },
        { id: "refund", name: "Refund", icon: <Shield size={18} /> },
    ];

    const faqs = [
        {
            category: "courses",
            question: "How do I enroll in a course?",
            answer: "Enrolling is simple! Browse our courses, select the one you want, click 'Enroll Now', and complete the payment. You'll get instant access to all course materials, including videos, projects, and resources."
        },
        {
            category: "courses",
            question: "Do I get lifetime access to course materials?",
            answer: "Yes! Once you enroll in a course, you get lifetime access to all course materials, including future updates. You can revisit the content anytime you need a refresher."
        },
        {
            category: "courses",
            question: "Are the courses suitable for complete beginners?",
            answer: "Absolutely! Our courses are designed to take you from zero to job-ready. Each course starts with fundamentals and gradually progresses to advanced topics. No prior coding experience is required for beginner courses."
        },
        {
            category: "courses",
            question: "How long does it take to complete a course?",
            answer: "Course duration varies: Frontend courses take 3-4 months, Full Stack courses take 6-7 months. These are average times with 2-3 hours of daily practice. You can go at your own pace."
        },
        {
            category: "payment",
            question: "What payment methods do you accept?",
            answer: "We accept all major payment methods including Credit/Debit cards, UPI, Net Banking, and popular wallets like Paytm and PhonePe. We also offer EMI options on select courses."
        },
        {
            category: "payment",
            question: "Do you offer EMI or installment options?",
            answer: "Yes! We offer no-cost EMI options on courses above ₹10,000. You can split your payment into 3, 6, or 12 monthly installments depending on the course value."
        },
        {
            category: "payment",
            question: "Is there a discount for students?",
            answer: "Yes, we offer a 10% student discount on all courses. Simply verify your student status with a valid college ID during enrollment to avail the discount."
        },
        {
            category: "certification",
            question: "Do I receive a certificate after completing a course?",
            answer: "Yes! Upon successful completion of a course (including all projects and assessments), you'll receive an industry-recognized certificate that you can add to your LinkedIn profile and resume."
        },
        {
            category: "certification",
            question: "Are your certificates recognized by employers?",
            answer: "Our certificates are valued by 500+ hiring partners. They demonstrate your practical skills through project work. Many of our alumni have successfully used these certificates to land jobs at top tech companies."
        },
        {
            category: "technical",
            question: "What are the technical requirements for the courses?",
            answer: "You'll need a computer with at least 8GB RAM.  Works on Windows, Mac, or Linux. A stable internet connection is required for streaming videos and accessing materials. We provide free software tools and detailed setup guides."
        },
        {
            category: "technical",
            question: "I'm having trouble accessing the course. What should I do?",
            answer: "First, try clearing your browser cache and logging in again. If the issue persists, contact our support team via live chat or email at support@seedcode.academy. We typically resolve issues within 2-4 hours."
        },
        {
            category: "technical",
            question: "Can I download videos for offline viewing?",
            answer: "Currently, videos are available for streaming only to ensure you always have access to the latest updated content. However, code files, PDFs, and resources can be downloaded."
        },
        {
            category: "refund",
            question: "What is your refund policy?",
            answer: "We offer a 7-day money-back guarantee. If you're not satisfied with the course within the first 7 days of enrollment, you can request a full refund - no questions asked."
        },
        {
            category: "refund",
            question: "How long does it take to process a refund?",
            answer: "Once approved, refunds are processed within 5-7 business days. The amount will be credited back to the original payment method used during purchase."
        },
        {
            category: "refund",
            question: "Can I transfer my enrollment to another course?",
            answer: "Yes, you can transfer your enrollment to another course of equal or higher value within 30 days of purchase. For higher-value courses, you'll need to pay the difference."
        },
    ];

    const filteredFAQs = activeCategory === "all"
        ? faqs
        : faqs.filter(faq => faq.category === activeCategory);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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
                            FAQ
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-black mb-6 gradient-text leading-tight">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            Find quick answers to common questions about our courses,
                            payments, certifications, and more.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search for answers..."
                                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:outline-none text-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Tabs */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-wrap gap-3 justify-center">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => { setActiveCategory(cat.id); setOpenIndex(null); }}
                            className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition ${activeCategory === cat.id
                                    ? 'bg-gradient-to-r from-primary to-primary-dark text-white'
                                    : 'glass-card hover:bg-white/10'
                                }`}
                        >
                            {cat.icon} {cat.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* FAQ List */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="space-y-4">
                    {filteredFAQs.map((faq, index) => (
                        <div
                            key={index}
                            className="glass-card overflow-hidden transition"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition"
                            >
                                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-primary flex-shrink-0" size={24} />
                                ) : (
                                    <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed animate-fade-in">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="glass-card p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10"></div>
                    <div className="relative z-10">
                        <MessageSquare className="text-primary mx-auto mb-4" size={48} />
                        <h2 className="text-4xl font-black mb-4 gradient-text">Still Have Questions?</h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                            Can't find what you're looking for? Our support team is always happy to help.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/support" className="px-10 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition transform hover:scale-105">
                                Contact Support
                            </Link>
                            <Link to="/community" className="px-10 py-4 glass-card hover:bg-white/10 rounded-full font-bold text-lg transition">
                                Ask Community
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
