import { Metadata } from "next";
import ProcessClient from "./ProcessClient";

export const metadata: Metadata = {
    title: "Our Architectural Process | Sketch to Stone",
    description: "Discover how Vartex Architects transforms conceptual sketches into concrete reality through a rigorous 4-phase design and technical methodology.",
    keywords: ["Architectural Design Process", "Construction Documentation", "Site Analysis Nigeria", "Building Realization", "Vertex Process", "Vortex Methodology"],
    alternates: { canonical: "/process" },
};

export default function ProcessPage() {
    return <ProcessClient />;
}
