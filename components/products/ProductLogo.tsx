import type { Product } from '@/types';

/**
 * Product logo. When a real, licensed logo asset is attached (`logoImage`),
 * it renders contained on a white tile at the site's standard sizes so every
 * vendor mark appears at a consistent scale regardless of its native
 * dimensions. Otherwise we fall back to a branded initials tile. We never ship
 * fabricated or unlicensed vendor logo art.
 */
export function ProductLogo({
  product,
  size = 'md',
}: {
  product: Pick<Product, 'name' | 'logoMark' | 'brandColor' | 'logoImage'>;
  size?: 'sm' | 'md' | 'lg';
}) {
  const box = size === 'lg' ? 'h-14 w-14' : size === 'sm' ? 'h-9 w-9' : 'h-11 w-11';

  if (product.logoImage) {
    return (
      <span
        className={`grid ${box} shrink-0 place-items-center overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.logoImage}
          alt={`${product.name} logo`}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </span>
    );
  }

  const text = size === 'lg' ? 'text-xl' : size === 'sm' ? 'text-sm' : 'text-base';
  return (
    <span
      aria-hidden
      className={`grid ${box} ${text} shrink-0 place-items-center rounded-xl font-bold text-white`}
      style={{ backgroundColor: product.brandColor }}
    >
      {product.logoMark}
    </span>
  );
}
