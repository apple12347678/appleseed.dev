import styled from '@emotion/styled';

import RootProvider from './RootProvider';

const Footer = styled.footer`
  height: 25px;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: flex-end;
`;

const Copyright = styled.span`
  margin-right: auto;
  color: var(--color-500);
  font-size: 0.85rem;
  font-weight: 400;
  user-select: none;
`;

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <RootProvider>
      <main>{children}</main>
      <Footer>
        <Copyright>© 2020 by appleseed</Copyright>
      </Footer>
    </RootProvider>
  );
}
