"use client";
// components/ui/OilDrop.tsx
// SVG goutte d'huile — motif récurrent NIOTO

interface OilDropProps {
  className?: string;
  size?: number;
  color?: string;
  animated?: boolean;
}

export function OilDrop({ className = "", size = 48, color = "var(--nioto-or)", animated = false }: OilDropProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {animated && (
        <style>{`
          @keyframes dropFall {
            0% { transform: translateY(-20px); opacity: 0; }
            60% { transform: translateY(4px); opacity: 1; }
            80% { transform: translateY(-2px); }
            100% { transform: translateY(0); opacity: 1; }
          }
          .oil-drop-anim { animation: dropFall 1.2s cubic-bezier(0.23, 1, 0.32, 1) both; }
        `}</style>
      )}
      <path
        className={animated ? "oil-drop-anim" : ""}
        d="M20 2 C20 2, 2 22, 2 33 C2 43 10.5 50 20 50 C29.5 50 38 43 38 33 C38 22 20 2 20 2Z"
        fill={color}
        fillOpacity="0.18"
      />
      <path
        d="M20 2 C20 2, 2 22, 2 33 C2 43 10.5 50 20 50 C29.5 50 38 43 38 33 C38 22 20 2 20 2Z"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      {/* Reflet */}
      <path
        d="M14 22 C13 26 12 30 13 35"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
