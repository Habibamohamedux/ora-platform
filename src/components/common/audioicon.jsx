import React, { useState } from 'react';
import './audioicon.css';

const AudioIcon = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <button 
      className={`audio-btn ${isPlaying ? 'active' : ''}`} 
      onClick={() => setIsPlaying(!isPlaying)}
      aria-label="Toggle Audio"
    >
      <svg 
        viewBox="0 0 24 24" 
        className="icon-svg"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {isPlaying ? (
          /* A longer, repeating path for a seamless scroll */
          <path 
            className="wave-path" 
            d="M-24 12c2 0 3-3 5-3s3 3 5 3 3-3 5-3 3 3 5 3 3-3 5-3 3 3 5 3 3-3 5-3 3 3 5 3 3-3 5-3 3 3 5 3 3-3 5-3 3 3 5 3" 
          />
        ) : (
          /* Simple Dash when muted */
          <line x1="8" y1="12" x2="16" y2="12" />
        )}
      </svg>
    </button>
  );
};

export default AudioIcon;