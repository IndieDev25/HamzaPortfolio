/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Academic from "@/components/Academic";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Experience />
        <Testimonials />
        <Academic />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

