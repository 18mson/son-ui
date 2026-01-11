"use client";

import { ArrowRight, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {


  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
          <Sparkles className="w-4 h-4" />
          <span>No CLI. No package install. No framework lock-in.</span>
        </div>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Son UI
        </h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Copy-paste React components built with Tailwind CSS.
          <br />
          Subtle animations. Zero lock-in.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/docs" className="group px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg hover:pr-8 active:scale-95">
            <span className="flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
          <Link href="/components" className="group relative px-6 py-3 rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="w-4 h-4 transition-transform group-hover:rotate-12" />
              View Components
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-5xl px-6 grid gap-6 sm:grid-cols-3 text-center">
          <div>
            <h3 className="font-medium">No CLI</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Just Tailwind and React. Nothing else.
            </p>
          </div>
          <div>
            <h3 className="font-medium">Subtle Motion</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Micro-interactions that feel polished, not flashy.
            </p>
          </div>
          <div>
            <h3 className="font-medium">Production Ready</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Accessible, themeable, and easy to maintain.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
