"use client";

// app/not-found.js
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_45%)]" />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <section className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        {/* Badge */}
        <div className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm backdrop-blur">
          Error 404
        </div>

        {/* Title */}
        <h1 className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-7xl font-black tracking-tight text-transparent sm:text-8xl">
          Lost in Space
        </h1>

        <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-400">
          The page you’re looking for doesn’t exist, was moved, or drifted into
          another galaxy.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
          >
            <Home size={18} />
            Back Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Decorative Orbit */}
        <div className="relative mt-16 flex items-center justify-center">
          <div className="absolute h-40 w-40 animate-spin rounded-full border border-dashed border-indigo-500/40" />
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 shadow-[0_0_60px_rgba(99,102,241,0.6)]" />
        </div>
      </section>
    </main>
  );
}
