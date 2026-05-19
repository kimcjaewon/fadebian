import { shop } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-ink-950 border-t border-ink-700">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink-500">
        <div className="font-display text-xl font-black text-ink-100">
          {shop.name}<span className="text-accent">.</span>
        </div>
        <div>© {new Date().getFullYear()} {shop.legalName}. All rights reserved.</div>
        <a href={shop.instagramUrl} className="hover:text-ink-100 transition">{shop.instagram}</a>
      </div>
    </footer>
  );
}
