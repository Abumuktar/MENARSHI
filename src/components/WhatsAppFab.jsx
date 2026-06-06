import { waLink } from "@/lib/data";

export function WhatsAppIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16 3C9 3 3.3 8.7 3.3 15.7c0 2.3.6 4.5 1.8 6.4L3 29l7.1-1.9c1.9 1 4 1.6 6.1 1.6 7 0 12.7-5.7 12.7-12.7C28.9 8.7 23.2 3 16 3Zm0 23.1c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-4.2 1.1 1.1-4.1-.3-.4c-1.1-1.7-1.6-3.6-1.6-5.6C5.4 9.9 10.1 5.3 16 5.3c5.8 0 10.5 4.7 10.5 10.4 0 5.8-4.7 10.4-10.5 10.4Zm5.8-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-1.9-.9-3.1-1.7-4.4-3.8-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.3 4.7 2 .8 2.7.9 3.7.8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4Z" />
    </svg>
  );
}

export default function WhatsAppFab() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral md:h-16 md:w-16"
    >
      <WhatsAppIcon className="h-7 w-7 md:h-8 md:w-8" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20" />
    </a>
  );
}
