import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import { Link as I18nLink } from 'gatsby-plugin-react-i18next';
import { useTranslation } from 'react-i18next';

import { Container, SEO } from '../components';

const BannerContainer = styled.div`
  padding: 0 60px;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

interface IHomePageProps {
  pageContext: GatsbyTypes.SitePageContext;
}

export default function HomePage({ pageContext }: IHomePageProps) {
  const { t } = useTranslation();
  const isKorean = pageContext.language === 'ko';
  return (
    <>
      <SEO title="Home" />
      <Container>
        <BannerContainer>
          <Title>{t('index.title')}</Title>
          <p>{t('index.introduction')}</p>
          <p>
            <Link to={isKorean ? '/en/' : '/'}>
              {isKorean ? 'English' : '한국어'}
            </Link>
            {' • '}
            <a href={`https://blog.appleseed.dev${isKorean ? '/' : '/en/'}`}>
              Blog
            </a>
            {' • '}
            <I18nLink to="/resume">Resume</I18nLink>
          </p>
        </BannerContainer>
      </Container>
    </>
  );
}

export const query = graphql`
  query IndexPage($language: String!) {
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
