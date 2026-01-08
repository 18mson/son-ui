"use client";

import { ArrowRight, Sparkles, X, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

      {/* Components Preview */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-semibold text-center">
            Components
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            <button className="group relative px-6 py-3 rounded-lg bg-slate-900 text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-2xl active:scale-95">
              <span className="relative z-10">Hover Me</span>
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
            <div className="group bg-white rounded-2xl p-6 shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Title</h3>
              <p className="text-slate-600">Description</p>
            </div>
            <button className="relative px-6 py-3 rounded-full cursor-pointer bg-teal-600 text-white font-medium overflow-hidden transition-all duration-300 hover:bg-teal-700 active:scale-95 before:absolute before:inset-0 before:bg-white/20 before:rounded-full before:scale-0 hover:before:scale-100 before:transition-transform before:duration-500" onClick={openModal}>
              <span className="relative z-10">Open Modal</span>
            </button>
            {isModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                  className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
                  onClick={closeModal}
                />
                <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all duration-200 active:scale-90"
                  >
                    <X className="w-5 h-5" />
                  </button>
      
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 animate-in zoom-in duration-500 delay-100">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 animate-in slide-in-from-bottom-2 duration-500 delay-150">
                      Beautiful Modal
                    </h3>
                    <p className="text-slate-600 animate-in slide-in-from-bottom-2 duration-500 delay-200">
                      Notice the smooth entrance animation, backdrop blur, and the way each element animates in sequence.
                    </p>
                  </div>
      
                  <div className="flex gap-3 animate-in slide-in-from-bottom-2 duration-500 delay-300">
                    <button
                      onClick={closeModal}
                      className="flex-1 px-4 py-3 rounded-lg border-2 border-slate-200 text-slate-700 font-medium transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 active:scale-95"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={closeModal}
                      className="flex-1 px-4 py-3 rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 text-white font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 active:scale-95"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
