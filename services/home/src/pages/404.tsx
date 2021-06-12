import React from 'react';

import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

import { SEO } from '../components';

const Wrapper = styled.div`
  padding: 1.5rem 2rem;
`;

export default function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <>
      <SEO title="Not found" />
      <Wrapper>
        <h1>404: Not Found</h1>
        <p>{t('404.message')}</p>
      </Wrapper>
    </>
  );
}

export const query = graphql`
  query NotFoundPage($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
