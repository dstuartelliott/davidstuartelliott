import React from "react";
import styled from "styled-components";

import DaveSrc from "./images/self_portfolio.jpg"; // Tell webpack this JS file uses this image

import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

function goToGitHub() {
  window.location.href = "https://github.com/dstuartelliott";
}

function goToLi() {
  window.location.href = "https://www.linkedin.com/in/david-stuart-elliott/";
}

function goToTwitter() {
  window.location.href = "https://twitter.com/DStuartElliott";
}

function TopImage() {
  console.log("About");

  return (
    <ImageWrapper>
      <ItemDetailsImage image_source={DaveSrc} smaller_source={DaveSrc}>
        <ProfileButtons>
          <ProfileButton onClick={goToGitHub}>
            <AiFillGithub size={50} style={{ verticalAlign: "middle" }} />
          </ProfileButton>
          <ProfileButton onClick={goToLi}>
            <AiFillLinkedin size={50} style={{ verticalAlign: "middle" }} />
          </ProfileButton>

          <ProfileButton onClick={goToTwitter}>
            <AiFillTwitterCircle
              size={50}
              style={{ verticalAlign: "middle" }}
            />
          </ProfileButton>
        </ProfileButtons>
      </ItemDetailsImage>
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileButton = styled.button`
  background-color: transparent;
  color: #e0f5f5;
  :hover {
    cursor: pointer;
    color: #47c1bf;
  }
  :focus {
    outline: none;
  }
  vertical-align: middle;
  padding: 2px;
  align-self: left;
  width: 50px;
  margin-bottom: 10px;
  border: 0px;
`;

const ProfileButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
`;

const ItemDetailsImage = styled.div`
  background-image: url("${(props) => props.image_source}");
  height: 300px;
  background-position: top-right;
  background-size: cover;
  background-repeat: no-repeat;
  will-change: transform;

  border-radius: 15px;
  border: none;
  z-index: 1;

  @media (max-width: 800px) {
    background-position: center;
  }

  @media (max-width: 320px) {
  }
`;

export default TopImage;
