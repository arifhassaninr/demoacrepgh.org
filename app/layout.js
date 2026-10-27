import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import Header from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';
import { isDemo } from '../lib/api';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  adjustFontFallback: false,
});

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'ACRE of Pittsburgh | Connect. Learn. Invest.',
    template: '%s | ACRE of Pittsburgh',
  },
  description: 'Independent ACRE of Pittsburgh redesign: real estate education, investor networking, events and membership.',
  robots: { index: !isDemo, follow: !isDemo },
  openGraph: {
    title: 'ACRE of Pittsburgh',
    description: 'Learn, network and grow with Pittsburgh’s real estate investor community.',
    type: 'website',
    images: [{
      url: '/acre-meeting.jpg',
      width: 4080,
      height: 3072,
      alt: 'ACRE of Pittsburgh community meeting',
    }],
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${display.variable}`}>
        <a className="skip" href="#main">Skip to content</a>
        {isDemo && (
          <div className="demo-banner">
            Independent redesign concept · Demo content · Not the official ACRE website
          </div>
        )}
        <Header />
        <main id="main">{children}</main>
        <footer>
          <div className="shell footer-grid">
            <div>
              <Link className="footer-brand" href="/" aria-label="ACRE of Pittsburgh home"><Image src="/acre-logo.png" alt="ACRE — Active Community of Real Estate Entrepreneurs" width={500} height={166}/><span>OF PITTSBURGH</span></Link>
              <p>Real estate education. Local connections.<br />A community to grow with.</p>
            </div>
            <div>
              <p className="eyebrow">Explore</p>
              <Link href="/events">Events & meetings</Link>
              <Link href="/membership">Membership Info ↗</Link>
              <Link href="/members">Member community</Link>
              <Link href="/listings">Property opportunities</Link>
            </div>
            <div>
              <p className="eyebrow">Let’s connect</p>
              <a href="mailto:Amy@acrepgh.com">Amy@acrepgh.com</a>
              <a href="tel:+14122237398">(412) 223-7398</a>
              <Link href="/contact">Contact Amy Selmek ↗</Link>
            </div>
          </div>
          <div className="shell footer-sitemap">
            <div><p>Association</p><Link href="/about">About Us</Link><Link href="/join">Join Now</Link><Link href="/membership/benefits">Member Benefits</Link><Link href="/sponsors">ACRE Sponsors</Link></div>
            <div><p>Learn & explore</p><Link href="/videos">Videos</Link><Link href="/resources">Other Resources</Link><Link href="/products">Products and Downloads</Link><Link href="/member-advantages">Member Advantages</Link></div>
            <div><p>Your account</p><Link href="/account">My Account</Link><Link href="/login">Sign In</Link><Link href="/cart">View Cart</Link><Link href="/faq">User FAQ</Link></div>
            <div><p>Find your way</p><Link href="/sitemap">All pages & resources</Link><Link href="/membership/terms">Terms & Conditions</Link><Link href="/membership/email-list">Join Email List</Link><Link href="/contact">Contact Us</Link></div>
          </div>
          <div className="shell footer-base">
            <span>© {new Date().getFullYear()} ACRE of Pittsburgh · Independent design concept</span>
            <a href="https://www.acrepgh.org/">Visit the official website ↗</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
