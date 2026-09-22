import React from 'react';
import type { ElevatorPart } from '../types';

interface PartSchematicProps {
  type: ElevatorPart['schematicType'];
  className?: string;
}

export const PartSchematic: React.FC<PartSchematicProps> = ({ type, className = 'w-full h-44' }) => {
  const baseClasses = "relative flex items-center justify-center bg-neutral-950 border border-neutral-800/80 overflow-hidden group-hover:border-neutral-500 transition-colors";

  switch (type) {
    case 'traction-motor':
      return (
        <div className={`${baseClasses} ${className}`}>
          {/* Engineering Grid Accent */}
          <div className="absolute inset-0 bg-grid-pattern-dense opacity-20 pointer-events-none" />
          <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 stroke-neutral-200 fill-none stroke-[1.25]" strokeLinecap="round" strokeLinejoin="round">
            {/* Base plate */}
            <rect x="25" y="88" width="150" height="8" rx="1" fill="#171717" />
            <line x1="35" y1="96" x2="35" y2="102" />
            <line x1="165" y1="96" x2="165" y2="102" />
            {/* Motor body with cooling ribs */}
            <rect x="35" y="38" width="70" height="50" rx="3" fill="#121212" />
            <line x1="45" y1="38" x2="45" y2="88" strokeDasharray="2 3" opacity="0.6" />
            <line x1="55" y1="38" x2="55" y2="88" strokeDasharray="2 3" opacity="0.6" />
            <line x1="65" y1="38" x2="65" y2="88" strokeDasharray="2 3" opacity="0.6" />
            <line x1="75" y1="38" x2="75" y2="88" strokeDasharray="2 3" opacity="0.6" />
            <line x1="85" y1="38" x2="85" y2="88" strokeDasharray="2 3" opacity="0.6" />
            <line x1="95" y1="38" x2="95" y2="88" strokeDasharray="2 3" opacity="0.6" />
            {/* Terminal box on top */}
            <rect x="50" y="24" width="30" height="14" rx="1" fill="#262626" />
            <circle cx="65" cy="31" r="3" fill="#ffffff" />
            {/* Gearbox reduction housing */}
            <path d="M 105 44 L 140 32 L 140 90 L 105 88 Z" fill="#1a1a1a" />
            {/* Traction Sheave Pulley */}
            <circle cx="152" cy="62" r="26" fill="#0d0d0d" strokeWidth="1.75" />
            <circle cx="152" cy="62" r="21" strokeDasharray="4 2" opacity="0.7" />
            <circle cx="152" cy="62" r="7" fill="#404040" />
            {/* Steel wire ropes going down */}
            <path d="M 173 62 L 173 115 M 176 62 L 176 115 M 179 62 L 179 115" stroke="#737373" strokeWidth="1" />
            {/* Technical caliper dimension mark */}
            <text x="36" y="20" fill="#737373" fontSize="7" fontFamily="monospace">MOTOR 5.5kW / 400V</text>
            <text x="140" y="112" fill="#a3a3a3" fontSize="6.5" fontFamily="monospace">Ø 400mm SHEAVE</text>
          </svg>
          <div className="absolute top-2 right-2 text-[9px] font-mono text-neutral-400 bg-neutral-900/90 px-1.5 py-0.5 border border-neutral-800">
            CAD: ISO-GTM
          </div>
        </div>
      );

    case 'door-operator':
      return (
        <div className={`${baseClasses} ${className}`}>
          <div className="absolute inset-0 bg-grid-pattern-dense opacity-20 pointer-events-none" />
          <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 stroke-neutral-200 fill-none stroke-[1.25]" strokeLinecap="round" strokeLinejoin="round">
            {/* Header Track Beam */}
            <rect x="20" y="32" width="160" height="12" fill="#1a1a1a" />
            <line x1="20" y1="38" x2="180" y2="38" strokeDasharray="3 3" opacity="0.5" />
            {/* VVVF Drive Motor & Inverter Box */}
            <rect x="26" y="22" width="34" height="22" rx="2" fill="#262626" />
            <circle cx="36" cy="33" r="4" fill="#525252" />
            <circle cx="50" cy="33" r="2" fill="#ffffff" />
            {/* Pulleys & Synchronous Timing Belt */}
            <circle cx="65" cy="38" r="6" />
            <circle cx="170" cy="38" r="6" />
            <line x1="65" y1="32" x2="170" y2="32" stroke="#a3a3a3" strokeWidth="1" strokeDasharray="2 1" />
            <line x1="65" y1="44" x2="170" y2="44" stroke="#a3a3a3" strokeWidth="1" strokeDasharray="2 1" />
            {/* Door Carriage Hanger Panels (Center Opening 2-Panel) */}
            <rect x="70" y="48" width="28" height="42" fill="#121212" strokeWidth="1.5" />
            <circle cx="76" cy="46" r="3" fill="#404040" />
            <circle cx="92" cy="46" r="3" fill="#404040" />
            <rect x="104" y="48" width="28" height="42" fill="#121212" strokeWidth="1.5" />
            <circle cx="110" cy="46" r="3" fill="#404040" />
            <circle cx="126" cy="46" r="3" fill="#404040" />
            {/* Center Opening Arrows */}
            <path d="M 80 68 L 74 68 M 76 65 L 73 68 L 76 71" stroke="#ffffff" strokeWidth="1.5" />
            <path d="M 122 68 L 128 68 M 126 65 L 129 68 L 126 71" stroke="#ffffff" strokeWidth="1.5" />
            {/* Vane Clutch Cam */}
            <rect x="88" y="74" width="26" height="14" fill="#2b2b2b" strokeWidth="1" />
            {/* Text Specs */}
            <text x="26" y="16" fill="#737373" fontSize="7" fontFamily="monospace">OP 800mm VVVF HEADER</text>
            <text x="75" y="104" fill="#a3a3a3" fontSize="6.5" fontFamily="monospace">CENTER DUAL-PANEL</text>
          </svg>
          <div className="absolute top-2 right-2 text-[9px] font-mono text-neutral-400 bg-neutral-900/90 px-1.5 py-0.5 border border-neutral-800">
            CAD: DOS-800
          </div>
        </div>
      );

    case 'wire-rope':
      return (
        <div className={`${baseClasses} ${className}`}>
          <div className="absolute inset-0 bg-grid-pattern-dense opacity-20 pointer-events-none" />
          <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 stroke-neutral-200 fill-none stroke-[1.25]" strokeLinecap="round" strokeLinejoin="round">
            {/* Cross-section circle (Left) */}
            <circle cx="60" cy="60" r="38" strokeWidth="1.5" fill="#0d0d0d" />
            {/* Fiber core FC */}
            <circle cx="60" cy="60" r="14" fill="#262626" stroke="#525252" strokeDasharray="2 2" />
            <text x="52" y="63" fill="#a3a3a3" fontSize="7" fontFamily="monospace">+FC</text>
            {/* 8 Outer Strands */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x = 60 + Math.cos(rad) * 24;
              const y = 60 + Math.sin(rad) * 24;
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r="8.5" fill="#171717" stroke="#ffffff" strokeWidth="1" />
                  <circle cx={x} cy={y} r="2.5" fill="#737373" />
                </g>
              );
            })}
            {/* Helical 3D Rope Strand rendering (Right) */}
            <path d="M 125 30 C 135 40, 135 50, 125 60 C 115 70, 115 80, 125 90" stroke="#a3a3a3" strokeWidth="3" />
            <path d="M 137 30 C 147 40, 147 50, 137 60 C 127 70, 127 80, 137 90" stroke="#e5e5e5" strokeWidth="3" />
            <path d="M 149 30 C 159 40, 159 50, 149 60 C 139 70, 139 80, 149 90" stroke="#737373" strokeWidth="3" />
            <path d="M 161 30 C 171 40, 171 50, 161 60 C 151 70, 151 80, 161 90" stroke="#404040" strokeWidth="3" />
            {/* Dimension line */}
            <line x1="20" y1="60" x2="20" y2="98" stroke="#525252" />
            <line x1="18" y1="60" x2="22" y2="60" stroke="#525252" />
            <line x1="18" y1="98" x2="22" y2="98" stroke="#525252" />
            <text x="115" y="106" fill="#a3a3a3" fontSize="7" fontFamily="monospace">10mm 8x19S+FC</text>
            <text x="115" y="24" fill="#737373" fontSize="6.5" fontFamily="monospace">DUAL 1370/1770 N/mm²</text>
          </svg>
          <div className="absolute top-2 right-2 text-[9px] font-mono text-neutral-400 bg-neutral-900/90 px-1.5 py-0.5 border border-neutral-800">
            CAD: TWR-10
          </div>
        </div>
      );

    case 'overspeed-governor':
      return (
        <div className={`${baseClasses} ${className}`}>
          <div className="absolute inset-0 bg-grid-pattern-dense opacity-20 pointer-events-none" />
          <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 stroke-neutral-200 fill-none stroke-[1.25]" strokeLinecap="round" strokeLinejoin="round">
            {/* Cast Base Support */}
            <path d="M 70 95 L 130 95 L 125 105 L 65 105 Z" fill="#171717" />
            <line x1="90" y1="95" x2="90" y2="62" strokeWidth="3" stroke="#404040" />
            <line x1="110" y1="95" x2="110" y2="62" strokeWidth="3" stroke="#404040" />
            {/* Governor Pulley Wheel */}
            <circle cx="100" cy="55" r="34" strokeWidth="1.5" fill="#111111" />
            <circle cx="100" cy="55" r="28" strokeDasharray="3 3" opacity="0.6" />
            {/* Center axle & centrifugal weights */}
            <circle cx="100" cy="55" r="6" fill="#737373" />
            {/* Flyweights / linkage arms */}
            <path d="M 94 48 L 84 36" stroke="#ffffff" strokeWidth="2" />
            <circle cx="82" cy="34" r="5" fill="#ffffff" />
            <path d="M 106 62 L 116 74" stroke="#ffffff" strokeWidth="2" />
            <circle cx="118" cy="76" r="5" fill="#ffffff" />
            {/* Electrical Safety Trip Switch */}
            <rect x="136" y="38" width="22" height="24" rx="2" fill="#262626" />
            <path d="M 136 50 L 120 50" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="2 1" />
            <circle cx="147" cy="50" r="3" fill="#ff4444" stroke="none" />
            <text x="140" y="32" fill="#737373" fontSize="6.5" fontFamily="monospace">TRIP SW</text>
            <text x="65" y="18" fill="#a3a3a3" fontSize="7" fontFamily="monospace">RATED 1.0 - 1.6 m/s</text>
          </svg>
          <div className="absolute top-2 right-2 text-[9px] font-mono text-neutral-400 bg-neutral-900/90 px-1.5 py-0.5 border border-neutral-800">
            CAD: OSG-BD
          </div>
        </div>
      );

    case 'safety-gear':
      return (
        <div className={`${baseClasses} ${className}`}>
          <div className="absolute inset-0 bg-grid-pattern-dense opacity-20 pointer-events-none" />
          <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 stroke-neutral-200 fill-none stroke-[1.25]" strokeLinecap="round" strokeLinejoin="round">
            {/* Guide Rail Section in Center */}
            <rect x="94" y="15" width="12" height="90" fill="#262626" stroke="#737373" />
            <line x1="100" y1="15" x2="100" y2="105" strokeDasharray="2 2" stroke="#525252" />
            {/* Left Safety Gear Housing */}
            <path d="M 45 35 L 88 35 L 88 85 L 55 95 L 45 85 Z" fill="#141414" strokeWidth="1.5" />
            {/* Wedge / Roller block */}
            <path d="M 72 45 L 86 52 L 86 75 L 72 65 Z" fill="#404040" stroke="#ffffff" />
            <line x1="74" y1="52" x2="84" y2="58" stroke="#ffffff" strokeWidth="0.8" />
            <line x1="74" y1="60" x2="84" y2="66" stroke="#ffffff" strokeWidth="0.8" />
            {/* Right Safety Gear Housing */}
            <path d="M 155 35 L 112 35 L 112 85 L 145 95 L 155 85 Z" fill="#141414" strokeWidth="1.5" />
            <path d="M 128 45 L 114 52 L 114 75 L 128 65 Z" fill="#404040" stroke="#ffffff" />
            <line x1="126" y1="52" x2="116" y2="58" stroke="#ffffff" strokeWidth="0.8" />
            <line x1="126" y1="60" x2="116" y2="66" stroke="#ffffff" strokeWidth="0.8" />
            {/* Synchronizing Cross-Linkage Rod */}
            <line x1="35" y1="88" x2="165" y2="88" stroke="#ffffff" strokeWidth="2.5" />
            <circle cx="35" cy="88" r="4" fill="#737373" />
            <circle cx="165" cy="88" r="4" fill="#737373" />
            {/* Labels */}
            <text x="35" y="24" fill="#737373" fontSize="7" fontFamily="monospace">PROGRESSIVE WEDGES</text>
            <text x="75" y="112" fill="#a3a3a3" fontSize="6.5" fontFamily="monospace">RAIL BLADE 9-16mm</text>
          </svg>
          <div className="absolute top-2 right-2 text-[9px] font-mono text-neutral-400 bg-neutral-900/90 px-1.5 py-0.5 border border-neutral-800">
            CAD: PSG-1000
          </div>
        </div>
      );

    case 'hydraulic-buffer':
      return (
        <div className={`${baseClasses} ${className}`}>
          <div className="absolute inset-0 bg-grid-pattern-dense opacity-20 pointer-events-none" />
          <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 stroke-neutral-200 fill-none stroke-[1.25]" strokeLinecap="round" strokeLinejoin="round">
            {/* Base mounting flange */}
            <rect x="55" y="96" width="90" height="10" rx="1" fill="#171717" strokeWidth="1.5" />
            <circle cx="65" cy="101" r="2.5" fill="#404040" />
            <circle cx="135" cy="101" r="2.5" fill="#404040" />
            {/* Cylinder barrel */}
            <rect x="75" y="55" width="50" height="41" fill="#121212" strokeWidth="1.5" />
            {/* Oil level sight gauge on cylinder */}
            <rect x="80" y="65" width="6" height="20" rx="3" fill="#262626" stroke="#737373" />
            <line x1="81" y1="75" x2="85" y2="75" stroke="#ffffff" />
            {/* Hydraulic chrome piston rod */}
            <rect x="88" y="24" width="24" height="31" fill="#404040" stroke="#ffffff" strokeWidth="1.5" />
            {/* Rubber impact bumper top cap */}
            <rect x="82" y="16" width="36" height="8" rx="2" fill="#262626" stroke="#ffffff" />
            {/* Safety reset switch */}
            <rect x="127" y="68" width="16" height="14" rx="1" fill="#262626" />
            <circle cx="135" cy="75" r="2" fill="#ff4444" stroke="none" />
            {/* Stroke indication arrow */}
            <line x1="120" y1="24" x2="120" y2="55" stroke="#737373" strokeDasharray="2 2" />
            <text x="124" y="42" fill="#a3a3a3" fontSize="6.5" fontFamily="monospace">175mm STROKE</text>
            <text x="50" y="14" fill="#737373" fontSize="7" fontFamily="monospace">EN81 CERTIFIED BUFFER</text>
          </svg>
          <div className="absolute top-2 right-2 text-[9px] font-mono text-neutral-400 bg-neutral-900/90 px-1.5 py-0.5 border border-neutral-800">
            CAD: HYB-175
          </div>
        </div>
      );

    case 'operating-panel':
      return (
        <div className={`${baseClasses} ${className}`}>
          <div className="absolute inset-0 bg-grid-pattern-dense opacity-20 pointer-events-none" />
          <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 stroke-neutral-200 fill-none stroke-[1.25]" strokeLinecap="round" strokeLinejoin="round">
            {/* Brushed Stainless Steel Tower Panel */}
            <rect x="70" y="10" width="60" height="100" rx="2" fill="#141414" strokeWidth="1.5" />
            {/* Fastener bolts */}
            <circle cx="74" cy="14" r="1.5" fill="#525252" />
            <circle cx="126" cy="14" r="1.5" fill="#525252" />
            <circle cx="74" cy="106" r="1.5" fill="#525252" />
            <circle cx="126" cy="106" r="1.5" fill="#525252" />
            {/* 7-inch Color TFT Display */}
            <rect x="76" y="20" width="48" height="26" fill="#000000" stroke="#737373" />
            <text x="86" y="38" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="monospace">08</text>
            <path d="M 112 28 L 116 32 L 108 32 Z" fill="#ffffff" />
            {/* Braille Micro-pushbuttons */}
            <circle cx="88" cy="56" r="5" fill="#262626" stroke="#ffffff" />
            <text x="86" y="58" fill="#ffffff" fontSize="6" fontFamily="monospace">7</text>
            <circle cx="112" cy="56" r="5" fill="#262626" stroke="#ffffff" />
            <text x="110" y="58" fill="#ffffff" fontSize="6" fontFamily="monospace">8</text>
            <circle cx="88" cy="70" r="5" fill="#262626" stroke="#ffffff" />
            <text x="86" y="72" fill="#ffffff" fontSize="6" fontFamily="monospace">5</text>
            <circle cx="112" cy="70" r="5" fill="#262626" stroke="#ffffff" />
            <text x="110" y="72" fill="#ffffff" fontSize="6" fontFamily="monospace">6</text>
            {/* Emergency Alarm & Door Open */}
            <circle cx="88" cy="84" r="5" fill="#332200" stroke="#ffcc00" />
            <circle cx="112" cy="84" r="5" fill="#262626" stroke="#ffffff" />
            {/* Key Switch */}
            <rect x="94" y="94" width="12" height="8" rx="1" fill="#404040" />
            <circle cx="100" cy="98" r="1.5" fill="#ffffff" />
            <text x="20" y="60" fill="#737373" fontSize="6.5" fontFamily="monospace">AISI 304</text>
            <text x="136" y="60" fill="#737373" fontSize="6.5" fontFamily="monospace">EN81-70</text>
          </svg>
          <div className="absolute top-2 right-2 text-[9px] font-mono text-neutral-400 bg-neutral-900/90 px-1.5 py-0.5 border border-neutral-800">
            CAD: COP-TFT
          </div>
        </div>
      );

    case 'control-cabinet':
      return (
        <div className={`${baseClasses} ${className}`}>
          <div className="absolute inset-0 bg-grid-pattern-dense opacity-20 pointer-events-none" />
          <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 stroke-neutral-200 fill-none stroke-[1.25]" strokeLinecap="round" strokeLinejoin="round">
            {/* Cabinet Enclosure */}
            <rect x="45" y="12" width="110" height="96" rx="2" fill="#141414" strokeWidth="1.5" />
            <line x1="45" y1="22" x2="155" y2="22" stroke="#404040" />
            {/* Status LEDs & Breaker */}
            <circle cx="56" cy="17" r="2" fill="#22c55e" stroke="none" />
            <circle cx="64" cy="17" r="2" fill="#eab308" stroke="none" />
            <circle cx="72" cy="17" r="2" fill="#ef4444" stroke="none" />
            <text x="82" y="19" fill="#a3a3a3" fontSize="6" fontFamily="monospace">POWER ON / RUN</text>
            {/* VVVF Inverter Module (Left) */}
            <rect x="52" y="28" width="44" height="50" rx="1" fill="#1f1f1f" stroke="#737373" />
            <text x="56" y="38" fill="#ffffff" fontSize="6.5" fontFamily="monospace">VVVF DRIVE</text>
            <line x1="56" y1="44" x2="90" y2="44" stroke="#525252" strokeDasharray="1 1" />
            <rect x="56" y="48" width="36" height="12" fill="#000000" />
            <text x="62" y="56" fill="#22c55e" fontSize="7" fontFamily="monospace">50.0Hz</text>
            {/* DSP Main Board (Right) */}
            <rect x="102" y="28" width="46" height="50" rx="1" fill="#1a1a1a" stroke="#737373" />
            <text x="106" y="38" fill="#ffffff" fontSize="6.5" fontFamily="monospace">32-BIT DSP</text>
            {/* Microcontroller chip */}
            <rect x="116" y="44" width="18" height="18" fill="#0d0d0d" stroke="#ffffff" strokeWidth="0.75" />
            <line x1="116" y1="53" x2="134" y2="53" stroke="#525252" />
            {/* ARD Rescue Unit / Terminal Blocks (Bottom) */}
            <rect x="52" y="82" width="96" height="18" fill="#1c1c1c" stroke="#525252" />
            <text x="56" y="93" fill="#a3a3a3" fontSize="6" fontFamily="monospace">ARD RESCUE / RELAY BUS</text>
            {/* Terminal screws */}
            {[60, 72, 84, 96, 108, 120, 132].map((x, idx) => (
              <circle key={idx} cx={x} cy={95} r="1" fill="#ffffff" />
            ))}
          </svg>
          <div className="absolute top-2 right-2 text-[9px] font-mono text-neutral-400 bg-neutral-900/90 px-1.5 py-0.5 border border-neutral-800">
            CAD: ECC-380
          </div>
        </div>
      );

    case 'guide-shoe':
      return (
        <div className={`${baseClasses} ${className}`}>
          <div className="absolute inset-0 bg-grid-pattern-dense opacity-20 pointer-events-none" />
          <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 stroke-neutral-200 fill-none stroke-[1.25]" strokeLinecap="round" strokeLinejoin="round">
            {/* Elevator T-Rail Profile (Center) */}
            <path d="M 94 20 L 106 20 L 106 50 L 118 65 L 118 72 L 82 72 L 82 65 L 94 50 Z" fill="#262626" stroke="#ffffff" strokeWidth="1" />
            <line x1="100" y1="20" x2="100" y2="72" stroke="#525252" strokeDasharray="2 2" />
            {/* Polyurethane Liners Clamping the Blade */}
            <rect x="90" y="24" width="3" height="24" fill="#a3a3a3" />
            <rect x="107" y="24" width="3" height="24" fill="#a3a3a3" />
            <rect x="94" y="21" width="12" height="3" fill="#a3a3a3" />
            {/* Cast Iron Outer Guide Bracket */}
            <path d="M 50 32 L 86 32 L 86 56 L 68 85 L 35 85 L 50 56 Z" fill="#141414" strokeWidth="1.5" />
            <path d="M 150 32 L 114 32 L 114 56 L 132 85 L 165 85 L 150 56 Z" fill="#141414" strokeWidth="1.5" />
            {/* Slotted mounting holes */}
            <rect x="42" y="74" width="14" height="6" rx="3" fill="#404040" />
            <rect x="144" y="74" width="14" height="6" rx="3" fill="#404040" />
            {/* Automatic oiler lubricator canister on top */}
            <rect x="88" y="5" width="24" height="12" rx="1" fill="#1f1f1f" stroke="#ffffff" />
            <line x1="100" y1="5" x2="100" y2="17" stroke="#ffffff" strokeWidth="0.75" />
            <text x="35" y="104" fill="#a3a3a3" fontSize="6.5" fontFamily="monospace">SET OF 4 (CAR + CWT)</text>
            <text x="35" y="24" fill="#737373" fontSize="7" fontFamily="monospace">T-RAIL 10/16mm</text>
          </svg>
          <div className="absolute top-2 right-2 text-[9px] font-mono text-neutral-400 bg-neutral-900/90 px-1.5 py-0.5 border border-neutral-800">
            CAD: GSS-PU
          </div>
        </div>
      );

    case 'light-curtain':
      return (
        <div className={`${baseClasses} ${className}`}>
          <div className="absolute inset-0 bg-grid-pattern-dense opacity-20 pointer-events-none" />
          <svg viewBox="0 0 200 120" className="w-4/5 h-4/5 stroke-neutral-200 fill-none stroke-[1.25]" strokeLinecap="round" strokeLinejoin="round">
            {/* Transmitter Bar (TX - Left) */}
            <rect x="35" y="15" width="12" height="90" rx="2" fill="#171717" stroke="#ffffff" strokeWidth="1.5" />
            <text x="37" y="10" fill="#737373" fontSize="7" fontFamily="monospace">TX</text>
            {/* Receiver Bar (RX - Right) */}
            <rect x="153" y="15" width="12" height="90" rx="2" fill="#171717" stroke="#ffffff" strokeWidth="1.5" />
            <text x="155" y="10" fill="#737373" fontSize="7" fontFamily="monospace">RX</text>
            {/* Optical Diodes & Crossed Infrared Beams */}
            {[25, 38, 51, 64, 77, 90].map((y, i) => (
              <g key={i}>
                <circle cx="41" cy={y} r="2" fill="#ffffff" />
                <circle cx="159" cy={y} r="2" fill="#ffffff" />
                {/* Direct beam */}
                <line x1="47" y1={y} x2="153" y2={y} stroke="#e5e5e5" strokeWidth="0.75" strokeDasharray="3 2" opacity="0.6" />
                {/* Crossed multi-angle beams */}
                {i < 5 && (
                  <line x1="47" y1={y} x2="153" y2={y + 13} stroke="#737373" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.4" />
                )}
                {i > 0 && (
                  <line x1="47" y1={y} x2="153" y2={y - 13} stroke="#737373" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.4" />
                )}
              </g>
            ))}
            {/* Beam info tag */}
            <rect x="68" y="48" width="64" height="24" rx="2" fill="#000000" stroke="#737373" />
            <text x="73" y="60" fill="#ffffff" fontSize="7.5" fontWeight="bold" fontFamily="monospace">194 BEAMS</text>
            <text x="73" y="68" fill="#a3a3a3" fontSize="5.5" fontFamily="monospace">20mm - 1800mm HT</text>
            {/* Fast response */}
            <text x="72" y="108" fill="#737373" fontSize="6.5" fontFamily="monospace">&lt; 45ms CUTOFF</text>
          </svg>
          <div className="absolute top-2 right-2 text-[9px] font-mono text-neutral-400 bg-neutral-900/90 px-1.5 py-0.5 border border-neutral-800">
            CAD: DLC-194
          </div>
        </div>
      );

    default:
      return null;
  }
};
