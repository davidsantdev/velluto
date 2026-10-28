type IconProps = { className?: string };

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function LineIcon({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {children}
    </svg>
  );
}

export function BraIcon({ className }: IconProps) {
  return (
    <LineIcon className={className}>
      <path pathLength={1} d="M22 26l-2-14M42 26l2-14" />
      <path pathLength={1} d="M10 42c0-10 6-16 12-16 5 0 8 7 10 14" />
      <path pathLength={1} d="M54 42c0-10-6-16-12-16-5 0-8 7-10 14" />
      <path pathLength={1} d="M10 42c7 5 15 6.5 22 6.5S47 47 54 42" />
      <path pathLength={1} d="M32 40v8.5" />
      <path pathLength={1} d="M32 39.6c-1.6-1.9-3.8-2-3.8-.5s2.2 1.5 3.8.5zm0 0c1.6-1.9 3.8-2 3.8-.5s-2.2 1.5-3.8.5z" />
    </LineIcon>
  );
}

export function NightgownIcon({ className }: IconProps) {
  return (
    <LineIcon className={className}>
      <path pathLength={1} d="M24 7l1 13M40 7l-1 13" />
      <path pathLength={1} d="M25 20c3 6 11 6 14 0" />
      <path pathLength={1} d="M25 20c-1 5-2 9-3 13-1.5 8-4 16-7 24" />
      <path pathLength={1} d="M39 20c1 5 2 9 3 13 1.5 8 4 16 7 24" />
      <path pathLength={1} d="M22.4 33c6 2.4 13.2 2.4 19.2 0" />
      <path pathLength={1} d="M15 57c5.5 2.6 11.5 3 17 1.6 5.5 1.4 11.5 1 17-1.6" />
      <path pathLength={1} d="M30.2 26.4c1 1.2 2.6 1.2 3.6 0" />
    </LineIcon>
  );
}

export function BikiniIcon({ className }: IconProps) {
  return (
    <LineIcon className={className}>
      <path pathLength={1} d="M22 11c-4 4-7.5 9.5-9 16 5.5 2 11 2 16 0-1-6.5-3.5-12-7-16z" />
      <path pathLength={1} d="M42 11c4 4 7.5 9.5 9 16-5.5 2-11 2-16 0 1-6.5 3.5-12 7-16z" />
      <path pathLength={1} d="M22 11l-2-7M42 11l2-7" />
      <path pathLength={1} d="M29 26.4c2 1.3 4 1.3 6 0M13 27l-6 2M51 27l6 2" />
      <path pathLength={1} d="M15 39c11 3.4 23 3.4 34 0-3 7-7.5 12.6-12.5 16.2-3 1.2-6 1.2-9 0C22.5 51.6 18 46 15 39z" />
      <path pathLength={1} d="M15 39l-5.5 2.2M49 39l5.5 2.2" />
    </LineIcon>
  );
}
