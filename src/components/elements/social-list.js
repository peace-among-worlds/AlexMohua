import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

import StyledSocialList from './styled/social-list';

export default function SocialList(props) {
  return (
    <StyledSocialList {...props}>
      <li>
        <a
          href="https://https://github.com/peace-among-worlds"
          aria-label="github repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
    </StyledSocialList>
  );
}