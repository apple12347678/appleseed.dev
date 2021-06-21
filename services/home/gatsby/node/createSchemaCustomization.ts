import { GatsbyNode } from 'gatsby';

const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
  async ({ actions: { createTypes } }) => {
    createTypes(`
    type SitePageContext {
      language: String!
    }
  `);
  };

export default createSchemaCustomization;
