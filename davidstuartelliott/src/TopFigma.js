import React from "react";
import styled from "styled-components";
import MenuComponent from "./MenuComponent";

import TeenyBurgerComponent from "./SVGs/TeenyBurgerComponent";
import { Spring, config } from "react-spring/renderprops";

function TopFigma() {
  const [burgerToggle, setBurgerToggle] = React.useState(false);

  const [toggle, setToggle] = React.useState(false);
  //#00848e
  return (
    <Wrapper>
      {/* <MenuTitleConstant>How People </MenuTitleConstant> */}
      <Spring
        // config={config.gentle}
        config={{ tension: 170, friction: 40, precision: 0.01, velocity: 0 }}
        from={{ stroke: burgerToggle ? "#37313C" : "#FDC500" }}
        to={{ stroke: burgerToggle ? "#FDC500" : "#37313C" }}
      >
        {(props) => (
          <MenuHeader>
            <MenuTitle stroke={props.stroke}>davidstuartelliott.com</MenuTitle>

            <BurgerIcon>
              <BurgerButton
                onMouseEnter={() => setBurgerToggle(!burgerToggle)}
                onMouseLeave={() => setBurgerToggle(!burgerToggle)}
                onClick={() => setToggle(!toggle)}
              ></BurgerButton>
              <TeenyBurgerComponent
                stroke={props.stroke}
              ></TeenyBurgerComponent>
            </BurgerIcon>
          </MenuHeader>
        )}
      </Spring>
      <PodcastEpisode>
        <PodcastText>
          <Spring
            // config={config.gentle}
            config={{
              tension: 170,
              friction: 171,
              precision: 0.01,
              velocity: 0,
            }}
            from={{ stroke: burgerToggle ? "#37313C" : "#FDC500" }}
            to={{ stroke: burgerToggle ? "#FDC500" : "#37313C" }}
          >
            {(sunlightProps) => (
              <div>
                <PodcastEpisodeTitle stroke={sunlightProps.stroke}>
                  {
                    "Hello there! I'm David Elliott, and I'm a Full Stack Web Developer."
                  }
                </PodcastEpisodeTitle>
                <Spring
                  config={config.stiff}
                  from={{
                    height: toggle ? "50px" : "100px",
                  }}
                  to={{
                    height: toggle ? "100px" : "50px",
                  }}
                >
                  {(props) => (
                    <TextAndDownArrow>
                      <PodcastEpisodeDescription
                        stroke={sunlightProps.stroke}
                        height={props.height}
                      >
                        <HeaderText>
                          I'm pivoting from a rewarding career in adult learning
                          and leadership to a love of code.
                        </HeaderText>

                        <HeaderText>
                          I'm determined to become a full time developer, and
                          I'd love to chat about available roles in your
                          organization.
                        </HeaderText>
                      </PodcastEpisodeDescription>
                    </TextAndDownArrow>
                  )}
                </Spring>
              </div>
            )}
          </Spring>
        </PodcastText>
        <MenuWrapper>
          <Spring
            // config={config.gentle}
            config={{
              tension: 170,
              friction: 171,
              precision: 0.01,
              velocity: 0,
            }}
            from={{ stroke: burgerToggle ? "#37313C" : "#FDC500" }}
            to={{ stroke: burgerToggle ? "#FDC500" : "#37313C" }}
          >
            {(props) => (
              <div>
                <Spring
                  force
                  config={{ tension: 2000, friction: 100, precision: 1 }}
                  from={{
                    width: toggle ? 0 : 180,
                    height: toggle ? 0 : 200,
                    paddingLeft: toggle ? 0 : 5,
                  }}
                  to={{
                    width: toggle ? 180 : 0,
                    height: toggle ? 200 : 0,
                    paddingLeft: toggle ? 5 : 0,
                  }}
                  // onRest={reportSize}
                >
                  {(props) => (
                    <Menu style={props}>
                      <MenuComponent></MenuComponent>
                    </Menu>
                  )}
                </Spring>
              </div>
            )}
          </Spring>
        </MenuWrapper>
      </PodcastEpisode>
    </Wrapper>
  );
}

const MenuWrapper = styled.div`
  margin-top: -3px;
`;

const Menu = styled.div`
  overflow: hidden;
`;

const PodcastEpisode = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
`;

const PodcastText = styled.div`
  padding-left: 2px;
  flex-shrink: 10;
`;

const TextAndDownArrow = styled.div`
  display: flex;
  flex-direction: row;
`;
const PodcastEpisodeDescription = styled.div`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  padding-top: 5px;
  padding-right: 5px;
  flex: 1;
  text-align: justify;
  height: ${(props) => props.height};

  background: radial-gradient(circle at 0%, #37313c, ${(props) => props.stroke})
    no-repeat;
  -webkit-background-clip: text;
  background-clip: text;

  -webkit-text-fill-color: transparent;

  color: #37313c;

  overflow-y: hidden;

  /* SUNRISE / Text Grey */

  /* color: #605866; */
`;

const PodcastEpisodeTitle = styled.div`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  /* identical to box height, or 36px */

  /* SUNRISE / Charcoal */
  background: radial-gradient(circle at 0%, #37313c, ${(props) => props.stroke})
    no-repeat;
  -webkit-background-clip: text;
  background-clip: text;

  -webkit-text-fill-color: transparent;

  color: #37313c;
`;

const HeaderText = styled.div`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
`;

const MenuHeader = styled.div`
  left: 0px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const MenuTitle = styled.div`
  /* B */

  font-family: Avenir Next;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  /* identical to box height, or 22px */
  align-self: center;

  background: linear-gradient(45deg, #37313c, ${(props) => props.stroke})
    no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BurgerButton = styled.button`
  background-color: transparent;
  position: absolute;
  border: transparent;
  outline: none;
  height: 20px;
  :hover {
    background-color: transparent;
    cursor: pointer;
  }
`;

const BurgerIcon = styled.div`
  /* SUNRISE / Light Charcoal */
  padding-left: 5px;
  align-self: flex-start;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

export default TopFigma;
