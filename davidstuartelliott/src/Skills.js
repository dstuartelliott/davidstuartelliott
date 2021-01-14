import React from "react";
import styled from "styled-components";

import { AiTwotoneCi } from "react-icons/ai";

function Skills() {
  console.log("About");

  return (
    <Pitch>
      <Headline>Developer Skills</Headline>
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
          <SkillItem>
            <SkillHeadline>Currently Learning </SkillHeadline>

            <SkillsListFlex>
              <div>
                <AiTwotoneCi
                  size={5}
                  style={{
                    verticalAlign: "15%",
                    color: "gray",
                  }}
                ></AiTwotoneCi>{" "}
                React Testing Library{" "}
              </div>

              <div>
                <AiTwotoneCi
                  size={5}
                  style={{
                    verticalAlign: "15%",
                    color: "gray",
                  }}
                ></AiTwotoneCi>{" "}
                Fastify{" "}
              </div>
            </SkillsListFlex>
          </SkillItem>
        </SkillsCoupleLeft>
      </SkillsFlex>
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
    font-size: 19px;
    text-align: justify;
  }
`;

const SkillsCoupleLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  /* background-color: green; */
  width: 500px;
  @media (max-width: 800px) {
    width: 500px;
    justify-content: center;
  }
`;
const SkillsCoupleRight = styled.div`
  display: flex;
  justify-content: flex-start;
  /* background-color: blue; */
  padding-left: 10px;
  width: 500px;
  padding-right: 35px;
  width: 350px;
  @media (max-width: 800px) {
    width: 500px;
    padding-right: 0px;
    padding-left: 0px;
    justify-content: center;

    padding-bottom: 20px;
  }
`;

const SkillsListFlex = styled.div`
  width: 140px;
`;

const SkillItem = styled.div``;

const SkillsFlex = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  /* background-color: red; */

  @media (max-width: 800px) {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    /* background-color: red; */
    align-items: center;
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
`;
const Pitch = styled.div`
  padding-top: 20px;
  /* max-width: 800px; */
`;

export default Skills;
