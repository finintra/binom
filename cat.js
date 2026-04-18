// Cat mascot — simple friendly orange cat, rendered as SVG.
// Props via data-* attrs: size (default 180), mood ('happy'|'think'|'wow'|'teach')
window.CatSVG = function(opts = {}) {
  const size = opts.size || 200;
  const mood = opts.mood || 'happy';

  // Eye shapes by mood
  let leftEye, rightEye, mouth;
  if (mood === 'happy') {
    leftEye = `<path d="M 68 96 Q 76 88 84 96" stroke="#2b2440" stroke-width="5" fill="none" stroke-linecap="round"/>`;
    rightEye = `<path d="M 116 96 Q 124 88 132 96" stroke="#2b2440" stroke-width="5" fill="none" stroke-linecap="round"/>`;
    mouth = `<path d="M 92 120 Q 100 128 108 120" stroke="#2b2440" stroke-width="5" fill="none" stroke-linecap="round"/>`;
  } else if (mood === 'wow') {
    leftEye = `<circle cx="76" cy="96" r="8" fill="#2b2440"/><circle cx="79" cy="93" r="3" fill="white"/>`;
    rightEye = `<circle cx="124" cy="96" r="8" fill="#2b2440"/><circle cx="127" cy="93" r="3" fill="white"/>`;
    mouth = `<ellipse cx="100" cy="124" rx="9" ry="12" fill="#2b2440"/>`;
  } else if (mood === 'think') {
    leftEye = `<circle cx="76" cy="96" r="6" fill="#2b2440"/>`;
    rightEye = `<path d="M 116 96 Q 124 92 132 96" stroke="#2b2440" stroke-width="5" fill="none" stroke-linecap="round"/>`;
    mouth = `<path d="M 92 122 Q 100 118 108 122" stroke="#2b2440" stroke-width="5" fill="none" stroke-linecap="round"/>`;
  } else { // teach
    leftEye = `<circle cx="76" cy="96" r="7" fill="#2b2440"/><circle cx="78" cy="94" r="2.5" fill="white"/>`;
    rightEye = `<circle cx="124" cy="96" r="7" fill="#2b2440"/><circle cx="126" cy="94" r="2.5" fill="white"/>`;
    mouth = `<path d="M 90 120 Q 100 132 110 120" stroke="#2b2440" stroke-width="5" fill="none" stroke-linecap="round"/>`;
  }

  return `<svg viewBox="0 0 200 200" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <!-- Body blob (just peeking from below head for seated look) -->
    <ellipse cx="100" cy="185" rx="60" ry="22" fill="#ff9b52" stroke="#2b2440" stroke-width="5"/>
    <!-- Head circle -->
    <circle cx="100" cy="110" r="60" fill="#ffb36b" stroke="#2b2440" stroke-width="5"/>
    <!-- Left ear -->
    <path d="M 52 72 L 42 38 L 78 60 Z" fill="#ffb36b" stroke="#2b2440" stroke-width="5" stroke-linejoin="round"/>
    <path d="M 55 66 L 48 48 L 70 60 Z" fill="#ff6b9e" stroke="none"/>
    <!-- Right ear -->
    <path d="M 148 72 L 158 38 L 122 60 Z" fill="#ffb36b" stroke="#2b2440" stroke-width="5" stroke-linejoin="round"/>
    <path d="M 145 66 L 152 48 L 130 60 Z" fill="#ff6b9e" stroke="none"/>
    <!-- Cheeks -->
    <circle cx="72" cy="120" r="9" fill="#ff9fc7" opacity="0.7"/>
    <circle cx="128" cy="120" r="9" fill="#ff9fc7" opacity="0.7"/>
    <!-- Stripes on forehead -->
    <path d="M 90 58 Q 92 68 90 78" stroke="#e07a3a" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M 100 54 Q 102 66 100 78" stroke="#e07a3a" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M 110 58 Q 112 68 110 78" stroke="#e07a3a" stroke-width="4" fill="none" stroke-linecap="round"/>
    <!-- Eyes -->
    ${leftEye}
    ${rightEye}
    <!-- Nose -->
    <path d="M 96 108 L 104 108 L 100 114 Z" fill="#ff6b9e" stroke="#2b2440" stroke-width="2.5" stroke-linejoin="round"/>
    <!-- Mouth -->
    ${mouth}
    <!-- Whiskers -->
    <line x1="40" y1="116" x2="65" y2="114" stroke="#2b2440" stroke-width="3" stroke-linecap="round"/>
    <line x1="40" y1="124" x2="65" y2="122" stroke="#2b2440" stroke-width="3" stroke-linecap="round"/>
    <line x1="160" y1="116" x2="135" y2="114" stroke="#2b2440" stroke-width="3" stroke-linecap="round"/>
    <line x1="160" y1="124" x2="135" y2="122" stroke="#2b2440" stroke-width="3" stroke-linecap="round"/>
  </svg>`;
};
