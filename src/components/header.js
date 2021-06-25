import React from 'react';
import { Link } from 'gatsby';

import StyledHeader from './styled/header';

export default function header() {
  return (
    <StyledHeader>
      <nav role="navigation">
        <ul>
          <li className="logo">
            <Link to="/" aria-label="Homepage">
              <svg>
                <use xlinkHref="/logo.svg#logo" />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}

// ORIGINALLY the list above which direct you to completed pages so KEEP THESE //
          // <li>
          //   <Link to="/">Github</Link>
          // </li>
          // <li>
          //   <Link to="/about">Contact</Link>
          // </li>
