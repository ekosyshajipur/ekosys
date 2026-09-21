"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error boundary caught:", error);
  }, [error]);

  return (
    <div className="py-24 sm:py-32 flex items-center justify-center bg-gray-50 min-h-[65vh]">
      <Container className="max-w-xl text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-100 text-red-700 mb-6">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-red-600 block mb-2">
          SYSTEM NOTICE
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-heading mb-4">
          An Unexpected Error Occurred
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed">
          Our engineering monitors have logged this exception. You may retry reloading the requested module or navigate back to the home portal.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-700 hover:bg-green-800 text-white text-sm font-semibold transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Retry Operation</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 hover:border-gray-300 text-navy-900 text-sm font-semibold transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
