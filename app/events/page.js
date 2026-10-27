import {Intro} from '../../components/UI';
import Collection from '../../components/Collection';
import {site} from '../../lib/site';
export const metadata={alternates:{canonical:"/events"},title:'Events & Meetings',description:'Community events and meeting information.'};
export default function Page(){return <section className="section shell"><Intro label="The power of showing up" title="Better together.">Conversations, connections and a shared interest in what comes next.</Intro><aside className="meeting-panel"><div><p className="eyebrow">Meeting details · Supplied information</p><h2>{site.meeting}</h2><p>{site.venue}<br/>{site.address}</p><p className="muted">Start time not supplied. Confirm the current schedule with Amy before attending.</p></div><a className="button" href="mailto:Amy@acrepgh.com?subject=Confirm%20meeting%20schedule">Confirm meeting details ↗</a></aside><Collection kind="events"/></section>}
