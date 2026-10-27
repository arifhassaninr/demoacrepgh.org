import Image from 'next/image';
import Link from 'next/link';
import Media from '../../components/Media';
import LoginPanel from '../../components/LoginPanel';

export const metadata = {
  title: 'Member sign-in',
  description: 'ACRE of Pittsburgh member access design preview. Continue to the official ACRE website to sign in.',
  alternates: { canonical: '/login' },
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <div className="access-page">
      <section className="member-access" aria-labelledby="member-access-heading">
        <div className="access-community">
          <Media
            src="/acre-meeting.jpg"
            alt="The ACRE of Pittsburgh community gathered at an association meeting"
            priority
          />
          <div className="access-photo-overlay" aria-hidden="true" />
          <div className="access-community-copy">
            <p className="eyebrow">ACRE COMMUNITY</p>
            <h1>Learn. Network. Grow.</h1>
            <p>Your Pittsburgh real estate community.</p>
            <div className="access-values" aria-label="Community values">
              <span><span aria-hidden="true">↗</span> Education</span>
              <span><span aria-hidden="true">◎</span> Connections</span>
              <span><span aria-hidden="true">◈</span> Community</span>
            </div>
          </div>
          <div className="access-photo-caption">Real people. Shared experience. Local connections.</div>
        </div>
        <LoginPanel />
      </section>

      <footer className="access-footer">
        <Link className="access-footer-logo" href="/" aria-label="ACRE of Pittsburgh home">
          <Image
            src="/acre-logo.png"
            alt="ACRE — Active Community of Real Estate Entrepreneurs"
            width={500}
            height={166}
          />
        </Link>
        <div className="access-footer-copy"><strong>ACRE of Pittsburgh</strong><span>Learn. Network. Grow.</span></div>
        <nav aria-label="Member access footer">
          <a href="https://www.acrepgh.org/PrivacyPolicy.aspx" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="https://www.acrepgh.org/SiteTerms.aspx" target="_blank" rel="noopener noreferrer">Terms of Use</a>
          <Link href="/contact">Contact Us</Link>
        </nav>
        <span className="access-concept-label">Client design concept</span>
      </footer>
    </div>
  );
}
