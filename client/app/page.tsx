import { Inter } from 'next/font/google';
import { getprojects } from '@/sanity/sanity-utils';

const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
  const projects = await getprojects();

  return (
    <div>
      <div className="max-w-5xl mx-auto p-20">
        <h1 className="text-7xl font-extrabold ">
          Hello I am{' '}
          <span className="bg-gradient-to-r from-orange-400 to-purple-500  ">
            Asijit
          </span>
          !
        </h1>
      </div>
      {projects.map((project) => (
        <div key={project._id}>{project.name}</div>
      ))}
    </div>
  );
}
