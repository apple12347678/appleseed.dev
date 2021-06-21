import { GatsbyNode } from 'gatsby';

const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = async ({
  actions: { setBabelPlugin },
}) => {
  setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  });
};

export default onCreateBabelConfig;
