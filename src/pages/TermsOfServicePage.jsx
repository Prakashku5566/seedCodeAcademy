import { Link } from "react-router-dom";
import { FileText, CheckCircle, AlertCircle, XCircle, Mail } from "lucide-react";

export default function TermsOfServicePage() {
    const lastUpdated = "December 15, 2025";

    const sections = [
        {
            title: "1. Acceptance of Terms",
            content: `By accessing or using SeedCode Academy's website, courses, and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.

These terms apply to all users, including students, visitors, and anyone who accesses our platform. We may update these terms from time to time, and your continued use of our services constitutes acceptance of any changes.`
        },
        {
            title: "2. Account Registration",
            content: `To access our courses, you must create an account. You agree to:
      
• Provide accurate and complete information during registration
• Maintain the security of your account credentials
• Notify us immediately of any unauthorized access
• Accept responsibility for all activities under your account

We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.`
        },
        {
            title: "3. Course Access and License",
            content: `Upon purchase, you receive a personal, non-transferable license to access the course content. This license grants you:

• Lifetime access to purchased course materials
• Access to course updates and improvements
• Right to download supplementary materials for personal use

You may NOT:
• Share your account credentials with others
• Redistribute, sell, or resell course content
• Record, copy, or reproduce video lessons
• Use content for commercial purposes without permission`
        },
        {
            title: "4. Payment and Pricing",
            content: `All prices are listed in Indian Rupees (INR) and are subject to change. Payment terms include:

• Full payment is required before course access is granted
• We accept major credit/debit cards, UPI, and net banking
• EMI options are available on eligible purchases
• All transactions are processed through secure payment gateways

Promotional offers and discounts are subject to specific terms and may not be combined unless stated otherwise.`
        },
        {
            title: "5. Refund Policy",
            content: `We offer a 7-day money-back guarantee on all courses. To request a refund:

• Submit your request within 7 days of purchase
• Provide a valid reason for your refund request
• Refunds are processed within 5-7 business days

Please see our detailed Refund Policy for complete information about eligibility and process.`
        },
        {
            title: "6. Code of Conduct",
            content: `As a member of our community, you agree to:

• Treat other members, instructors, and staff with respect
• Not engage in harassment, discrimination, or abusive behavior
• Not share inappropriate or offensive content
• Not attempt to disrupt or harm our platform or other users

Violations may result in account suspension or termination without refund.`
        },
        {
            title: "7. Intellectual Property",
            content: `All content on SeedCode Academy, including courses, videos, code examples, documentation, and branding, is protected by intellectual property laws.

• Course content remains the property of SeedCode Academy
• User-generated content (projects, submissions) remains your property
• You may showcase projects you build during courses in your portfolio
• Attribution to SeedCode Academy is appreciated but not required for student projects`
        },
        {
            title: "8. Certificates",
            content: `Upon successful completion of a course, you will receive a digital certificate. Certificate terms:

• Certificates are issued based on completion of all course modules
• Certificates cannot be transferred to another person
• We reserve the right to revoke certificates obtained through fraudulent means
• Employers may verify certificate authenticity through our platform`
        },
        {
            title: "9. Limitation of Liability",
            content: `SeedCode Academy provides educational content and makes no guarantees regarding:

• Specific career outcomes or job placement
• Income levels after completing courses
• Compatibility with all software or systems
• Uninterrupted access to the platform

To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of our services.`
        },
        {
            title: "10. Modifications to Service",
            content: `We reserve the right to:

• Modify or discontinue any course or feature
• Update course content to reflect current industry standards
• Change pricing for future purchases
• Modify these terms with reasonable notice

Existing course purchases will not be affected by price changes. We will notify you of significant changes to these terms via email.`
        }
    ];

    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/10"></div>
                <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <FileText className="text-primary mx-auto mb-6" size={64} />
                        <h1 className="text-5xl lg:text-6xl font-black mb-6 gradient-text">Terms of Service</h1>
                        <p className="text-xl text-gray-300 mb-4">
                            Please read these terms carefully before using our services.
                        </p>
                        <p className="text-gray-400">Last updated: {lastUpdated}</p>
                    </div>
                </div>
            </div>

            {/* Quick Summary */}
            <div className="max-w-4xl mx-auto px-6 py-8">
                <div className="glass-card p-6">
                    <h2 className="text-xl font-bold mb-4">Quick Summary</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                            <div>
                                <p className="font-semibold">Lifetime Access</p>
                                <p className="text-sm text-gray-400">Keep access to purchased courses forever</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                            <div>
                                <p className="font-semibold">7-Day Refund</p>
                                <p className="text-sm text-gray-400">Money-back guarantee on all courses</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <XCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                            <div>
                                <p className="font-semibold">No Sharing</p>
                                <p className="text-sm text-gray-400">Personal use license only</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-8">
                <div className="space-y-6">
                    {sections.map((section, index) => (
                        <div key={index} className="glass-card p-8">
                            <h2 className="text-xl font-bold mb-4 text-primary">{section.title}</h2>
                            <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                                {section.content}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact */}
                <div className="glass-card p-8 mt-8 text-center">
                    <AlertCircle className="text-primary mx-auto mb-4" size={32} />
                    <h2 className="text-2xl font-bold mb-4">Questions About Terms?</h2>
                    <p className="text-gray-400 mb-6">
                        If you have any questions about these Terms of Service, please contact us.
                    </p>
                    <Link to="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-primary-dark rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}
