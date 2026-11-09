"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import BookButton from "./BookButton";

const NAV = [
  { href: "/services", label: "The system" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/work", label: "Our work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const path = usePathname();
  return (
    <header>
      <div className="wrap nav">
        <Link className="logo" href="/" aria-label="Booked Town home">
          <Image src="/logo.png" alt="Booked Town" width={149} height={46} priority />
        </Link>
        <ul>
          {NAV.map((n) => (
            <li key={n.href}>
              <Link href={n.href} aria-current={path === n.href || path.startsWith(n.href + "/") ? "page" : undefined}>{n.label}</Link>
            </li>
          ))}
        </ul>
        <BookButton className="btn">Book a free call</BookButton>
      </div>
    </header>
  );
}
