import { useState } from "react";
import { site } from "@/lib/data";

const field =
  "w-full rounded-xl border border-rose/20 bg-cream px-4 py-3 font-body text-sm text-forest placeholder:text-forest/40 focus:border-rose focus:outline-none focus:ring-2 focus:ring-coral/40";
const label =
  "mb-1.5 block font-body text-xs font-bold uppercase tracking-wider text-forest/70";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    occasion: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  // No backend required: composes an email via the visitor's mail client.
  // To collect submissions automatically, swap this for a Formspree/EmailJS POST.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `New enquiry from ${form.name || "website visitor"}${
      form.occasion ? ` · ${form.occasion}` : ""
    }`;
    const body = `Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Occasion: ${form.occasion}

Message:
${form.message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-rose/10 bg-cream p-6 shadow-sm md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="c-name">
            Name
          </label>
          <input
            id="c-name"
            className={field}
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className={label} htmlFor="c-email">
            Email
          </label>
          <input
            id="c-email"
            type="email"
            className={field}
            value={form.email}
            onChange={update("email")}
            placeholder="you@email.com"
            required
          />
        </div>
        <div>
          <label className={label} htmlFor="c-phone">
            Phone
          </label>
          <input
            id="c-phone"
            type="tel"
            className={field}
            value={form.phone}
            onChange={update("phone")}
            placeholder="0801 234 5678"
          />
        </div>
        <div>
          <label className={label} htmlFor="c-occasion">
            Occasion
          </label>
          <input
            id="c-occasion"
            className={field}
            value={form.occasion}
            onChange={update("occasion")}
            placeholder="e.g. Birthday, Wedding"
          />
        </div>
      </div>
      <div className="mt-5">
        <label className={label} htmlFor="c-message">
          Message
        </label>
        <textarea
          id="c-message"
          rows={5}
          className={field}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us what you have in mind…"
          required
        />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose px-7 py-4 font-body text-sm font-bold text-cream transition-colors hover:bg-rose-deep sm:w-auto"
      >
        Send enquiry
      </button>
      {sent && (
        <p className="mt-3 font-body text-xs font-normal text-forest/60">
          Your email app should now be open with your message ready to send.
          Prefer WhatsApp? Use the button on the left.
        </p>
      )}
    </form>
  );
}
