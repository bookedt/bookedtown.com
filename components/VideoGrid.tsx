"use client";
import { useState } from "react";
import { Play } from "lucide-react";
import type { Video } from "../lib/videos";

function embedUrl(v: Video) {
  return v.provider === "youtube"
    ? `https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`
    : `https://player.vimeo.com/video/${v.id}?autoplay=1`;
}

export default function VideoGrid({ videos }: { videos: Video[] }) {
  const [playing, setPlaying] = useState<string | null>(null);
  return (
    <div className="vgrid">
      {videos.map((v) => {
        const key = v.provider + v.id;
        const on = playing === key;
        return (
          <figure className="vcard" key={key}>
            <div className="vframe">
              {on ? (
                <iframe
                  src={embedUrl(v)}
                  title={`Video testimonial from ${v.name}`}
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              ) : (
                <button type="button" className="vplay" onClick={() => setPlaying(key)} aria-label={`Play video testimonial from ${v.name}`}>
                  <img src={v.thumb} alt="" loading="lazy" width={640} height={360} />
                  <span className="vbtn"><Play size={22} fill="currentColor" aria-hidden="true" /></span>
                </button>
              )}
            </div>
            <figcaption>
              <b>{v.name}</b>
              <span>Video review{v.note ? ` · ${v.note}` : ""}</span>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
