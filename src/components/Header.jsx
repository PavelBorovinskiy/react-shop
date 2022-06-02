import React from "react";
import {AiOutlineGithub} from 'react-icons/ai'

const Header = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper red accent-4">
          <a href="/" className="brand-logo">
            React Shop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#!"><AiOutlineGithub className="github-icon"/></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
