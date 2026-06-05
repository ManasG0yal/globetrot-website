const LENGTH = 200;
const THICKNESS = 40;
const SQRT = 0.86602540378;

const RAW_W = LENGTH + THICKNESS;
const RAW_H = (LENGTH + 3 * THICKNESS) * SQRT;

const ARMS = [
  { rot: "rotateZ(0deg)",   color: "hsla(42,60%,55%,1)" },
  { rot: "rotateZ(120deg)", color: "hsla(42,60%,35%,1)" },
  { rot: "rotateZ(240deg)", color: "hsla(42,60%,75%,1)" },
];

interface PenroseLogoProps {
  className?: string;
  size?: number;
}

export default function PenroseLogo({ className = "w-10 h-10", size = 40 }: PenroseLogoProps) {
  const scale = size / Math.max(RAW_W, RAW_H);

  return (
    <div className={className} style={{ position: "relative", overflow: "visible", flexShrink: 0 }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: RAW_W,
          height: RAW_H,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
      >
        {ARMS.map(({ rot, color }) => (
          <div
            key={rot}
            style={{
              position: "absolute",
              width: RAW_W,
              height: RAW_H,
              boxSizing: "content-box",
              transformOrigin: "50% 66.666666%",
              transform: rot,
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: LENGTH - THICKNESS,
                height: THICKNESS * SQRT,
                transformOrigin: "0% 100%",
                transform: `translateX(${THICKNESS}px) rotate(-60deg) skewX(-30deg)`,
                background: color,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: LENGTH + THICKNESS,
                height: THICKNESS * SQRT,
                transformOrigin: "100% 100%",
                transform: "skewX(-30deg)",
                background: color,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
