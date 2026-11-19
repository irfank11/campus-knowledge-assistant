export default function Logo({ size = 28 }) {
  // Small rounded-square "mark" with a folded page corner. Deliberately
  // plain — it just needs to read as "documents" at 24-30px.
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="28" height="28" rx="7" fill="var(--primary, #5b5ff0)" />
      <path d="M11 9.5h7.5L22 13v9.5H11z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
      <path d="M18.5 9.5V13H22" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
      <path d="M13.5 16h6M13.5 19h4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
