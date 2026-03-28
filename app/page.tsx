"use client";

import "./globals.css";
import { useState } from "react";

const REELS = [
  { name: "reel_6_16", label: "First Sale — $30 to Joey" },
  { name: "reel_6_17", label: "Lucario Pickup — $15 Deal" },
  { name: "reel_6_18", label: "Don Reveal — Group Reaction" },
  { name: "reel_6_19", label: "Trade Negotiation" },
  { name: "reel_6_21", label: "Collection Showcase" },
  { name: "reel_6_22", label: "Coin Flip Challenge" },
  { name: "reel_6_23", label: "Pack Opening Hype" },
  { name: "reel_6_24", label: "Vendor Life Behind the Table" },
  { name: "reel_6_25", label: "Convention Energy" },
];

export default function Home() {
  const [modalVideo, setModalVideo] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <div className="hero">
        <h1>
          Editor<span>Bot</span>
        </h1>
        <p className="tagline">
          AI video editor that turns raw convention footage into platform-ready
          reels. Upload once, get a week of content.
        </p>
        <div className="stats">
          <div className="stat">
            <div className="stat-val" style={{ color: "var(--teal)" }}>20:54</div>
            <div className="stat-label">Input Video</div>
          </div>
          <div className="stat">
            <div className="stat-val" style={{ color: "var(--gold)" }}>9</div>
            <div className="stat-label">Reels Created</div>
          </div>
          <div className="stat">
            <div className="stat-val" style={{ color: "var(--green)" }}>10</div>
            <div className="stat-label">Clips Detected</div>
          </div>
          <div className="stat">
            <div className="stat-val" style={{ color: "var(--rose)" }}>1</div>
            <div className="stat-label">Skipped (Low Score)</div>
          </div>
        </div>
        <div className="scroll-hint">scroll to see the results ↓</div>
      </div>

      {/* Before / After */}
      <div className="section">
        <div className="section-label" style={{ color: "var(--teal)" }}>
          Before &amp; After
        </div>
        <h2>21 Minutes In, 9 Reels Out</h2>
        <p className="lead">
          Raw horizontal booth footage from HYPE-CON Bay Area, transformed into
          vertical reels with word-by-word captions, smart crop, overlays, and
          brand watermark. The AI scored each moment and kept only the best.
        </p>
        <div className="compare">
          <div className="compare-card">
            <iframe
              width="100%"
              style={{ aspectRatio: "16/9" }}
              src="https://www.youtube.com/embed/IKS89VMWG9k"
              title="HYPE-CON Bay Area Vendor POV — Original"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="info">
              <div className="badge badge-before">Before</div>
              <h3>Raw Booth Footage (Full 21 min)</h3>
              <p>20:54 · Horizontal · No captions · No crop</p>
            </div>
          </div>
          <div className="compare-card">
            <video
              controls
              preload="metadata"
              playsInline
              src="/videos/reel_6_16.mp4"
            />
            <div className="info">
              <div className="badge badge-after">After</div>
              <h3>First Sale — $30 to Joey</h3>
              <p>24s · Vertical 9:16 · Bold captions · @PokeBowl</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reel Gallery */}
      <div className="section">
        <div className="section-label" style={{ color: "var(--gold)" }}>
          All Reels
        </div>
        <h2>Every Reel from One Video</h2>
        <p className="lead">
          Click any reel to watch it. Each one was auto-detected, scored,
          cropped, captioned, and rendered by the pipeline.
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
                src={`/videos/${reel.name}.mp4#t=0.1`}
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
      </div>

      {/* Pipeline */}
      <div className="section">
        <div className="section-label" style={{ color: "var(--rose)" }}>
          How It Works
        </div>
        <h2>The Pipeline</h2>
        <p className="lead">
          Every reel goes through 8 steps. No manual editing, no templates, no
          CapCut. Upload your footage and review what the AI found.
        </p>
        <div className="pipeline-steps">
          {[
            { num: "1", label: "Detect speech", color: "var(--gold)" },
            { num: "2", label: "Whisper transcribe", color: "var(--teal)" },
            { num: "3", label: "YOLOv8 smart crop", color: "var(--rose)" },
            { num: "4", label: "LLM scoring", color: "var(--gold)" },
            { num: "5", label: "Jump cut dead air", color: "var(--teal)" },
            { num: "6", label: "Remotion render", color: "var(--green)" },
            { num: "7", label: "Audio enhance", color: "var(--rose)" },
            { num: "8", label: "Platform export", color: "var(--gold)" },
          ].map((step) => (
            <div key={step.num} className="p-step" style={{ borderBottomColor: step.color }}>
              <div className="num" style={{ color: step.color }}>{step.num}</div>
              <div className="label">{step.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Source */}
      <div className="section" style={{ textAlign: "center" }}>
        <p className="lead" style={{ margin: "0 auto" }}>
          Source video:{" "}
          <a
            href="https://youtube.com/watch?v=IKS89VMWG9k"
            target="_blank"
            rel="noopener"
            style={{ color: "var(--teal)" }}
          >
            HYPE-CON Bay Area Vendor POV
          </a>{" "}
          by PokeBowl
        </p>
      </div>

      {/* Footer */}
      <div className="footer">
        Built with{" "}
        <a href="https://github.com/vnakhate/botworld">EditorBot</a> — part of
        the Botworld platform.
      </div>

      {/* Modal */}
      {modalVideo && (
        <div className="modal open" onClick={() => setModalVideo(null)}>
          <button className="modal-close" onClick={() => setModalVideo(null)}>
            ×
          </button>
          <video
            controls
            autoPlay
            playsInline
            src={modalVideo}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
