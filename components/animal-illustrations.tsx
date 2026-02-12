"use client"

// Cute hand-drawn style animal illustrations inspired by Monty's Red Sauce menu
// Simple line-art caricatures in the wine-red color

export function CatSippingWine({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Cat body */}
      <path
        d="M40 100 C40 75 45 65 60 60 C75 65 80 75 80 100"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Cat head */}
      <ellipse cx="60" cy="50" rx="18" ry="16" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Left ear */}
      <path d="M45 38 L38 20 L50 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Right ear */}
      <path d="M75 38 L82 20 L70 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Eyes - happy closed */}
      <path d="M52 48 C53 45 56 45 57 48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M63 48 C64 45 67 45 68 48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Nose */}
      <path d="M58 52 L60 54 L62 52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Whiskers */}
      <path d="M50 53 L35 50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M50 55 L36 56" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M70 53 L85 50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M70 55 L84 56" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      {/* Arm holding wine glass */}
      <path d="M78 80 C85 75 90 70 95 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Wine glass */}
      <path d="M90 60 L95 45 L100 60 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <line x1="95" y1="45" x2="95" y2="38" stroke="currentColor" strokeWidth="1.5" />
      <line x1="90" y1="38" x2="100" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Wine in glass */}
      <path d="M92 55 C93 52 97 52 98 55" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.3" />
      {/* Tail */}
      <path d="M45 100 C35 95 25 85 30 70 C32 65 38 68 35 75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Feet */}
      <ellipse cx="50" cy="103" rx="8" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <ellipse cx="70" cy="103" rx="8" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

export function BunnySharingPasta({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Left bunny body */}
      <ellipse cx="55" cy="85" rx="20" ry="22" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Left bunny head */}
      <circle cx="55" cy="55" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Left ears */}
      <path d="M47 43 C44 25 42 15 46 12 C50 10 52 20 50 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M55 42 C55 24 56 14 60 12 C64 11 63 22 60 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Left bunny face */}
      <circle cx="50" cy="53" r="1.5" fill="currentColor" />
      <circle cx="60" cy="53" r="1.5" fill="currentColor" />
      <path d="M53 58 L55 60 L57 58" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
      {/* Right bunny body */}
      <ellipse cx="145" cy="85" rx="20" ry="22" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Right bunny head */}
      <circle cx="145" cy="55" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Right ears */}
      <path d="M140 42 C138 24 137 14 140 12 C143 10 145 22 143 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M148 43 C150 25 152 15 155 12 C158 10 157 22 154 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Right bunny face */}
      <circle cx="140" cy="53" r="1.5" fill="currentColor" />
      <circle cx="150" cy="53" r="1.5" fill="currentColor" />
      <path d="M143 58 L145 60 L147 58" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
      {/* Pasta bowl in center */}
      <ellipse cx="100" cy="90" rx="25" ry="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M75 88 C80 78 85 75 100 74 C115 75 120 78 125 88" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Spaghetti noodle shared between them */}
      <path d="M56 60 C65 65 75 72 90 76" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M144 60 C135 65 125 72 110 76" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Heart above */}
      <path d="M95 62 C95 58 90 55 90 59 C90 63 95 67 100 70 C105 67 110 63 110 59 C110 55 105 58 105 62 C105 65 100 70 100 70 C100 70 95 65 95 62 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.2" />
      {/* Feet */}
      <ellipse cx="45" cy="107" rx="6" ry="3" stroke="currentColor" strokeWidth="1" fill="none" />
      <ellipse cx="65" cy="107" rx="6" ry="3" stroke="currentColor" strokeWidth="1" fill="none" />
      <ellipse cx="135" cy="107" rx="6" ry="3" stroke="currentColor" strokeWidth="1" fill="none" />
      <ellipse cx="155" cy="107" rx="6" ry="3" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  )
}

export function DogWithBottle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Dog body */}
      <path d="M30 95 C30 72 35 65 50 60 C65 65 70 72 70 95" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Dog head */}
      <ellipse cx="50" cy="45" rx="18" ry="17" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Floppy left ear */}
      <path d="M34 40 C28 38 22 42 20 50 C18 56 22 58 28 54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Floppy right ear */}
      <path d="M66 40 C72 38 78 42 80 50 C82 56 78 58 72 54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Eyes */}
      <circle cx="43" cy="42" r="2" fill="currentColor" />
      <circle cx="57" cy="42" r="2" fill="currentColor" />
      {/* Nose */}
      <ellipse cx="50" cy="50" rx="4" ry="3" fill="currentColor" opacity="0.4" />
      {/* Tongue */}
      <path d="M48 54 C48 58 50 61 52 58 C53 56 52 54 52 54" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.2" />
      {/* Arm holding bottle */}
      <path d="M68 75 C75 68 80 60 82 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Wine bottle */}
      <rect x="78" y="25" width="8" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="80" y="20" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Wine in bottle */}
      <rect x="79" y="38" width="6" height="14" rx="1" fill="currentColor" opacity="0.15" />
      {/* Tail wagging */}
      <path d="M35 90 C25 85 18 78 15 68 C14 65 18 64 20 68 C22 74 25 78 30 82" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Feet */}
      <ellipse cx="40" cy="98" rx="8" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <ellipse cx="60" cy="98" rx="8" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

export function MouseWithCheese({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 90 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Mouse body */}
      <ellipse cx="45" cy="52" rx="18" ry="14" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Mouse head */}
      <ellipse cx="45" cy="32" rx="12" ry="11" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Big round ears */}
      <circle cx="33" cy="22" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="57" cy="22" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Eyes */}
      <circle cx="41" cy="30" r="1.5" fill="currentColor" />
      <circle cx="49" cy="30" r="1.5" fill="currentColor" />
      {/* Nose */}
      <circle cx="45" cy="35" r="2" fill="currentColor" opacity="0.3" />
      {/* Whiskers */}
      <line x1="38" y1="34" x2="25" y2="32" stroke="currentColor" strokeWidth="0.8" />
      <line x1="38" y1="36" x2="26" y2="37" stroke="currentColor" strokeWidth="0.8" />
      <line x1="52" y1="34" x2="65" y2="32" stroke="currentColor" strokeWidth="0.8" />
      <line x1="52" y1="36" x2="64" y2="37" stroke="currentColor" strokeWidth="0.8" />
      {/* Tail */}
      <path d="M62 55 C70 50 78 55 75 62 C73 66 68 64 70 60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Cheese triangle held */}
      <path d="M30 48 L18 55 L28 60 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.1" />
      <circle cx="24" cy="54" r="1.5" fill="currentColor" opacity="0.2" />
      <circle cx="26" cy="57" r="1" fill="currentColor" opacity="0.2" />
      {/* Arms reaching for cheese */}
      <path d="M30 50 L28 52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Feet */}
      <ellipse cx="38" cy="66" rx="5" ry="2.5" stroke="currentColor" strokeWidth="1" fill="none" />
      <ellipse cx="52" cy="66" rx="5" ry="2.5" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  )
}

export function DuckCouple({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Left duck body */}
      <ellipse cx="55" cy="60" rx="25" ry="18" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Left duck head */}
      <circle cx="38" cy="38" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Left duck neck */}
      <path d="M44 48 C48 52 50 54 50 58" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Left duck beak */}
      <path d="M27 40 L22 38 L27 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Left duck eye */}
      <circle cx="35" cy="35" r="1.5" fill="currentColor" />
      {/* Left duck wing */}
      <path d="M50 52 C55 48 62 50 60 55" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Right duck body */}
      <ellipse cx="105" cy="60" rx="25" ry="18" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Right duck head */}
      <circle cx="122" cy="38" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Right duck neck */}
      <path d="M116 48 C112 52 110 54 110 58" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Right duck beak */}
      <path d="M133 40 L138 38 L133 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Right duck eye */}
      <circle cx="125" cy="35" r="1.5" fill="currentColor" />
      {/* Right duck wing */}
      <path d="M110 52 C105 48 98 50 100 55" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Heart between them */}
      <path d="M76 30 C76 27 72 25 72 28 C72 31 76 34 80 37 C84 34 88 31 88 28 C88 25 84 27 84 30 C84 33 80 37 80 37 C80 37 76 33 76 30 Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.2" />
      {/* Water ripples */}
      <path d="M25 75 C30 73 35 75 40 73" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" />
      <path d="M60 78 C65 76 70 78 75 76" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" />
      <path d="M90 75 C95 73 100 75 105 73" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" />
      <path d="M120 78 C125 76 130 78 135 76" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" />
    </svg>
  )
}

export function FoxChef({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Fox body */}
      <path d="M35 100 C35 78 40 70 50 65 C60 70 65 78 65 100" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Chef hat */}
      <ellipse cx="50" cy="12" rx="16" ry="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="38" y="15" width="24" height="8" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Fox head */}
      <path d="M35 45 C35 30 40 25 50 23 C60 25 65 30 65 45 C65 55 58 60 50 60 C42 60 35 55 35 45" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Pointy ears */}
      <path d="M37 32 L30 15 L42 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M63 32 L70 15 L58 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Eyes - happy */}
      <path d="M42 42 C43 39 46 39 47 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M53 42 C54 39 57 39 58 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Nose */}
      <circle cx="50" cy="48" r="2.5" fill="currentColor" opacity="0.3" />
      {/* Mouth smile */}
      <path d="M46 52 C48 55 52 55 54 52" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
      {/* Apron */}
      <path d="M40 75 L40 100 L60 100 L60 75" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M42 75 L58 75" stroke="currentColor" strokeWidth="1.5" />
      {/* Spoon in hand */}
      <path d="M65 80 C70 75 75 72 78 68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <ellipse cx="80" cy="64" rx="4" ry="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Tail */}
      <path d="M38 95 C28 90 20 82 22 72 C23 68 28 70 26 76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Big fluffy tail tip */}
      <circle cx="22" cy="70" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

export function DinnerTableScene({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Table */}
      <rect x="50" y="55" width="300" height="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="80" y1="59" x2="80" y2="90" stroke="currentColor" strokeWidth="2" />
      <line x1="320" y1="59" x2="320" y2="90" stroke="currentColor" strokeWidth="2" />

      {/* Candles */}
      <rect x="185" y="35" width="4" height="20" stroke="currentColor" strokeWidth="1" fill="none" />
      <rect x="210" y="32" width="4" height="23" stroke="currentColor" strokeWidth="1" fill="none" />
      {/* Flames */}
      <path d="M185 35 C186 30 189 28 187 35" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.2" />
      <path d="M210 32 C211 27 214 25 212 32" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.2" />

      {/* Plates */}
      <ellipse cx="130" cy="52" rx="20" ry="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <ellipse cx="270" cy="52" rx="20" ry="6" stroke="currentColor" strokeWidth="1.5" fill="none" />

      {/* Wine glasses */}
      <path d="M155 50 L158 40 L162 50" stroke="currentColor" strokeWidth="1" fill="none" />
      <line x1="160" y1="40" x2="160" y2="35" stroke="currentColor" strokeWidth="1" />
      <line x1="156" y1="35" x2="164" y2="35" stroke="currentColor" strokeWidth="1" />

      <path d="M238 50 L241 40 L245 50" stroke="currentColor" strokeWidth="1" fill="none" />
      <line x1="242" y1="40" x2="242" y2="35" stroke="currentColor" strokeWidth="1" />
      <line x1="238" y1="35" x2="246" y2="35" stroke="currentColor" strokeWidth="1" />

      {/* Small animals sitting at table */}
      {/* Left - small cat */}
      <circle cx="130" cy="38" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M125 34 L123 27 L128 32" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M135 34 L137 27 L132 32" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="128" cy="37" r="0.8" fill="currentColor" />
      <circle cx="132" cy="37" r="0.8" fill="currentColor" />

      {/* Right - small dog */}
      <circle cx="270" cy="38" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M265 35 C262 34 260 37 261 40" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M275 35 C278 34 280 37 279 40" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="268" cy="37" r="0.8" fill="currentColor" />
      <circle cx="272" cy="37" r="0.8" fill="currentColor" />

      {/* Rose */}
      <path d="M196 45 C198 38 202 38 204 45" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.15" />
      <path d="M194 47 C196 42 204 42 206 47" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.1" />
      <line x1="200" y1="47" x2="200" y2="55" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export function HeartDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <line x1="10" y1="10" x2="85" y2="10" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M93 6 C93 3 89 2 89 5 C89 8 93 11 97 13 C101 11 105 8 105 5 C105 2 101 3 101 6 C101 9 97 13 97 13 C97 13 93 9 93 6 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.15" />
      <line x1="109" y1="10" x2="190" y2="10" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    </svg>
  )
}
