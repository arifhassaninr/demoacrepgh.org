import Link from 'next/link';
import Media from '../components/Media';
import Collection from '../components/Collection';

const membershipUrl = 'https://www.acrepgh.org/MembershipInfo.aspx';
const calendarUrl = 'https://www.acrepgh.org/Calendar.aspx';

export const metadata = {
  alternates: { canonical: '/' },
  title: 'ACRE of Pittsburgh | Learn. Network. Grow.',
  description: 'A modern redesign concept for ACRE of Pittsburgh: investor education, networking, events and a local community of real estate entrepreneurs.',
};

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="dot" />Active Community of Real Estate Entrepreneurs</p>
          <h1>Learn. Network.<br /><em>Grow with ACRE.</em></h1>
          <p className="hero-description">
            Connect with Pittsburgh’s real estate investors, wholesalers, flippers,
            landlords, lenders and the people who help them move forward.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/events">View Upcoming Events ↗</Link>
            <a className="text-link" href={membershipUrl} target="_blank" rel="noopener noreferrer">Become a Member ↗</a>
          </div>
          <div className="hero-foot"><span>LEARN</span><span>NETWORK</span><span>GROW</span></div>
        </div>
        <div className="hero-visual">
          <Media src="/acre-meeting.jpg" alt="Real ACRE of Pittsburgh investors gathered for a community meeting" priority />
          <div className="visual-caption"><span>Pittsburgh’s investor community</span><strong>Better connections.<br />Shared possibilities.</strong></div>
          <div className="visual-index">ACRE / PGH</div>
        </div>
      </section>

      <section className="meeting-strip">
        <div className="shell meeting-inner">
          <span className="eyebrow">Monthly investor meetup</span>
          <strong>First Tuesday. Real connections.</strong>
          <Link href="/events" className="text-link">Meeting details ↗</Link>
        </div>
      </section>

      <section className="section shell home-events" id="events">
        <div className="section-heading">
          <div><p className="eyebrow">Show up. Meet someone. Learn something.</p><h2>Your next connection<br />starts here.</h2></div>
          <Link className="text-link" href="/events">Explore events & meetings ↗</Link>
        </div>
        <p className="section-lead">Investor meetups, educational conversations and opportunities to connect with your local real estate community.</p>
        <Collection kind="events" limit={2} />
        <div className="official-calendar-note">
          <span>Find current dates and registration on ACRE’s official calendar.</span>
          <a className="text-link" href={calendarUrl} target="_blank" rel="noopener noreferrer">Open official calendar ↗</a>
        </div>
      </section>

      <section className="about-section" id="membership">
        <div className="shell about-grid">
          <div>
            <p className="eyebrow">A community worth being part of</p>
            <h2>You don’t have to<br />do this alone.</h2>
            <p className="membership-intro">New to real estate or building on years of experience? Find people to learn with, ideas to explore and conversations that move you forward.</p>
            <a href={membershipUrl} className="button" target="_blank" rel="noopener noreferrer">Become a Member ↗</a>
          </div>
          <div className="benefits">
            {[
              ['01', 'Learn from experience', 'Build practical knowledge through education, discussion and the experiences of fellow real estate entrepreneurs.'],
              ['02', 'Build your network', 'Meet investors, wholesalers, flippers, landlords, lenders, contractors and related professionals.'],
              ['03', 'Grow together', 'Keep learning, ask better questions and find a local community to share your real estate journey with.'],
            ].map(([number, title, description]) => (
              <div key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell community-section" id="community">
        <div className="section-heading">
          <div><p className="eyebrow">People make the difference</p><h2>A real community.<br />Right here in Pittsburgh.</h2></div>
          <Link className="text-link" href="/members">Explore the community ↗</Link>
        </div>
        <div className="community-gallery">
          <figure><Media src="/acre-meeting.jpg" alt="Attendees at an ACRE of Pittsburgh meeting" /><figcaption>A place to learn, exchange ideas and make connections.</figcaption></figure>
          <figure><Media src="/acre-community.jpg" alt="ACRE of Pittsburgh community members at an association gathering" /><figcaption>Local people. Shared interests. Lasting relationships.</figcaption></figure>
        </div>
        <p className="asset-credit">Community photographs from <a href="https://www.acrepgh.org/default.aspx" target="_blank" rel="noopener noreferrer">ACRE’s official website ↗</a></p>
      </section>

      <section className="shell education-section" id="education">
        <div className="education-image"><Media src="/acre-speaker.jpg" alt="A speaker presenting to investors at an ACRE meeting" /></div>
        <div className="education-copy">
          <p className="eyebrow">Keep your curiosity working</p>
          <h2>Learn with people<br />who do.</h2>
          <p>Explore real estate ideas through educational meetings, investor discussions and shared local experience.</p>
          <div className="education-topics"><span>Investor education</span><span>Peer discussions</span><span>Local perspectives</span></div>
          <Link className="button" href="/events">Explore learning events ↗</Link>
        </div>
      </section>

      <section className="section shell home-properties">
        <div className="section-heading">
          <div><p className="eyebrow">Explore the wider network</p><h2>Property opportunities.<br />Part of the bigger picture.</h2></div>
          <Link className="text-link" href="/listings">Browse properties ↗</Link>
        </div>
        <Collection kind="listings" limit={3} />
      </section>

      <section className="shell cta">
        <p className="eyebrow">Learn. Network. Grow.</p>
        <h2>Your next chapter<br />starts with community.</h2>
        <a className="button" href={membershipUrl} target="_blank" rel="noopener noreferrer">Become a Member ↗</a>
      </section>
    </>
  );
}
