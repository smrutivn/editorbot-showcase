"use client";

import "./globals.css";
import { useState, useEffect, useRef } from "react";

const REELS = [
  { name: "reel_6_16", label: "First Sale" },
  { name: "reel_6_17", label: "Card Pickup" },
  { name: "reel_6_18", label: "Big Reveal — Group Reaction" },
  { name: "reel_6_19", label: "Trade Negotiation" },
  { name: "reel_6_21", label: "Collection Showcase" },
  { name: "reel_6_22", label: "Coin Flip Challenge" },
  { name: "reel_6_23", label: "Pack Opening Hype" },
  { name: "reel_6_24", label: "Vendor Life Behind the Table" },
  { name: "reel_6_25", label: "Convention Energy" },
];

const STEPS = [
  { num: "1", label: "Detect speech" },
  { num: "2", label: "Transcribe audio" },
  { num: "3", label: "Smart crop" },
  { num: "4", label: "AI scoring" },
  { num: "5", label: "Jump cut dead air" },
  { num: "6", label: "Render clips" },
  { num: "7", label: "Audio enhance" },
  { num: "8", label: "Platform export" },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-in");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Section({ children, label, className = "" }: {
  children: React.ReactNode;
  label?: string;
  className?: string;
}) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`section ${className}`} style={{ opacity: 0 }}>
      {label && (
        <div className="section-label">{label}</div>
      )}
      {children}
    </div>
  );
}

export default function Home() {
  const [modalVideo, setModalVideo] = useState<string | null>(null);

  useEffect(() => {
    if (modalVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [modalVideo]);

  return (
    <>
      {/* ── Hero ── */}
      <div className="hero">
        <h1 className="animate-in" style={{ animationDelay: "0.1s" }}>
          Editor<span>Bot</span>
        </h1>
        <p className="tagline animate-in" style={{ animationDelay: "0.25s" }}>
          One video in. Nine reels out.
          <br />
          AI that edits convention footage into content.
        </p>
        <div className="stats animate-in" style={{ animationDelay: "0.4s" }}>
          <div className="stat">
            <div className="stat-val">20:54</div>
            <div className="stat-label">Input</div>
          </div>
          <div className="stat">
            <div className="stat-val">9</div>
            <div className="stat-label">Reels</div>
          </div>
          <div className="stat">
            <div className="stat-val">10</div>
            <div className="stat-label">Clips</div>
          </div>
          <div className="stat">
            <div className="stat-val">1</div>
            <div className="stat-label">Skipped</div>
          </div>
        </div>
        <div className="scroll-hint">Scroll to see results</div>
      </div>

      {/* ── Before / After ── */}
      <Section label="Before & After">
        <h2>21 minutes in, 9 reels out</h2>
        <p className="lead">
          Raw booth footage from a trading card convention, transformed into
          vertical reels with captions, smart crop, and brand watermark.
        </p>
        <div className="compare">
          <div className="compare-card">
            <iframe
              width="100%"
              style={{ aspectRatio: "16/9" }}
              src="https://www.youtube.com/embed/IKS89VMWG9k"
              title="Convention Footage — Original"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="info">
              <div className="badge badge-before">Before</div>
              <h3>Raw Booth Footage</h3>
              <p>20:54 · Horizontal · No captions</p>
            </div>
          </div>
          <div className="compare-card">
            <video
              controls
              preload="metadata"
              playsInline
              poster="/thumbnails/reel_6_16.jpg"
              src="/videos/reel_6_16.mp4"
              style={{ aspectRatio: "16/9" }}
            />
            <div className="info">
              <div className="badge badge-after">After</div>
              <h3>First Sale</h3>
              <p>24s · Vertical 9:16 · Captions</p>
            </div>
          </div>
        </div>
      </Section>

      <div className="divider" />

      {/* ── Reel Gallery ── */}
      <Section label="All Reels">
        <h2>Every reel from one video</h2>
        <p className="lead">
          Each one was auto-detected, scored, cropped, captioned, and rendered.
        </p>
        <div className="reel-gallery">
          {REELS.map((reel) => (
            <div
              key={reel.name}
              className="reel-card"
              onClick={() => setModalVideo(`/videos/${reel.name}.mp4`)}
            >
              <video
                preload="metadata"
                poster={`/thumbnails/${reel.name}.jpg`}
                src={`/videos/${reel.name}.mp4`}
                muted
                playsInline
              />
              <div className="reel-info">
                <div className="reel-name">{reel.label}</div>
                <div className="reel-meta">{reel.name}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <div className="divider" />

      {/* ── Pipeline ── */}
      <Section label="How It Works">
        <h2>The pipeline</h2>
        <p className="lead">
          Eight steps. No manual editing, no templates.
          Upload footage, review what the AI found.
        </p>
        <div className="pipeline">
          {STEPS.map((step) => (
            <div key={step.num} className="p-step">
              <div className="num">{step.num}</div>
              <div className="step-label">{step.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Source ── */}
      <div className="source">
        <p>
          Sample footage from a trading card convention
        </p>
      </div>

      {/* ── Footer ── */}
      <div className="footer">
        Built with{" "}
        <a href="https://github.com/vnakhate/botworld">EditorBot</a>
        {" "}— Botworld
      </div>

      {/* ── Modal ── */}
      {modalVideo && (
        <div className="modal open" onClick={() => setModalVideo(null)}>
          <button className="modal-close" onClick={() => setModalVideo(null)}>
            ×
          </button>
          <video
            controls
            autoPlay
            playsInline
            poster={modalVideo.replace("/videos/", "/thumbnails/").replace(".mp4", ".jpg")}
            src={modalVideo}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
