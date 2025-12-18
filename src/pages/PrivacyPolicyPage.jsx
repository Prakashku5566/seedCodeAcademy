import { Link } from "react-router-dom";
import { Shield, Eye, Lock, Database, Globe, Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
    const lastUpdated = "December 15, 2025";

    const sections = [
        {
            icon: <Eye className="text-primary" size={24} />,
            title: "Information We Collect",
            content: [
                {
                    subtitle: "Personal Information",
                    text: "When you create an account, enroll in courses, or contact us, we collect information such as your name, email address, phone number, and payment details. This information is essential for providing our services and processing transactions."
                },
                {
                    subtitle: "Usage Data",
                    text: "We automatically collect information about how you interact with our platform, including pages visited, time spent on courses, progress data, and device information. This helps us improve your learning experience."
                },
                {
                    subtitle: "Cookies and Tracking",
                    text: "We use cookies and similar technologies to remember your preferences, analyze site traffic, and personalize your experience. You can control cookie settings through your browser."
                }
            ]
        },
        {
            icon: <Database className="text-primary" size={24} />,
            title: "How We Use Your Information",
            content: [
                {
                    subtitle: "Service Delivery",
                    text: "We use your information to provide access to courses, track your progress, issue certificates, and deliver customer support. Your learning data helps us personalize course recommendations."
                },
                {
                    subtitle: "Communication",
                    text: "We may send you important updates about your courses, new content, promotions, and policy changes. You can opt out of marketing communications at any time while still receiving essential service notifications."
                },
                {
                    subtitle: "Improvement and Analytics",
                    text: "We analyze aggregated data to improve our courses, platform features, and user experience. This includes understanding how students learn and what content is most effective."
                }
            ]
        },
        {
            icon: <Lock className="text-primary" size={24} />,
            title: "Data Security",
            content: [
                {
                    subtitle: "Protection Measures",
                    text: "We implement industry-standard security measures including SSL encryption, secure payment processing through trusted providers, and regular security audits to protect your personal information."
                },
                {
                    subtitle: "Data Storage",
                    text: "Your data is stored on secure servers with restricted access. We regularly backup data and have disaster recovery procedures in place to ensure your information is protected."
                },
                {
                    subtitle: "Third-Party Security",
                    text: "We carefully vet all third-party service providers and require them to maintain appropriate security measures. Payment information is processed by PCI-compliant payment processors."
                }
            ]
        },
        {
            icon: <Globe className="text-primary" size={24} />,
            title: "Data Sharing",
            content: [
                {
                    subtitle: "Service Providers",
                    text: "We share data with trusted third parties who help us operate our platform, process payments, send emails, and analyze usage. These providers are contractually bound to protect your data."
                },
                {
                    subtitle: "Legal Requirements",
                    text: "We may disclose your information if required by law, court order, or government request. We will notify you of such requests unless prohibited by law."
                },
                {
                    subtitle: "Business Transfers",
                    text: "In the event of a merger, acquisition, or sale of assets, your data may be transferred. We will notify you before your data becomes subject to a different privacy policy."
                }
            ]
        },
        {
            icon: <Shield className="text-primary" size={24} />,
            title: "Your Rights",
            content: [
                {
                    subtitle: "Access and Portability",
                    text: "You have the right to access your personal data and request a copy in a portable format. Contact us to request your data export."
                },
                {
                    subtitle: "Correction and Deletion",
                    text: "You can update your personal information through your account settings. You may also request deletion of your data, subject to legal retention requirements."
                },
                {
                    subtitle: "Opt-Out Rights",
                    text: "You can opt out of marketing communications, disable cookies, and limit data collection. Some features may be limited if you choose to restrict data usage."
                }
            ]
        }
    ];

    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/10"></div>
                <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <Shield className="text-primary mx-auto mb-6" size={64} />
                        <h1 className="text-5xl lg:text-6xl font-black mb-6 gradient-text">Privacy Policy</h1>
                        <p className="text-xl text-gray-300 mb-4">
                            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                        </p>
                        <p className="text-gray-400">Last updated: {lastUpdated}</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Introduction */}
                <div className="glass-card p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                    <p className="text-gray-300 leading-relaxed">
                        SeedCode Academy ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and share information when you use our website, courses, and services. By using our platform, you agree to the collection and use of information in accordance with this policy.
                    </p>
                </div>

                {/* Main Sections */}
                <div className="space-y-8">
                    {sections.map((section, index) => (
                        <div key={index} className="glass-card p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                                    {section.icon}
                                </div>
                                <h2 className="text-2xl font-bold">{section.title}</h2>
                            </div>
                            <div className="space-y-6">
                                {section.content.map((item, i) => (
                                    <div key={i}>
                                        <h3 className="text-lg font-semibold text-primary mb-2">{item.subtitle}</h3>
                                        <p className="text-gray-400 leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact */}
                <div className="glass-card p-8 mt-8 text-center">
                    <Mail className="text-primary mx-auto mb-4" size={32} />
                    <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
                    <p className="text-gray-400 mb-6">
                        If you have any questions about this Privacy Policy, please contact us.
                    </p>
                    <Link to="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-primary-dark rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}
