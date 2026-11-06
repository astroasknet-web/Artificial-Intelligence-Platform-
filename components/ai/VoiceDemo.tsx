"use client";

import { useEffect, useRef, useState } from "react";
import { SAMPLE_CALL } from "@/lib/ai/content";

/** A sample call that plays line by line. Press play to replay it. Shows the full call without motion. */
export default function VoiceDemo() {
  const [shown, setShown] = useState(SAMPLE_CALL.length);
  const [playing, setPlaying] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
    setPlaying(false);
  };

  const play = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    stop();
    setShown(0);
    setPlaying(true);
    let n = 0;
    timer.current = setInterval(() => {
      n += 1;
      setShown(n);
      if (n >= SAMPLE_CALL.length) stop();
    }, 1700);
  };

  useEffect(() => {
    // play once on first view, unless the visitor prefers reduced motion
    const t = setTimeout(play, 900);
    return () => {
      clearTimeout(t);
      stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="vd">
      <div className="vd-head">
        <button type="button" className="vd-play" onClick={playing ? stop : play} aria-label={playing ? "Pause the sample call" : "Replay the sample call"}>
          {playing ? (
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="2" width="3.5" height="12" rx="1" fill="currentColor" /><rect x="9.5" y="2" width="3.5" height="12" rx="1" fill="currentColor" /></svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5v11l9-5.5z" fill="currentColor" /></svg>
          )}
        </button>
        <div>
          <b>Inbound lead call</b>
          <small>Sample conversation. Illustrative.</small>
        </div>
        <span className={`vd-wave${playing ? " on" : ""}`} aria-hidden="true">
          {Array.from({ length: 9 }, (_, i) => (
            <i key={i} style={{ "--d": `${i * 0.11}s` } as React.CSSProperties} />
          ))}
        </span>
      </div>
      <ol className="vd-log" aria-live="polite" aria-label="Sample call transcript">
        {SAMPLE_CALL.map(([who, line], i) => (
          <li key={i} className={`vd-${who}${i < shown ? " in" : ""}`}>
            <b>{who === "agent" ? "Yugty Voice" : "Marcus"}</b>
            <span>{line}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
