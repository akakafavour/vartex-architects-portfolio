import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Vartex Architects | Project Inquiries",
    description: "Start your architectural journey with Vartex Architects. Contact our Lagos or Enugu studio for project inquiries and design consultations.",
    keywords: ["Hire Architects Nigeria", "Architectural Consultation Lagos", "Contact Vartex", "Project Brief Development", "Vertex Contact", "Vortex Inquiry"],
    alternates: { canonical: "/contact" },
};

export default function ContactPage() {
    return <ContactClient />;
}
