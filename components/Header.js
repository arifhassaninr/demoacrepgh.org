'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { navigation } from './navigation';

function NavItem({ item, path, close }) {
  if (!item.children.length) return <Link href={item.href} onClick={close} aria-current={path === item.href ? 'page' : undefined}>{item.label}</Link>;
  return <details className="nav-group">
    <summary>{item.label}<span aria-hidden="true">⌄</span></summary>
    <div className="nav-dropdown">
      <Link className="nav-overview" href={item.href} onClick={close}>{item.label} overview <span aria-hidden="true">↗</span></Link>
      {item.children.map((child, i) => <NavItem key={`${child.label}-${i}`} item={child} path={path} close={close} />)}
    </div>
  </details>;
}
export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const root = useRef(null);
  const close = () => { setOpen(false); root.current?.querySelectorAll('details[open]').forEach(el => el.removeAttribute('open')); };
  const top = navigation.filter(item => !['User FAQ', 'Sign In', 'Register', 'Join Now'].includes(item.label));
  return <header className="header complete-header" ref={root} onKeyDown={event => { if (event.key === 'Escape') { close(); root.current?.querySelector('.menu-toggle')?.focus(); } }}>
    <div className="shell complete-brand-row">
      <Link className="brand" href="/" onClick={close} aria-label="ACRE of Pittsburgh home"><Image className="official-logo" src="/acre-logo.png" alt="ACRE — Active Community of Real Estate Entrepreneurs" width={500} height={166} priority /></Link>
      <span className="header-community">Pittsburgh’s real estate community</span>
      <div className="header-utilities"><Link href="/members">Community</Link><Link href="/contact">Contact</Link><Link href="/login">Sign in ↗</Link><Link href="/join" className="button small">Join Now ↗</Link></div>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="complete-nav" onClick={() => setOpen(!open)}><span className="menu-label">{open ? 'Close ×' : 'Menu ☰'}</span><span aria-hidden="true">{open ? '×' : '☰'}</span></button>
    </div>
    <nav className={`complete-nav${open ? ' is-open' : ''}`} id="complete-nav" aria-label="Main navigation">
      {top.map(item => <NavItem key={item.label} item={item} path={path} close={close} />)}
      <Link className="mobile-join" href="/join" onClick={close}>Join Now ↗</Link>
      <Link className="mobile-join" href="/login" onClick={close}>Sign In</Link>
      <Link className="mobile-join" href="/contact" onClick={close}>Contact Us</Link>
    </nav>
  </header>;
}
