import React, { useContext } from 'react';
import styled, { keyframes, ThemeContext } from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import { useStaticQuery, graphql } from 'gatsby';

import { headShake } from 'react-animations';
import { deviceMaxWidth } from '../../assets/media-query-sizes.js';
import Img from 'gatsby-image';

const SocialMediaLinks = () => {
  const theme = useContext(ThemeContext);

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150, quality: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      site {
        siteMetadata {
          contactInfo {
            email
            github
            linkedin
          }
        }
      }
    }
  `);

  return (
    <StyledContactCard>
      <StyledImage fluid={data.file.childImageSharp.fluid} />
      <StyledCardTitle>Get in touch</StyledCardTitle>
      <StyledCardSubtitle>Find me online at the places below, or just shoot me an email</StyledCardSubtitle>

      <StyledSocialMediaLinksWrapper>
        <a target="_blank" rel="noopener noreferrer" href={data.site.siteMetadata.contactInfo.linkedin}>
          <StyledSocialMediaLink>
            <FaLinkedin color={theme.iconColour} size="1.7em" />
            <StyledSocialMediaLinkText>LinkedIn</StyledSocialMediaLinkText>
          </StyledSocialMediaLink>
        </a>
        <a target="_blank" rel="noopener noreferrer" href={data.site.siteMetadata.contactInfo.github}>
          <StyledSocialMediaLink>
            <FaGithub color={theme.iconColour} size="1.7em" />
            <StyledSocialMediaLinkText>Github</StyledSocialMediaLinkText>
          </StyledSocialMediaLink>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`mailto:${data.site.siteMetadata.contactInfo.email}Subject=Hey%20Shabaz`}
        >
          <StyledSocialMediaLink>
            <FaEnvelope color={theme.iconColour} size="1.7em" />
            <StyledSocialMediaLinkText>Email</StyledSocialMediaLinkText>
          </StyledSocialMediaLink>
        </a>
      </StyledSocialMediaLinksWrapper>
    </StyledContactCard>
  );
};

export default SocialMediaLinks;

const StyledSocialMediaLinkText = styled.h3`
  color: ${(props) => props.theme.text};
  margin-left: 1rem;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: normal;
  margin: 0 1rem;
`;

const StyledCardTitle = styled.h3`
  font-size: 1.5rem;
  color: #f9f8f7;
  margin: 1.5rem 0 1rem 0;
`;

const StyledCardSubtitle = styled.h4`
  text-align: center;
  margin: 0.5rem 0;
  font-size: 1.1rem;
  font-weight: normal;
  color: #f9f8f7;
  line-height: 1.5rem;
  word-spacing: 0.11rem;
`;

const StyledSocialMediaLinksWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 0;
  width: 100%;

  & a {
    text-decoration: none;
  }
`;

const StyledSocialMediaLink = styled.li`
  padding: 0.6rem 1rem;
  background-color: ${(props) => props.theme.socialMediaLinkBgColour};
  margin: 1rem 0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  &:hover {
    animation: ${keyframes`${headShake}`} 800ms ease-in-out;
    box-shadow: 0.5em 0.5em 1.5em 0 rgba(85, 85, 85, 0.1);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledImage = styled(Img)`
  border-radius: 50%;
  width: 130px;
  height: auto;
`;

const StyledContactCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.primaryThemeColour};
  padding: 2em;
  border-radius: 8px;
  box-shadow: rgba(85, 85, 85, 0.08) 0.5rem 0.5rem 1rem 0;
  min-width: 300px;
  max-height: 500px;
  margin-right: 4rem;

  @media only screen and ${deviceMaxWidth.tablet} {
    margin-right: 3rem;
  }

  @media only screen and ${deviceMaxWidth.mobileL} {
    margin-right: 0;
    margin-top: 2rem;
    max-width: 320px;
  }
`;
