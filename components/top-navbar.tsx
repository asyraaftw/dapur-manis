import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function TopNavbar() {
  return (
    <header className="bg-rose-200 text-black">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/DapurManisLogo.svg"
            alt="Dapur Manis"
            width={96}
            height={48}
            priority
            className="h-30 w-auto"
          />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className="px-3 text-sm text-black hover:bg-black/5"
              asChild
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>
        <Button className="px-4 text-sm" asChild>
          <Link href="#contact">Order Now</Link>
        </Button>
      </div>
    </header>
  );
}
