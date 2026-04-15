import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { FiGithub, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "../data/data";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setStatus("");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
      const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            from_email: form.email,
            subject: form.subject,
            message: form.message,
            to_email: personalInfo.email,
          },
          { publicKey }
        );
      } else if (formspreeEndpoint) {
        const response = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        });

        if (!response.ok) {
          throw new Error("Formspree request failed");
        }
      } else {
        const mailTo = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
        )}`;
        window.location.href = mailTo;
      }

      setStatus("Message sent successfully.");
      setForm(initialForm);
    } catch {
      setStatus("Unable to send message now. Please use direct email or WhatsApp.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 md:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title mb-10"
      >
        Contact
      </motion.h2>

      <div className="grid gap-6 lg:grid-cols-3">
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-box space-y-4 p-6 lg:col-span-2"
        >
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            placeholder="Name"
            className="input-style"
          />
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            type="email"
            placeholder="Email"
            className="input-style"
          />
          <input
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            required
            placeholder="Subject"
            className="input-style"
          />
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows={5}
            placeholder="Message"
            className="input-style"
          />
          <button
            disabled={isSending}
            className="w-full rounded-md bg-gradient-to-r from-[#C9A84C] to-[#8B1A2B] px-5 py-2.5 text-sm font-medium text-white transition hover:brightness-110 disabled:opacity-60"
          >
            {isSending ? "Sending..." : "Submit"}
          </button>
          <p className="text-sm text-[#C9A84C]">{status}</p>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <a href={`mailto:${personalInfo.email}`} className="glass-box flex items-center gap-3 p-4 text-sm text-[#E5E5E5]">
            <FiMail className="text-[#C9A84C]" /> {personalInfo.email}
          </a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="glass-box flex items-center gap-3 p-4 text-sm text-[#E5E5E5]">
            <FiGithub className="text-[#C9A84C]" /> GitHub
          </a>
          <a href={personalInfo.whatsapp} target="_blank" rel="noreferrer" className="glass-box flex items-center gap-3 p-4 text-sm text-[#E5E5E5]">
            <FaWhatsapp className="text-[#C9A84C]" /> WhatsApp
          </a>
          <div className="glass-box flex items-center gap-3 p-4 text-sm text-[#E5E5E5]">
            <FiMapPin className="text-[#C9A84C]" /> {personalInfo.location}
          </div>
        </motion.div>
      </div>
    </section>
  );
}