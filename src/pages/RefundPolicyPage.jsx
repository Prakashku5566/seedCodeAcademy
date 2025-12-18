import { Link } from "react-router-dom";
import {
    RefreshCw,
    CheckCircle,
    XCircle,
    Clock,
    AlertTriangle,
    HelpCircle,
    Mail,
    ArrowRight
} from "lucide-react";

export default function RefundPolicyPage() {
    const lastUpdated = "December 15, 2025";

    const eligibleItems = [
        "Course not meeting advertised description",
        "Technical issues preventing access (if unresolved within 48 hours)",
        "Duplicate purchase by mistake",
        "Changed mind within 7 days of purchase",
        "Major personal circumstances (evaluated case by case)"
    ];

    const nonEligibleItems = [
        "Requests made after 7 days of purchase",
        "Courses where more than 30% content has been accessed",
        "Certificate already issued for the course",
        "Evidence of account sharing or content redistribution",
        "Violation of Terms of Service"
    ];

    const steps = [
        {
            step: 1,
            title: "Submit Request",
            description: "Email support@seedcode.academy with your order ID and reason for refund within 7 days of purchase."
        },
        {
            step: 2,
            title: "Review Process",
            description: "Our team will review your request within 1-2 business days and may reach out for additional information."
        },
        {
            step: 3,
            title: "Approval",
            description: "Once approved, you'll receive a confirmation email. Course access will be revoked upon approval."
        },
        {
            step: 4,
            title: "Refund Processed",
            description: "Refunds are processed within 5-7 business days to your original payment method."
        }
    ];

    const faqs = [
        {
            question: "How long do I have to request a refund?",
            answer: "You have 7 days from the date of purchase to request a refund. After this period, refunds are not available unless there are exceptional circumstances."
        },
        {
            question: "Can I get a partial refund?",
            answer: "We typically offer full refunds within the eligibility period. Partial refunds may be considered for special circumstances, such as course content issues that affect only part of the course."
        },
        {
            question: "What if I purchased during a sale?",
            answer: "Sale purchases are eligible for refunds at the sale price paid. You will not receive the full original price if you purchased at a discounted rate."
        },
        {
            question: "Can I transfer my enrollment instead of a refund?",
            answer: "Yes! Within 30 days of purchase, you can transfer your enrollment to another course of equal or higher value. For higher-value courses, you pay only the difference."
        },
        {
            question: "How will I receive my refund?",
            answer: "Refunds are credited to the original payment method used during purchase. Credit/debit card refunds may take additional time depending on your bank."
        }
    ];

    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/10"></div>
                <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <RefreshCw className="text-primary mx-auto mb-6" size={64} />
                        <h1 className="text-5xl lg:text-6xl font-black mb-6 gradient-text">Refund Policy</h1>
                        <p className="text-xl text-gray-300 mb-4">
                            We want you to be completely satisfied with your learning experience.
                        </p>
                        <p className="text-gray-400">Last updated: {lastUpdated}</p>
                    </div>
                </div>
            </div>

            {/* 7-Day Guarantee Banner */}
            <div className="max-w-4xl mx-auto px-6 py-8">
                <div className="glass-card p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-primary/10"></div>
                    <div className="relative z-10">
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="text-green-500" size={40} />
                        </div>
                        <h2 className="text-3xl font-black mb-4">7-Day Money-Back Guarantee</h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            If you're not satisfied with your course, request a full refund within 7 days of purchase — no questions asked.
                        </p>
                    </div>
                </div>
            </div>

            {/* Eligibility */}
            <div className="max-w-4xl mx-auto px-6 py-8">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Eligible */}
                    <div className="glass-card p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle className="text-green-500" size={28} />
                            <h3 className="text-xl font-bold">Eligible for Refund</h3>
                        </div>
                        <ul className="space-y-3">
                            {eligibleItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                                    <span className="text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Not Eligible */}
                    <div className="glass-card p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <XCircle className="text-red-500" size={28} />
                            <h3 className="text-xl font-bold">Not Eligible for Refund</h3>
                        </div>
                        <ul className="space-y-3">
                            {nonEligibleItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <XCircle className="text-red-500 flex-shrink-0 mt-1" size={18} />
                                    <span className="text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Refund Process */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-black gradient-text mb-8 text-center">Refund Process</h2>
                <div className="grid md:grid-cols-4 gap-4">
                    {steps.map((item, index) => (
                        <div key={index} className="glass-card p-6 text-center relative">
                            {index < steps.length - 1 && (
                                <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-primary z-10" size={24} />
                            )}
                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold text-xl">
                                {item.step}
                            </div>
                            <h3 className="font-bold mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQs */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-black gradient-text mb-8 text-center">Refund FAQs</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="glass-card p-6">
                            <div className="flex items-start gap-3">
                                <HelpCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                                <div>
                                    <h3 className="font-bold mb-2">{faq.question}</h3>
                                    <p className="text-gray-400">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Important Notice */}
            <div className="max-w-4xl mx-auto px-6 py-8">
                <div className="glass-card p-6 border-l-4 border-yellow-500">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="text-yellow-500 flex-shrink-0" size={24} />
                        <div>
                            <h3 className="font-bold mb-2">Important Notice</h3>
                            <p className="text-gray-400">
                                Refund requests are evaluated on a case-by-case basis. Abuse of our refund policy may result in
                                account restrictions or termination. We reserve the right to deny refund requests that violate
                                our Terms of Service.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="glass-card p-8 text-center">
                    <Mail className="text-primary mx-auto mb-4" size={32} />
                    <h2 className="text-2xl font-bold mb-4">Need to Request a Refund?</h2>
                    <p className="text-gray-400 mb-6">
                        Email us at <span className="text-primary">support@seedcode.academy</span> with your order ID and reason for refund.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/support" className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dark rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition">
                            Contact Support
                        </Link>
                        <Link to="/faq" className="px-8 py-3 glass-card hover:bg-white/10 rounded-full font-semibold transition">
                            More FAQs
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
