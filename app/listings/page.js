import {Intro} from '../../components/UI';
import Collection from '../../components/Collection';
export const metadata={alternates:{canonical:"/listings"},title:'Properties',description:'Search and filter the property collection by type, city and budget.'};
export default function Page(){return <section className="shell section"><Intro label="Explore the possibilities" title="Space for your next move.">Search the collection. Find a fresh perspective on your next investment.</Intro><Collection kind="listings"/></section>}
