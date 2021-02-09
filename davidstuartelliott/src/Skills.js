import React from "react";
import styled from "styled-components";

import { AiTwotoneCi } from "react-icons/ai";

function Skills() {
  return (
    <Pitch>
      <CenteringDiv>
        <SkillsFlex>
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

            <SkillsListFlexTools>
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
            </SkillsListFlexTools>
          </SkillItem>
        </SkillsFlex>
      </CenteringDiv>
    </Pitch>
  );
}

const SkillsListFlex = styled.div`
  padding-left: 2px;
  padding-right: 10px;
  line-height: 150%;
`;

const SkillsListFlexTools = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkillItem = styled.div`
  margin: 5px;
  width: 150px;
  @media (max-width: 800px) {
    width: 130px;
  }
`;

const SkillsFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  /* background-color: orange; */

  @media (max-width: 800px) {
    flex-wrap: wrap;

    /* background-color: red; */
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
  padding-top: 5px;
  @media (max-width: 800px) {
    padding-bottom: 10px;
  }
`;

const CenteringDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 800px) {
  }
`;

export default Skills;
