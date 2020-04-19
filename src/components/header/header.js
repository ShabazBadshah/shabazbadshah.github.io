import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import { globalThemeColor } from '../../assets/globalStyles.js';

import SocialMediaLinks from '../social-media-icons/social-media-links.js';
import NavHamburgerMenuIcon from './nav-hamburger-menu-button.js';
import DarkModeSwitchButton from './dark-mode-switch-button.js';

class Header extends Component {
  constructor(props) {
    super(props);

    this.wordToEmphasize = this.props.headerTitle.substr(0, this.props.headerTitle.indexOf(' '));
    this.remainingString = this.props.headerTitle.slice(
      this.props.headerTitle.indexOf(' ') + 1,
      this.props.headerTitle.length
    );
  }

  render() {
    return (
      <StyledHeader>
        <HeaderContainer>
          <NavHamburgerMenuIcon />
          <DarkModeSwitchButton />

          <StyledHeaderLink to="/">
            <span>{this.wordToEmphasize}</span>
            {this.remainingString}
          </StyledHeaderLink>

          <SocialMediaLinks />
        </HeaderContainer>
      </StyledHeader>
    );
  }
}

export default Header;

Header.propTypes = {
  headerTitle: PropTypes.string,
};

Header.defaultProps = {
  headerTitle: 'shabaz badshah',
};

const StyledHeader = styled.header`
  height: 100vh;
  width: 6rem;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
`;

const HeaderContainer = styled.div`
  background-color: #008cff;
  box-shadow: 5px 0px 30px 0px rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
  padding: 40px 0 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledHeaderLink = styled(Link)`
  /* Display text sideways */
  writing-mode: vertical-lr;
  text-orientation: sideways;
  transform: scale(-1, -1);

  align-self: center;

  color: white;
  text-decoration: none;
  font-size: 2em;

  & span:first-of-type {
    font-style: normal;
    font-weight: 900;
    margin-bottom: 0.4em; /* spacing between first word and remainder of string*/
  }
`;
