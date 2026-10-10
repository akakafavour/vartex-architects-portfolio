import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service / VARTEX Architects",
    description: "Terms governing the use of vartexarchitects.com and the engagement of our architectural design and consulting services.",
    alternates: { canonical: "/terms" },
};

export default function TermsOfService() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-white dark:bg-background-dark pt-28 pb-24 px-6 md:px-16 lg:px-24">
                <div className="max-w-3xl mx-auto flex flex-col gap-16">

                    {/* Page Header */}
                    <div className="flex flex-col gap-4 border-b border-neutral-100 dark:border-white/5 pb-12">
                        <span className="font-mono text-[10px] tracking-[0.4em] text-primary/40 dark:text-white/40 uppercase">LEGAL</span>
                        <h1 className="text-4xl lg:text-6xl font-black tracking-tighter text-primary dark:text-white uppercase">Terms of Service</h1>
                        <p className="font-mono text-[10px] tracking-widest text-primary/40 dark:text-white/40 uppercase">EFFECTIVE DATE: FEBRUARY 23, 2026</p>
                    </div>

                    {/* Intro */}
                    <div className="flex flex-col gap-12 text-primary/80 dark:text-white/80 leading-relaxed text-[15px]">

                        <p>
                            Welcome to Vartex Architects (vartexarchitects.com). These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of our website and outline the foundational rules for engaging our architectural design and consulting services. By accessing our website or submitting a project inquiry, you agree to be bound by these Terms.
                        </p>

                        {/* Section 1 */}
                        <section className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold tracking-tight text-primary dark:text-white">1. Website Use &amp; Scope of Services</h2>
                            <p>The website vartexarchitects.com operates purely as an informational portfolio and lead-generation platform. Showcased projects, 3D renders, and descriptions are for illustrative purposes. Submitting a project inquiry through our site does not constitute a formal architectural agreement. Formal engagements require a separate, signed &ldquo;Architectural Services Contract&rdquo; detailing the exact scope of your specific project.</p>
                        </section>

                        {/* Section 2 */}
                        <section className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold tracking-tight text-primary dark:text-white">2. Intellectual Property and Copyright</h2>
                            <p>Vartex Architects retains full and exclusive copyright, ownership, and intellectual property rights to all original concepts, 3D renders, CAD/BIM files, blueprints, and architectural documents created by our firm.</p>
                            <ul className="list-disc list-outside ml-5 flex flex-col gap-3">
                                <li>Upon full and final payment, the client is granted an exclusive, non-transferable license to construct the designed structure only once and strictly on the specific site location outlined in the formal agreement.</li>
                                <li>Clients may not reuse, sell, or distribute our designs for multiple developments or secondary sites without written permission and additional compensation to Vartex Architects.</li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold tracking-tight text-primary dark:text-white">3. Client Uploads, Warranties, and Accuracy</h2>
                            <p>When submitting project briefs, land surveys, site plans, reference images, or any other materials via our website or email, you warrant that:</p>
                            <ul className="list-disc list-outside ml-5 flex flex-col gap-3">
                                <li>You possess the legal right and authority to share these documents.</li>
                                <li>The information, dimensions, and topography provided in surveys and site plans are fully accurate. Vartex Architects is not liable for design errors resulting from inaccurate, outdated, or legally disputed client-provided documentation.</li>
                            </ul>
                        </section>

                        {/* Section 4 */}
                        <section className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold tracking-tight text-primary dark:text-white">4. Financial Terms, Milestones, and Refunds</h2>
                            <p>Due to the conceptual and time-intensive nature of architectural design, our financial terms are strictly enforced:</p>
                            <ul className="list-disc list-outside ml-5 flex flex-col gap-3">
                                <li><strong>Non-Refundable Retainer:</strong> A mobilization fee (retainer) must be cleared before any conceptualization, site analysis, or drafting begins.</li>
                                <li><strong>Milestone Payments:</strong> Remaining fees are tied to specific project deliverables (e.g., schematic approval, construction documents).</li>
                                <li><strong>No Refunds:</strong> All payments made for time already spent or phases already executed are strictly non-refundable.</li>
                                <li><strong>Release of Deliverables:</strong> Vartex Architects will not release final, un-watermarked high-resolution CAD/BIM files, blueprints, or construction documents until the final invoice is paid in full.</li>
                            </ul>
                        </section>

                        {/* Section 5 */}
                        <section className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold tracking-tight text-primary dark:text-white">5. Design Revisions and &ldquo;Scope Creep&rdquo;</h2>
                            <p>To ensure project momentum and protect our firm&apos;s time, standard design phases include up to three (3) minor revisions during the conceptual stage.</p>
                            <ul className="list-disc list-outside ml-5 flex flex-col gap-3">
                                <li>Any major structural or stylistic changes requested after the schematic design has been approved (e.g., adding floors, significantly altering the footprint, or changing the core architectural style) constitute &ldquo;scope creep.&rdquo;</li>
                                <li>These major alterations will fall outside the initial agreement and will be billed separately at an hourly rate or require a newly negotiated fee structure.</li>
                            </ul>
                        </section>

                        {/* Section 6 */}
                        <section className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold tracking-tight text-primary dark:text-white">6. Limitation of Liability</h2>
                            <p>Vartex Architects provides professional design and consulting services. We are explicitly not responsible for:</p>
                            <ul className="list-disc list-outside ml-5 flex flex-col gap-3">
                                <li>The physical execution of the construction process.</li>
                                <li>Structural failures, material defects, or safety hazards caused by third-party building contractors, engineers, or tradespeople.</li>
                                <li>The client&apos;s failure to secure the necessary local zoning approvals, municipal building permits, or homeowner association clearances in their respective international or local jurisdictions.</li>
                            </ul>
                        </section>

                        {/* Section 7 */}
                        <section className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold tracking-tight text-primary dark:text-white">7. Governing Law and Dispute Resolution</h2>
                            <p>These Terms of Service, as well as any separate architectural agreements entered into with Vartex Architects, shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, specifically the jurisdiction of Lagos State. Any disputes arising from these terms or our services shall be resolved through binding arbitration or the competent courts within Lagos, Nigeria.</p>
                        </section>

                        {/* Section 8 */}
                        <section className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold tracking-tight text-primary dark:text-white">8. Contact Information</h2>
                            <p>For any questions regarding these Terms or our architectural services, please contact us:</p>
                            <div className="bg-neutral-50 dark:bg-white/[0.03] border border-neutral-100 dark:border-white/5 p-6 rounded-sm flex flex-col gap-2 font-mono text-[12px] tracking-wider">
                                <span className="text-primary dark:text-white font-bold">VARTEX ARCHITECTS</span>
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
