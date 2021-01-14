import React from "react";
import styled from "styled-components";

import SmallerSource from "./images/self_square.jpg"; // Tell webpack this JS file uses this image
import TopFigma from "./TopFigma";

import DaveSrc from "./images/self_portfolio.jpg"; // Tell webpack this JS file uses this image

import HowImg1 from "./images/How1Master.png"; // Tell webpack this JS file uses this image
import TelusImg1 from "./images/telus1.png"; // Tell webpack this JS file uses this image

import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiTwotoneCi,
} from "react-icons/ai";

import Journey from "./Journey.js";
import Learned from "./Learned.js";

function goToGitHubProject() {
  window.location.href =
    "https://github.com/dstuartelliott/shopify-podcast-translator";
}

function goToHowPeopleTalk() {
  window.location.href = "http://www.howpeopletalk.com/";
}

function goToGitHub() {
  window.location.href = "https://github.com/davidelliott007";
}

function goToLi() {
  window.location.href = "https://www.linkedin.com/in/david-elliott-montreal/";
}

function goToTwitter() {
  window.location.href = "https://twitter.com/DStuartElliott";
}

function Home() {
  console.log("About");

  return (
    <HomeWrapper>
      <HomeDiv>
        <TopFigma />
        <ItemDetailsImage image_source={DaveSrc} smaller_source={SmallerSource}>
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

        <IntroStatement>
          <IntroPitch>
            My career has been based on pursuing jobs that leverage deep work
            and intense collaboration.
          </IntroPitch>

          <IntroPitch>
            I've worked in digital design, corporate training, leadership, and
            full stack web development.
          </IntroPitch>
          <IntroPitch>
            Last year, I enrolled in the Full Stack Bootcamp at Concordia
            Unversity - loved every minute of it - and graudated last November.
          </IntroPitch>
          <IntroPitch>
            Since August, with the generous support of everyone at Telus in the
            Training department, I've been supplmenting my full-time job at as a
            Training Manager with Front End development work at Telus Digital.
          </IntroPitch>

          <IntroPitch>
            Full stack development is a perfect fit for me. Every git commit I
            make, and every standup I go to is, frankly, joyful.
          </IntroPitch>
        </IntroStatement>
        <Headline>From Design, to Leadership, to Development</Headline>

        <Journey></Journey>

        <Pitch>
          <Headline>Developer Skills</Headline>
          <Skills>
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
                  React Testing Library
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
          </Skills>
        </Pitch>

        <HeadlineLearned>
          What I've learned, shipping working code
        </HeadlineLearned>

        <Learned></Learned>

        <Pitch>
          <Headline>FullStack Graduation Project - How People Talk</Headline>
          <IntroPitch>
            A podcast app that non-english speakers can use to learn
            conversational english.
          </IntroPitch>
          <IntroPitch>
            Episodes repeated back to you in your native tongue with a local
            accent.
          </IntroPitch>

          <Details>
            <AppDetailsImg
              image_source={HowImg1}
              smaller_source={HowImg1}
            ></AppDetailsImg>

            <ProjectButtons>
              <TLDRBtnSmaller onClick={goToHowPeopleTalk}>
                howpeopletalk.com
              </TLDRBtnSmaller>
              <TLDRBtnSmaller onClick={goToGitHubProject}>
                Explore GitHub Repo for HowPeopleTalk
              </TLDRBtnSmaller>
            </ProjectButtons>
          </Details>

          <Headline>Telus Digital Internship - Brand Hub</Headline>
          <IntroPitch>
            An internal Telus Site that showcases Brand assets and guidelines.
          </IntroPitch>
          <IntroPitch>
            I develop Front End changes, I collaborate with my fellow devs, and
            I test and merge PRs with our internal GitHub.
          </IntroPitch>
          <Details>
            <AppDetailsImg
              image_source={TelusImg1}
              smaller_source={TelusImg1}
            ></AppDetailsImg>
            <IntroPitch>
              This is an internal product, but I'm happy to discuss the tools
              and processes used to develop
            </IntroPitch>
          </Details>
        </Pitch>

        <FinalPart>
          <body>
            Thanks for your time - I know there are a lot of candidates, and I'm
            looking forward to exploring how I can leverage my skillset for your
            company.
          </body>
          <FinalButtons>
            <ProfileButtonInSentence onClick={goToGitHub}>
              <AiFillGithub size={50} style={{ verticalAlign: "middle" }} />
            </ProfileButtonInSentence>
            <ProfileButtonInSentence onClick={goToLi}>
              <AiFillLinkedin size={50} style={{ verticalAlign: "middle" }} />
            </ProfileButtonInSentence>
            <ProfileButtonInSentence onClick={goToTwitter}>
              <AiFillTwitterCircle
                size={50}
                style={{ verticalAlign: "middle" }}
              />
            </ProfileButtonInSentence>
          </FinalButtons>
          <body>Best, Dave Elliott </body>
        </FinalPart>
      </HomeDiv>
    </HomeWrapper>
  );
}

const SkillsListFlex = styled.div``;

const SkillItem = styled.div``;

const Skills = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

const ProjectButtons = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5px;
  padding-bottom: 20px;
  align-items: flex-start;
`;

const Headline = styled.div`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  /* identical to box height, or 36px */

  /* SUNRISE / Charcoal */
  color: #37313c;
`;

const HeadlineLearned = styled.div`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  padding-top: 20px;x
  /* identical to box height, or 36px */

  /* SUNRISE / Charcoal */
  color: #37313c;
`;

const HomeDiv = styled.div``;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FinalButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const FinalPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* max-width: 800px; */
  padding-top: 20px;
`;

const Pitch = styled.div`
  padding-top: 20px;
  /* max-width: 800px; */
`;

const Details = styled.div`
  padding-top: 20px;
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

const ProfileButtonInSentence = styled.button`
  background-color: transparent;
  color: #00848e;
  :hover {
    cursor: pointer;
    color: #b4e1fa;
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

const TLDRBtnSmaller = styled.button`
  color: #00848e;
  background-color: transparent;
  font-size: 15px;
  font-weight: 500;

  padding-top: 15px;
  border: transparent;

  @media (max-width: 800px) {
    font-size: 27px;
    line-height: 36px;
    font-weight: 500;
  }

  border-radius: 3px;
  :hover {
    cursor: pointer;
  }
`;

const ProfileButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
`;

const AppDetailsImg = styled.div`
  background-image: url("${(props) => props.image_source}");
  height: 400px;
  padding: 20px;

  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 5px;
  box-shadow: 3px 3px 10px #d2cdd5;
  z-index: 1;

  @media (max-width: 800px) {
    background-image: url("${(props) => props.smaller_source}");
    background-position: center;
  }
`;

const ItemDetailsImage = styled.div`
  background-image: url("${(props) => props.image_source}");
  height: 300px;
  /* max-width: 800px; */

  background-position: top-right;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 15px;
  border: none;
  z-index: 1;

  @media (max-width: 800px) {
    background-image: url("${(props) => props.smaller_source}");
    background-position: center;
  }
`;

const IntroStatement = styled.div`
  padding-top: 10px;
  margin-bottom: 20px;
  /* width: 800px; */
  background-color: blue;

  @media (max-width: 799px) {
    background-color: red;
    display: flex;
  }
`;

const IntroPitch = styled.div`
  color: black;
  padding-top: 5px;

  font-family: Avenir Next;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
`;

export default Home;
