import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import StyledFooter from './styled/footer';
import SocialList from './elements/social-list';

export default function Footer() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(AuthorQuery);
  return (
    <StyledFooter>
      <SocialList />
      <p className="author">
        Contact {' '}
        <a
          href="mailto:alex.mohua@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteMetadata.author}
        </a>
      </p>
    </StyledFooter>
  );
}

const AuthorQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;