import React from 'react';

import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link as I18nLink } from 'gatsby-plugin-react-i18next';

import { ResumeQuery } from '../../graphql-types';
import GithubIcon from '../assets/github.svg';
import InstagramIcon from '../assets/instagram.svg';
import LinkedInIcon from '../assets/linkedin.svg';
import MailIcon from '../assets/mail.svg';
import { SEO } from '../components';

const Avatar = styled(GatsbyImage)`
  width: 260px;
  height: 260px;
  border-radius: 130px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  @media (max-width: 720px) {
    width: 120px;
    height: 120px;
    border-radius: 60px;
  }
`;

// function Avatar({ file }: { file: ResumeQuery['file'] }) {
// }

const Root = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 720px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 720px) {
    justify-content: center;
  }
`;

const ProfileWrapper = styled.div`
  height: 100%;
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 720px) {
    margin-left: 0;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: var(--color-100);
  @media (max-width: 960px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: var(--color-300);
  @media (max-width: 960px) {
    font-size: 1.3rem;
  }
`;

const Link = styled.a`
  height: 32px;
  margin-right: 2px;
`;

const IconWrapper = styled.div<{ $padding?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  & > svg {
    fill: var(--color-100);
  }
`;

function Profile() {
  return (
    <ProfileWrapper>
      <Title>Chankyu Kang</Title>
      <Subtitle>appleseed • apple12347678</Subtitle>
      <Row>
        <Link href="https://github.com/apple12347678/">
          <IconWrapper>
            <GithubIcon width="32" height="32" />
          </IconWrapper>
        </Link>
        <Link href="mailto:apple12347678@gmail.com">
          <IconWrapper>
            <MailIcon width="28" height="28" />
          </IconWrapper>
        </Link>
        <Link href="https://www.instagram.com/apple12347678/">
          <IconWrapper>
            <InstagramIcon width="24" height="24" />
          </IconWrapper>
        </Link>
        <Link href="https://www.linkedin.com/in/ckkennethkang/">
          <IconWrapper>
            <LinkedInIcon width="24" height="24" />
          </IconWrapper>
        </Link>
      </Row>
    </ProfileWrapper>
  );
}

const Updated = styled.p`
  font-size: 0.9rem;
  color: var(--color-400);
`;

const shortcodes = { Root, Avatar, Profile, Updated };

const Wrapper = styled.div`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding: 4rem 4rem 2.5rem;
  @media (max-width: 720px) {
    padding: 2rem 2rem 1rem;
  }
`;

const GoBack = styled.div`
  margin-top: 20px;
  text-align: right;
  font-size: 0.9rem;
`;

interface IResumeTemplateProps {
  data: ResumeQuery;
}

export default function ResumeTemplate({
  data: { file, mdx },
}: IResumeTemplateProps) {
  if (!mdx) {
    return null;
  }
  return (
    <>
      <SEO title="Resume" />
      <Wrapper>
        <Root>
          <Avatar alt="avatar" image={file!.childImageSharp!.gatsbyImageData} />
          <Profile />
        </Root>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
        <GoBack>
          <I18nLink to="/">← Go back</I18nLink>
        </GoBack>
      </Wrapper>
    </>
  );
}

export const query = graphql`
  query Resume($id: String!, $language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
    }
    file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
