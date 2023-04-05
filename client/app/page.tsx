import { Inter } from 'next/font/google';
import { getprojects } from '@/sanity/sanity-utils';

const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
  const projects = await getprojects();

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
}
