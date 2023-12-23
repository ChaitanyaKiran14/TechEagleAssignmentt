import React from "react";

const Person = ({ progress }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 60"
    width="40"
    height="60"
    style={{ position: "absolute", left: progress }}
  >
    {/* Head */}
    <circle cx="20" cy="15" r="10" fill="#f0d0b5" />

    {/* Body - Leaning forward slightly */}
    <rect x="18" y="25" width="4" height="15" transform="rotate(-5 20 32.5)" fill="#3498db" />

    {/* Legs - Bent at angles, creating a running stride */}
    <path d="M18 40 L16 47 20 47 Z" fill="#3498db" />
    <path d="M22 40 L20 47 24 47 Z" fill="#3498db" />


    {/* Arms - Bent at elbows, swinging back and forth */}
    <path d="M18 28 L16 35 14 32" stroke="#3498db" strokeWidth="2" />
    <path d="M22 28 L24 35 26 32" stroke="#3498db" strokeWidth="2" />

    {/* Eyes */}

    <circle cx="18" cy="12" r="1" fill="#000" />
    <circle cx="22" cy="12" r="1" fill="#000" />

    {/* Mouth */}
    <path d="M18 17 Q20 18, 22 17" fill="transparent" stroke="#000" />
  </svg>
);

export default Person;
