import {Intro} from '../../components/UI';
import Collection from '../../components/Collection';
export const metadata={alternates:{canonical:"/members"},title:'Members',description:'Explore the member community and connect with the association.'};
export default function Page(){return <section className="section shell"><Intro label="A network with local roots" title="Meet your next connection.">Different perspectives. Shared ambition. A community to grow with.</Intro><Collection kind="members"/></section>}
