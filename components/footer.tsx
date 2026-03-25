import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#e8f3d6] text-black">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/DapurManisLogo.svg"
                alt="Dapur Manis"
                width={110}
                height={52}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-black/65">
              Homemade desserts for everyday orders and special moments.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-black/75 transition-colors hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="h-px w-full bg-black/10" />

        <div className="flex flex-col gap-2 text-sm text-black/65 sm:flex-row sm:items-center sm:justify-between">
          <p>Freshly baked by Dapur Manis.</p>
          <p>WhatsApp and Instagram orders available daily.</p>
        </div>

        <p className="text-xs tracking-[0.08em] text-black/45 uppercase">
          AshFTW — Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
