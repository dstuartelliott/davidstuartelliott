import React from "react";

import styled from "styled-components";

import { HashLink } from "react-router-hash-link";
function goToGitHub() {
  window.location.href = "https://github.com/dstuartelliott";
}

function goToLi() {
  window.location.href = "https://www.linkedin.com/in/david-elliott-montreal/";
}

function goToTwitter() {
  window.location.href = "https://twitter.com/DStuartElliott";
}

function MenuComponent() {
  // eslint-disable-next-line

  return (
    <Wrapper>
      <InternalMenu>
        <MenuItemWrapper>
          <MenuItemLink smooth to="/#Story">
            Story
          </MenuItemLink>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <MenuItemLink smooth to="/#Skills">
            Skills
          </MenuItemLink>
        </MenuItemWrapper>

        <MenuItemWrapper>
          <MenuItemLink smooth to="/#Projects">
            Projects
          </MenuItemLink>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <MenuItemLink smooth to="/#ContactInfo">
            Contact
          </MenuItemLink>
        </MenuItemWrapper>

        <MenuItemWrapper>
          <MenuItemExternalLink onClick={goToTwitter}>
            Twitter
          </MenuItemExternalLink>
        </MenuItemWrapper>

        <MenuItemWrapper>
          <MenuItemExternalLink onClick={goToGitHub}>
            Github
          </MenuItemExternalLink>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <MenuItemExternalLink onClick={goToLi}>LinkedIn</MenuItemExternalLink>
        </MenuItemWrapper>
      </InternalMenu>
    </Wrapper>
  );
}

const MenuItemWrapper = styled.div`
  text-align: right;
  height: 25px;
`;
const MenuItemLink = styled(HashLink)`
  height: 25px;
  padding: 10px;

  font-family: Avenir Next;
  font-style: normal;
  font-size: 15px;
  font-weight: 400;

  color: #20404e;
  text-decoration: none;
  :hover {
    color: #00848e;
    cursor: hand;
  }
`;

const MenuItemExternalLink = styled.button`
  height: 25px;

  font-family: Avenir Next;
  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  background-color: transparent;
  border: 0px;

  color: #20404e;
  text-decoration: none;
  :hover {
    color: #00848e;
    cursor: hand;
  }
`;

const InternalMenu = styled.div`
  background-color: #f1ebf5;
  background: linear-gradient(45deg, #f1ebf5, #fcda71);

  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding-top: 5px;
`;

const Wrapper = styled.div``;

export default MenuComponent;
