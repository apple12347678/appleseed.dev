import { GatsbyNode } from 'gatsby';

const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = async ({
  actions,
}) => {
  const { createTypes } = actions;
  createTypes(`
    type SitePageContext {
      language: String!
    }
  `);
};

export default createSchemaCustomization;
