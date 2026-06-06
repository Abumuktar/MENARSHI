import { useState } from "react";
import { site } from "@/lib/data";
import { WhatsAppIcon } from "./WhatsAppFab";

const occasionOptions = [
  "Birthday",
  "Wedding",
  "Bridal",
  "Corporate",
  "Anniversary",
  "Just Because",
  "Other",
];
const budgetOptions = [
  "Under ₦30,000",
  "₦30,000 – ₦60,000",
  "₦60,000 – ₦100,000",
  "₦100,000+",
];

const field =
  "w-full rounded-xl border border-rose/20 bg-cream px-4 py-3 font-body text-sm text-forest placeholder:text-forest/40 focus:border-rose focus:outline-none focus:ring-2 focus:ring-coral/40";
const label = "mb-1.5 block font-body text-xs font-bold uppercase tracking-wider text-forest/70";

export default function CustomizeForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    occasion: "",
    budget: "",
    requests: "",
  });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello Meenarshi's Gift Gallery! I'd like to request a custom gift.

Name: ${form.name || "-"}
Phone/WhatsApp: ${form.phone || "-"}
Occasion: ${form.occasion || "-"}
Budget: ${form.budget || "-"}
Special requests: ${form.requests || "-"}`;
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-rose/10 bg-blush/50 p-6 shadow-sm md:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            className={field}
            value={form.name}
            onChange={update("name")}
            placeholder="e.g. Ameenah"
            required
          />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            type="tel"
            className={field}
            value={form.phone}
            onChange={update("phone")}
            placeholder="e.g. 0801 234 5678"
            required
          />
        </div>
        <div>
          <label className={label} htmlFor="occasion">
            Occasion
          </label>
          <select
            id="occasion"
            className={field}
            value={form.occasion}
            onChange={update("occasion")}
            required
          >
            <option value="" disabled>
              Select an occasion
            </option>
            {occasionOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="budget">
            Budget range
          </label>
          <select
            id="budget"
            className={field}
            value={form.budget}
            onChange={update("budget")}
            required
          >
            <option value="" disabled>
              Select a budget
            </option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label className={label} htmlFor="requests">
          Special requests
        </label>
        <textarea
          id="requests"
          rows={4}
          className={field}
          value={form.requests}
          onChange={update("requests")}
          placeholder="Tell us names, messages, colours, delivery date, or anything special…"
        />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-7 py-4 font-body text-sm font-bold text-cream transition-colors hover:bg-forest-deep sm:w-auto"
      >
        <WhatsAppIcon className="h-4 w-4" />
        Send my request via WhatsApp
      </button>
      <p className="mt-3 font-body text-xs font-normal text-forest/50">
        This opens WhatsApp with your details pre-filled — just hit send and
        we&rsquo;ll take it from there.
      </p>
    </form>
  );
}
