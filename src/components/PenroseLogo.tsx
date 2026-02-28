interface PenroseLogoProps {
  className?: string;
}

export default function PenroseLogo({ className = "w-10 h-10" }: PenroseLogoProps) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Penrose Triangle - Impossible Triangle */}
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#D4B85A" />
        </linearGradient>
      </defs>
      
      {/* Main Penrose Triangle Shape */}
      <g transform="translate(50, 50)">
        {/* Bottom Left Face */}
        <path
          d="M -20,15 L -35,35 L 0,35 L 15,15 Z"
          fill="url(#goldGradient)"
          opacity="1"
        />
        
        {/* Bottom Right Face */}
        <path
          d="M 15,15 L 0,35 L 35,35 L 20,15 Z"
          fill="#B89640"
          opacity="0.85"
        />
        
        {/* Left Top Face */}
        <path
          d="M -20,15 L -20,-20 L -5,-25 L -5,10 Z"
          fill="#E8D48B"
          opacity="0.95"
        />
        
        {/* Right Top Face */}
        <path
          d="M 20,15 L 5,10 L 5,-25 L 20,-20 Z"
          fill="#C9A84C"
          opacity="0.9"
        />
        
        {/* Top Center Face */}
        <path
          d="M -5,-25 L 0,-40 L 5,-25 Z"
          fill="url(#goldGradient)"
          opacity="1"
        />
        
        {/* Inner triangle cutout (creates the impossible effect) */}
        <path
          d="M -5,10 L 0,0 L 5,10 Z"
          fill="#0A1628"
          opacity="1"
        />
        
        {/* Edge highlights for 3D effect */}
        <path
          d="M -20,-20 L -5,-25 L 0,-40"
          stroke="#F5E6A8"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        
        <path
          d="M 20,-20 L 5,-25 L 0,-40"
          stroke="#F5E6A8"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
      </g>
    </svg>
  );
}
