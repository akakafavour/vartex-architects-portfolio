import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy / VARTEX Architects",
    description: "How VARTEX Architects collects, uses, and safeguards your personal data. Compliant with GDPR, CCPA, and NDPA 2023.",
    alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-white dark:bg-background-dark pt-28 pb-24 px-6 md:px-16 lg:px-24">
                <div className="max-w-3xl mx-auto flex flex-col gap-16">

                    {/* Page Header */}
                    <div className="flex flex-col gap-4 border-b border-neutral-100 dark:border-white/5 pb-12">
                        <span className="font-mono text-[10px] tracking-[0.4em] text-primary/40 dark:text-white/40 uppercase">LEGAL</span>
                        <h1 className="text-4xl lg:text-6xl font-black tracking-tighter text-primary dark:text-white uppercase">Privacy Policy</h1>
                        <p className="font-mono text-[10px] tracking-widest text-primary/40 dark:text-white/40 uppercase">EFFECTIVE DATE: FEBRUARY 23, 2026</p>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-12 text-primary/80 dark:text-white/80 leading-relaxed text-[15px]">

                        <p>
                            Vartex Architects (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard the personal data you provide when using our website (vartexarchitects.com) and interacting with our architectural services. We comply with international and local data protection frameworks, including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and the Nigeria Data Protection Act (NDPA) 2023.
                        </p>

                        {/* Section 1 */}
                        <section className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold tracking-tight text-primary dark:text-white">1. Information We Collect</h2>
                            <p>We collect data strictly necessary to provide our services and operate our business effectively.</p>
                            <ul className="list-disc list-outside ml-5 flex flex-col gap-3">
                                <li><strong>Identity &amp; Contact Data:</strong> Full name, email address, and phone number.</li>
                                <li><strong>Project Information:</strong> Project type, site location, and the details outlined in your project brief.</li>
                                <li><strong>Important Notice regarding the &ldquo;Project Brief&rdquo;:</strong> Please do not submit highly sensitive personal information (such as personal medical data, financial account numbers, or extreme security vulnerabilities of a property) through our open text fields.</li>
                                <li><strong>Financial Data:</strong> We do not collect or store credit card numbers on our servers. All payments are processed securely through certified, third-party payment gateways (e.g., Paystack, Stripe).</li>
                                <li><strong>Technical &amp; Usage Data:</strong> IP addresses, browser types, and interaction data collected via cookies. Non-essential cookies are only loaded after obtaining your explicit consent via our cookie banner.</li>
                            </ul>
                        </section>

                        {/* Section 2 */}
                        <section className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold tracking-tight text-primary dark:text-white">2. How We Collect Your Data</h2>
                            <p>Your data is collected lawfully and transparently through:</p>
                            <ul className="list-disc list-outside ml-5 flex flex-col gap-3">
                                <li><strong>Explicit Consent:</strong> When you actively check the consent box and submit the &ldquo;Project Inquiry&rdquo; form.</li>
                                <li><strong>Direct Communication:</strong> When you contact us via email, phone, or in person.</li>
                                <li><strong>Automated Tracking:</strong> Through cookies, subject to your prior consent.</li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold tracking-tight text-primary dark:text-white">3. How We Use Your Information</h2>
                            <p>We process your personal data under the lawful basis of contract fulfillment, legitimate business interests, and explicit consent for the following purposes:</p>
                            <ul className="list-disc list-outside ml-5 flex flex-col gap-3">
                                <li>To evaluate and respond to your architectural project inquiries.</li>
                                <li>To facilitate project management and client communication.</li>
                                <li>To process payments via our compliant third-party payment processors.</li>
                                <li>To analyze website traffic and optimize user experience.</li>
                            </ul>
                        </section>

                        {/* Section 4 */}
                        <section className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold tracking-tight text-primary dark:text-white">4. Third-Party Service Providers</h2>
                            <p>We do not sell or trade your data. We only share necessary information with vetted, legally compliant third-party service providers who are bound by strict Data Processing Agreements (DPAs). These include:</p>
                            <ul className="list-disc list-outside ml-5 flex flex-col gap-3">
                                <li><strong>Enterprise Cloud Storage:</strong> We utilize paid, business-tier enterprise solutions (such as Google Workspace) to securely store client data and project files.</li>
                                <li><strong>Payment Processors:</strong> Certified gateways handle all financial transactions to ensure PCI-DSS compliance.</li>
                            </ul>
                        </section>

                        {/* Section 5 */}
                        <section className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold tracking-tight text-primary dark:text-white">5. Data Retention</h2>
                            <p>We adhere to strict data minimization principles and will not keep your data indefinitely:</p>
                            <ul className="list-disc list-outside ml-5 flex flex-col gap-3">
                                <li><strong>Unconverted Inquiries:</strong> Data submitted via the project inquiry form that does not result in a contract is permanently deleted after 24 months.</li>
                                <li><strong>Client Records:</strong> If you engage our services, project and billing data is retained for 7 years post-project completion to comply with tax, legal, and professional liability requirements.</li>
                            </ul>
                        </section>

                        {/* Section 6 */}
                        <section className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold tracking-tight text-primary dark:text-white">6. Children&apos;s Privacy</h2>
                            <p>Our website and architectural services are intended for individuals 18 years of age or older. We do not knowingly collect personal data from minors. If we become aware that we have inadvertently collected data from a child, we will delete it immediately.</p>
                        </section>

                        {/* Section 7 */}
                        <section className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold tracking-tight text-primary dark:text-white">7. Your International Privacy Rights</h2>
                            <p>Depending on your jurisdiction, you possess specific rights regarding your personal data:</p>
                            <ul className="list-disc list-outside ml-5 flex flex-col gap-3">
                                <li><strong>Right to Access &amp; Portability:</strong> Request a copy of your data in a structured, machine-readable format.</li>
                                <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data.</li>
                                <li><strong>Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):</strong> Request the deletion of your personal data when it is no longer legally necessary for us to retain it.</li>
                                <li><strong>Right to Withdraw Consent:</strong> Opt-out of marketing communications or revoke cookie consent at any time.</li>
                            </ul>
                        </section>

                        {/* Section 8 */}
                        <section className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold tracking-tight text-primary dark:text-white">8. Contact Information</h2>
                            <p>For legal inquiries, data requests, or to exercise your privacy rights, please contact our Data Protection Officer:</p>
                            <div className="bg-neutral-50 dark:bg-white/[0.03] border border-neutral-100 dark:border-white/5 p-6 rounded-sm flex flex-col gap-2 font-mono text-[12px] tracking-wider">
                                <span className="text-primary dark:text-white font-bold">VARTEX ARCHITECTS</span>
                                <span>Data Protection Officer: Michael Mbah</span>
                                <span>Email: <a href="mailto:Info@vartexarchitects.com" className="underline hover:text-primary dark:hover:text-white transition-colors">Info@vartexarchitects.com</a></span>
                                <span>Phone: <a href="tel:+2347032697179" className="underline hover:text-primary dark:hover:text-white transition-colors">+234 703 269 7179</a></span>
                                <span>WhatsApp: <a href="https://wa.me/message/WCAUBNIBDXOSF1" className="underline hover:text-primary dark:hover:text-white transition-colors">+234 704 900 1510</a></span>
                                <span>Address: Lagos, Nigeria</span>
                            </div>
                        </section>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
