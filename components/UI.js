import Link from 'next/link';
import Media from './Media';
import { money } from '../lib/site';

export function Intro({ label, title, children }) {
  return (
    <div className="intro">
      <span className="eyebrow">{label}</span>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
}

export function PropertyCard({ property: p }) {
  return (
    <article className="property-card">
      <Link className="property-image" href={`/listings/${p.id}`}>
        <Media src={p.image} alt={`${p.title} — illustrative property image`} />
        <span className="image-tag">{p.type}</span>
        <span className="round-arrow" aria-hidden="true">↗</span>
        <strong className="price-badge">{money(p.price)}</strong>
      </Link>
      <div className="property-info">
        <p className="eyebrow">{p.district || p.city} · {p.city}</p>
        <h3><Link href={`/listings/${p.id}`}>{p.title}</Link></h3>
        <div className="property-bottom">
          <span className="property-area-mark" aria-hidden="true">↔</span>
          <span>{p.area.toLocaleString('en-US')} sq ft</span>
        </div>
      </div>
    </article>
  );
}

export function Empty() {
  return (
    <div className="state">
      <span aria-hidden="true">⌕</span>
      <h2>No results found</h2>
      <p>Try a different search or clear your filters.</p>
    </div>
  );
}

export function Skeleton() {
  return (
    <div aria-busy="true" role="status">
      <p>Loading, please wait…</p>
      <div className="cards">
        {[1, 2, 3].map(i => <div key={i} className="skeleton" />)}
      </div>
    </div>
  );
}
