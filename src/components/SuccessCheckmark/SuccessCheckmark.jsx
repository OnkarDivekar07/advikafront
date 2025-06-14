import React from 'react';

export default function SuccessCheckmark() {
  return (
    <svg className="w-32 h-32 mb-8" viewBox="0 0 52 52" aria-hidden="true" role="img" aria-label="Success checkmark">
      <circle className="checkmark-circle" cx="26" cy="26" r="25" />
      <path className="checkmark" d="M14 27l7 7 16-16" />
      <style jsx>{`
        .checkmark-circle {
          stroke: #3DF4A6;
          stroke-width: 8;
          stroke-miterlimit: 10;
          fill: none;
          animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }
        .checkmark {
          stroke: #3DF4A6;
          stroke-width: 8;
          stroke-linecap: round;
          stroke-linejoin: round;
          fill: none;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: stroke 0.4s 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }
        @keyframes stroke {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </svg>
  );
}
