import { Project } from '@/types/Project';
import { createClient, groq } from 'next-sanity';

export async function getprojects():Promise<Project[]>  {
  const client = createClient({
    projectId: '9ayzp4jf',
    dataset: 'production',
    apiVersion: '2023-04-01',
  });

  return client.fetch(
    groq`*[_type== "project"]{
            _id,
            _createdAt,
            name,
            "slug":slug.current,
            "image":image.asset->url,
            url,
            content

        }`
  );
}
