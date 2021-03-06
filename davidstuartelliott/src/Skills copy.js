import React from "react";
import styled from "styled-components";

import { AiTwotoneCi } from "react-icons/ai";

function Skills() {
  console.log("About");

  return (
    <Pitch>
      <Headline>Developer Skills</Headline>
      <CenteringDiv>
        <SkillsFlex>
          <SkillsCoupleRight>
            <SkillItem>
              <SkillHeadline>Front End</SkillHeadline>
              <SkillsListFlex>
                <div>
                  <AiTwotoneCi
                    size={5}
                    style={{
                      verticalAlign: "15%",
                      color: "gray",
                    }}
                  ></AiTwotoneCi>{" "}
                  React
                </div>

                <div>
                  <AiTwotoneCi
                    size={5}
                    style={{
                      verticalAlign: "15%",
                      color: "gray",
                    }}
                  ></AiTwotoneCi>{" "}
                  Redux
                </div>
                <div>
                  <AiTwotoneCi
                    size={5}
                    style={{
                      verticalAlign: "15%",
                      color: "gray",
                    }}
                  ></AiTwotoneCi>{" "}
                  JavaScript ES6
                </div>
                <div>
                  <AiTwotoneCi
                    size={5}
                    style={{
                      verticalAlign: "15%",
                      color: "gray",
                    }}
                  ></AiTwotoneCi>{" "}
                  HTML
                </div>
                <div>
                  <AiTwotoneCi
                    size={5}
                    style={{
                      verticalAlign: "15%",
                      color: "gray",
                    }}
                  ></AiTwotoneCi>{" "}
                  CSS
                </div>
              </SkillsListFlex>
            </SkillItem>
            <SkillItem>
              <SkillHeadline>Back End</SkillHeadline>

              <SkillsListFlex>
                <div>
                  <AiTwotoneCi
                    size={5}
                    style={{
                      verticalAlign: "15%",
                      color: "gray",
                    }}
                  ></AiTwotoneCi>{" "}
                  Node.js
                </div>

                <div>
                  <AiTwotoneCi
                    size={5}
                    style={{
                      verticalAlign: "15%",
                      color: "gray",
                    }}
                  ></AiTwotoneCi>{" "}
                  Express
                </div>
                <div>
                  <AiTwotoneCi
                    size={5}
                    style={{
                      verticalAlign: "15%",
                      color: "gray",
                    }}
                  ></AiTwotoneCi>{" "}
                  MongoDB
                </div>
              </SkillsListFlex>
            </SkillItem>

            <SkillItem>
              <SkillHeadline>Testing </SkillHeadline>

              <SkillsListFlex>
                <div>
                  <AiTwotoneCi
                    size={5}
                    style={{
                      verticalAlign: "15%",
                      color: "gray",
                    }}
                  ></AiTwotoneCi>{" "}
                  Enzyme
                </div>

                <div>
                  <AiTwotoneCi
                    size={5}
                    style={{
                      verticalAlign: "15%",
                      color: "gray",
                    }}
                  ></AiTwotoneCi>{" "}
                  Jest
                </div>
                <div>
                  <AiTwotoneCi
                    size={5}
                    style={{
                      verticalAlign: "15%",
                      color: "gray",
                    }}
                  ></AiTwotoneCi>{" "}
                  RTL
                </div>
              </SkillsListFlex>
            </SkillItem>
          </SkillsCoupleRight>
          <SkillsCoupleLeft>
            <SkillItem>
              <SkillHeadline>Mobile </SkillHeadline>

              <SkillsListFlex>
                <div>
                  <AiTwotoneCi
                    size={5}
                    style={{
                      verticalAlign: "15%",
                      color: "gray",
                    }}
                  ></AiTwotoneCi>{" "}
                  iOS Swift
                </div>

                <div>
                  <AiTwotoneCi
                    size={5}
                    style={{
                      verticalAlign: "15%",
                      color: "gray",
                    }}
                  ></AiTwotoneCi>{" "}
                  iOS ARKit
                </div>
              </SkillsListFlex>
            </SkillItem>
            <SkillItem>
              <SkillHeadline>Tools </SkillHeadline>

              <SkillsListFlex>
                <div>
                  <AiTwotoneCi
                    size={5}
                    style={{
                      verticalAlign: "15%",
                      color: "gray",
                    }}
                  ></AiTwotoneCi>{" "}
                  Jira & Trello
                </div>

                <div>
                  <AiTwotoneCi
                    size={5}
                    style={{
                      verticalAlign: "15%",
                      color: "gray",
                    }}
                  ></AiTwotoneCi>{" "}
                  Git CLI & GitHub
                </div>
                <div>
                  <AiTwotoneCi
                    size={5}
                    style={{
                      verticalAlign: "15%",
                      color: "gray",
                    }}
                  ></AiTwotoneCi>{" "}
                  NPM & Yarn
                </div>
                <div>
                  <AiTwotoneCi
                    size={5}
                    style={{
                      verticalAlign: "15%",
                      color: "gray",
                    }}
                  ></AiTwotoneCi>{" "}
                  VS Code
                </div>
                <div>
                  <AiTwotoneCi
                    size={5}
                    style={{
                      verticalAlign: "15%",
                      color: "gray",
                    }}
                  ></AiTwotoneCi>{" "}
                  Photoshop & Figma
                </div>
              </SkillsListFlex>
            </SkillItem>
          </SkillsCoupleLeft>
        </SkillsFlex>
      </CenteringDiv>
    </Pitch>
  );
}

const Headline = styled.div`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  /* identical to box height, or 36px */

  /* SUNRISE / Charcoal */
  color: #37313c;

  @media (max-width: 800px) {
    padding-top: 20px;

    font-size: 19px;
  }
`;

const BulletDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: blue;
`;
const BulletDivBullet = styled.div`
  background-color: green;
`;

const BulletDivWords = styled.div`
  padding-left: 3px;
`;

const SkillsCoupleRight = styled.div`
  display: flex;
  justify-content: flex-start;

  /* background-color: green; */
  @media (max-width: 800px) {
    padding-top: 20px;
  }
`;
const SkillsCoupleLeft = styled.div`
  display: flex;
  justify-content: flex-start;

  /* background-color: blue; */
  @media (max-width: 800px) {
    padding-top: 10px;
  }
`;

const SkillsListFlex = styled.div`
  padding-left: 2px;
  padding-right: 10px;
`;

const SkillItem = styled.div`
  /* @media (max-width: 300px) {
    width: 125px;
  } */
  /* background-color: red; */
  margin: 5px;
  width: 150px;
`;

const SkillsFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* background-color: orange; */

  @media (max-width: 800px) {
    flex-direction: column;

    /* background-color: red; */
    align-content: space-between;
    font-size: 13px;
  }
`;

const SkillHeadline = styled.div`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  /* identical to box height, or 36px */

  /* SUNRISE / Charcoal */
  color: #00848e;

  @media (max-width: 800px) {
    font-size: 13px;
  }
`;
const Pitch = styled.div`
  padding-top: 30px;
  padding-bottom: 40px;
`;

const CenteringDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5px;

  @media (max-width: 800px) {
  }
`;

export default Skills;
