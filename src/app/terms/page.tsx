import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${site.businessName}.`,
};

export default function TermsPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />
      <section className="pt-36 pb-24 md:pt-44">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-heading font-bold mb-8">Terms of Service</h1>
          <div className="post-prose">
            <p>Last updated: 2026-08-20</p>
            <h2>Use of This Website</h2>
            <p>
              This website provides information about renovation, addition, and repair services for
              production and tract-built homes offered by {site.businessName}. Submitting a form
              constitutes a request for contact and does not create a binding contract for services.
            </p>
            <h2>Estimates</h2>
            <p>
              All estimates provided through this site or by phone are free and non-binding until
              confirmed in a written, signed project agreement following an on-site walkthrough.
            </p>
            <h2>Contact</h2>
            <p>Questions about these terms can be directed to {site.email} or {site.phone}.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
