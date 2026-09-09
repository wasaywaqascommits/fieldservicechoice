import type { Product } from '@/types';

/**
 * Placeholder logo tile. We do NOT ship fabricated or unlicensed vendor logo
 * art; instead we render a branded initials tile. An admin can later attach a
 * real, licensed logo asset.
 */
export function ProductLogo({
  product,
  size = 'md',
}: {
  product: Pick<Product, 'name' | 'logoMark' | 'brandColor'>;
  size?: 'sm' | 'md' | 'lg';
}) {
  const dims = size === 'lg' ? 'h-14 w-14 text-xl' : size === 'sm' ? 'h-9 w-9 text-sm' : 'h-11 w-11 text-base';
  return (
    <span
      aria-hidden
      className={`grid ${dims} shrink-0 place-items-center rounded-xl font-bold text-white`}
      style={{ backgroundColor: product.brandColor }}
    >
      {product.logoMark}
    </span>
  );
}
