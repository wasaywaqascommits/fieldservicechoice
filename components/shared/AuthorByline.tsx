import Link from 'next/link';
import Image from 'next/image';
import type { Author } from '@/types';

/** Author avatar: the real headshot when set, otherwise an initials monogram. */
export function AuthorAvatar({ author, size = 40 }: { author: Author; size?: number }) {
  if (author.avatar) {
    return (
      <Image
        src={author.avatar}
        alt={author.name}
        width={size}
        height={size}
        className="shrink-0 rounded-full object-cover"
      />
    );
  }
  return (
    <span
      aria-hidden
      className="grid shrink-0 place-items-center rounded-full font-bold text-white"
      style={{ width: size, height: size, backgroundColor: author.avatarColor, fontSize: size * 0.36 }}
    >
      {author.initials}
    </span>
  );
}

/**
 * Author byline / reviewer credit. One component for article bylines
 * ("By …") and product reviewer credits ("Reviewed by …"), both linking to the
 * author profile. `children` carries any trailing links (e.g. methodology).
 */
export function AuthorByline({
  author,
  date,
  dateLabel = 'Updated',
  prefix = 'By',
  avatarSize = 36,
  children,
}: {
  author: Author;
  date?: string | null;
  dateLabel?: string;
  prefix?: string;
  avatarSize?: number;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-muted">
      <span className="flex items-center gap-2">
        <AuthorAvatar author={author} size={avatarSize} />
        <span>
          {prefix}{' '}
          <Link href={`/authors/${author.slug}/`} className="font-medium text-ink-soft hover:text-brand-700">
            {author.name}
          </Link>
          <span className="text-ink-muted">, {author.role}</span>
        </span>
      </span>
      {date && (
        <span className="text-xs">
          · {dateLabel} {date}
        </span>
      )}
      {children}
    </div>
  );
}
