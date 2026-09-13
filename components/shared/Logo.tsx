/**
 * FieldServiceChoice brand mark: a location pin with a checkmark inside.
 * The pin says "field service"; the check says "the verified choice".
 * Fixed brand indigo so it reads the same in light and dark contexts.
 */
export function LogoMark({ className = 'h-8 w-auto' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 48"
      className={className}
      role="img"
      aria-label="FieldServiceChoice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 46C11 33 5 27 5 18A15 15 0 1 1 35 18C35 27 29 33 20 46Z"
        fill="#3f52e3"
      />
      <path
        d="M12.5 18.5 17.5 23.5 27.5 12"
        fill="none"
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
