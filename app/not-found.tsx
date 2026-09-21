import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32 flex items-center justify-center bg-gray-50 min-h-[65vh]">
      <Container className="max-w-xl text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-navy-100 text-navy-800 mb-6">
          <Compass className="w-8 h-8 text-green-700 animate-spin" style={{ animationDuration: "12s" }} />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-green-700 block mb-2">
          404 — PAGE NOT FOUND
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-heading mb-4">
          Engineering Destination Not Located
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed">
          The requested URL does not correspond to an active EKOSYS Corporation page or may have been relocated.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-sm font-semibold transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 hover:border-gray-300 text-navy-900 text-sm font-semibold transition-all"
          >
            <span>Contact Helpdesk</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
