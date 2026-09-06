import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with theSafira about your wedding photography and films — based in Pune, available across India and worldwide.",
};

export default function ContactPage() {
  return (
    <main className="pt-16">
      <ContactForm />
    </main>
  );
}
