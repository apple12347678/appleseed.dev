import { GatsbyNode } from 'gatsby';
import path from 'path';

const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  const Resume = path.resolve('./src/templates/Resume.tsx');

  const result = await graphql(
    `
      {
        allMdx {
          nodes {
            id
            slug
          }
        }
      }
    `,
  );

  if (result.errors) {
    reporter.panicOnBuild('There was an error loading resume', result.errors);
    return;
  }

  const resume = (result.data as any).allMdx.nodes;

  if (resume.length > 0) {
    resume.forEach((r: any) => {
      createPage({
        path: r.slug === 'ko' ? '/resume/' : `/${r.slug}/resume/`,
        component: Resume,
        context: {
          id: r.id,
        },
      });
    });
  }
};

export default createPages;
