import React from "react";

import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router, Link } from "react-router-dom";

function MenuComponent() {
  // eslint-disable-next-line

  return (
    <Wrapper>
      <InternalMenu>
        <MenuItemWrapper>
          <MenuItemLink to="/#Story">Story</MenuItemLink>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <MenuItemLink to="/#Skills">Skills</MenuItemLink>
        </MenuItemWrapper>

        <MenuItemWrapper>
          <MenuItemLink to="/selectedpodcasts">Projects</MenuItemLink>
        </MenuItemWrapper>

        <MenuItemWrapper>
          <MenuItemLink to="/selectedpodcasts">Twitter</MenuItemLink>
        </MenuItemWrapper>

        <MenuItemWrapper>
          <MenuItemLink to="/selectedpodcasts">Github</MenuItemLink>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <MenuItemLink to="/selectedpodcasts">LinkedIn</MenuItemLink>
        </MenuItemWrapper>

        <MenuItemWrapper>
          <MenuItemLink to="/selectedpodcasts">Contact Info</MenuItemLink>
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
