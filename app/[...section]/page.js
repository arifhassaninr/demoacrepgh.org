import { notFound } from 'next/navigation';
import AssociationPages, { restoredRoutes, pageInfo } from '../../components/AssociationPages';
export const dynamicParams = false;
export function generateStaticParams() { return restoredRoutes.map(path => ({ section: path.slice(1).split('/') })); }
export async function generateMetadata({ params }) {
  const { section } = await params;
  const path = '/' + section.join('/');
  const page = pageInfo(path);
  return { title: page?.label || 'Page not found', description: `Explore ${page?.label || 'ACRE'} in the ACRE of Pittsburgh independent design concept.`, alternates: { canonical: path } };
}
export default async function Page({ params }) {
  const { section } = await params;
  const path = '/' + section.join('/');
  if (!restoredRoutes.includes(path)) notFound();
  return <AssociationPages path={path} />;
}
