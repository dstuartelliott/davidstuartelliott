import React from "react";

import styled from "styled-components";

import { NavLink } from "react-router-dom";

// let divStyle = {
//   scope: "profile email",
//   width: 100,
//   height: 20,
//   fontSize: 18,
//   longtitle: true,
//   borderRaduis: 5,
//   color: "#4287f5",
// };

function MenuComponent() {
  // eslint-disable-next-line
  // eslint-disable-next-line

  return (
    <Wrapper>
      <InternalMenu>
        <MenuItemWrapper>
          <MenuItemLink to="/">Skills</MenuItemLink>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <MenuItemLink to="/podcastsearch">Story</MenuItemLink>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <MenuItemLink to="/selectedpodcasts">Github</MenuItemLink>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <MenuItemLink to="/selectedpodcasts">LinkedIn</MenuItemLink>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <MenuItemLink to="/selectedpodcasts">Twitter</MenuItemLink>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <MenuItemLink to="/selectedpodcasts">Contact</MenuItemLink>
        </MenuItemWrapper>
      </InternalMenu>
    </Wrapper>
  );
}

const MenuItemWrapper = styled.div`
  text-align: right;
  height: 25px;
`;
const MenuItemLink = styled(NavLink)`
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
  padding-top: 20px;
`;

const Wrapper = styled.div``;

export default MenuComponent;
