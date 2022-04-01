import { GetStaticPropsContext } from 'next';

import { allProjects } from 'contentlayer/generated';
import ProjectLayout from 'layouts/project';
import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';

export default function ProjectPage(project) {
  const Component = useMDXComponent(project.body.code);
  return (
    <ProjectLayout project={project}>
      <Component components={components as any} />
    </ProjectLayout>
  );
}

export function getStaticProps(ctx: GetStaticPropsContext) {
  const project = allProjects.find(
    (project) => project.slug === ctx.params.slug
  );

  return { props: project };
}

export function getStaticPaths() {
  return {
    paths: allProjects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false
  };
}
