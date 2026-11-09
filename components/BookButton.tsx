import Link from "next/link";
import { BOOKING_URL } from "../lib/config";

export default function BookButton({ className = "btn", children }: { className?: string; children: React.ReactNode }) {
  if (BOOKING_URL) {
    return <a className={className} href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{children}</a>;
  }
  return <Link className={className} href="/contact">{children}</Link>;
}
