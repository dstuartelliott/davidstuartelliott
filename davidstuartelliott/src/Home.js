import React from "react";
import styled from "styled-components";

import TopFigma from "./TopFigma";

import HowImg1 from "./images/How1Master.png"; // Tell webpack this JS file uses this image
import TelusImg1 from "./images/telus1.png"; // Tell webpack this JS file uses this image

import TopImage from "./TopImage";

import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

import Journey from "./Journey.js";
import Learned from "./Learned.js";
import Skills from "./Skills.js";

function goToGitHubProject() {
  window.location.href =
    "https://github.com/dstuartelliott/shopify-podcast-translator";
}

function goToTelusBrandHub() {
  window.location.href = "https://brand.telus.com/";
}

function goToHowPeopleTalk() {
  window.location.href = "http://www.howpeopletalk.com/";
}

function goToGitHub() {
  window.location.href = "https://github.com/dstuartelliott";
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
        <CenterCol>
          <TopFigma />
          <TopImage />
          <IntroStatement id="Story">
            <TitleFlex>
              <SeperatorRTop></SeperatorRTop>
              <Headline> My Story</Headline>
              <SeperatorLTop></SeperatorLTop>
            </TitleFlex>

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
              Unversity - loved every minute of it - and graduated last
              November.
            </IntroPitch>
            <IntroPitch>
              In October of 2020, I supplmentend my full-time job at as a
              Training Manager with Front End development work at Telus Digital.
            </IntroPitch>

            <IntroPitch>
              On February 1st, I began a 6 month Full Time Developmental Role at
              Telus Digital on the same team that I had interned on.
            </IntroPitch>
          </IntroStatement>
          <HeadlineSub>From Design, to Leadership, to Development</HeadlineSub>
          <Journey />
          <LearningsDiv>
            <HeadlineSub>Key Learnings</HeadlineSub>
            <Learned></Learned>
          </LearningsDiv>
          <span id="Skills"></span>
          <TitleFlex>
            <SeperatorRTop></SeperatorRTop>
            <Headline> Developer Skills</Headline>
            <SeperatorLTop></SeperatorLTop>
          </TitleFlex>

          <Skills />
          <Projects id="Projects">
            <TitleFlex>
              <SeperatorR></SeperatorR>
              <Headline> Projects</Headline>
              <SeperatorL></SeperatorL>
            </TitleFlex>

            <Pitch>
              <HeadlineSub>
                FullStack Graduation Project - How People Talk
              </HeadlineSub>
              <IntroPitch>
                This is a podcast app that I made for non-english speakers, who
                can use it to learn conversational english.
              </IntroPitch>
              <IntroPitch>
                Episodes are repeated back to you in your native tongue with a
                local accent. I'm using it to learn Quebec-specific french!
              </IntroPitch>
              <IntroPitch>
                I wanted to push myself to stretch both back-end and front-end
                skills. Google Translate APIs, React Spring Animations, Custom
                Audio Players - I'd love to chat more with you about my choices
                around the stack here!
              </IntroPitch>
              <Details>
                <AppDetailsImg
                  image_source={HowImg1}
                  smaller_source={HowImg1}
                  onClick={goToHowPeopleTalk}
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

              <HeadlineSub>Telus Digital Internship - Brand Hub</HeadlineSub>
              <IntroPitch>
                An internal Telus Site that showcases Brand assets and
                guidelines. I'm helping out on a new version that has been
                partially launched.
              </IntroPitch>
              <IntroPitch>
                I develop Front End changes, I collaborate with my fellow devs,
                and I test and merge PRs with our internal GitHub.
              </IntroPitch>
              <IntroPitch>
                This is an internal product, but I'm happy to discuss the tools
                and processes used to develop it.
              </IntroPitch>
              <IntroPitch>
                I learned how to use a Contentful CRM, Enzyme, and Jest - but
                most importantly, I learned how I can fit in the rituals and
                rhythms of daily agile software development. Turns out, it's a
                pretty good fit!
              </IntroPitch>

              <Details>
                <AppDetailsImg
                  image_source={TelusImg1}
                  smaller_source={TelusImg1}
                  onClick={goToTelusBrandHub}
                ></AppDetailsImg>
              </Details>
              <TLDRBtnSmaller onClick={goToTelusBrandHub}>
                Telus Brand Hub
              </TLDRBtnSmaller>
            </Pitch>
          </Projects>
          <FinalPart id="ContactInfo">
            <Headline>Let's Chat</Headline>

            <FinalText>
              <IntroPitch>
                Well, that's my pitch! I bring a love of collaboration and
                curiosity to work that I do, and development work is the perfect
                fit for me. I hope I can discuss how that can work for your
                company.
              </IntroPitch>
              <IntroPitch>
                Let's discuss how that can work for your company.
              </IntroPitch>

              <IntroPitch>
                Thanks for your time - I know there are a lot of candidates, and
                I appreciate you reviewing my portfolio.
              </IntroPitch>

              <IntroPitch>Best, Dave Elliott </IntroPitch>
            </FinalText>
            <ContactInfo>
              <FinalButtons>
                <ProfileButtonInSentence onClick={goToGitHub}>
                  <AiFillGithub size={50} style={{ verticalAlign: "middle" }} />
                </ProfileButtonInSentence>
                <ProfileButtonInSentence onClick={goToLi}>
                  <AiFillLinkedin
                    size={50}
                    style={{ verticalAlign: "middle" }}
                  />
                </ProfileButtonInSentence>
                <ProfileButtonInSentence onClick={goToTwitter}>
                  <AiFillTwitterCircle
                    size={50}
                    style={{ verticalAlign: "middle" }}
                  />
                </ProfileButtonInSentence>
              </FinalButtons>
            </ContactInfo>
          </FinalPart>
        </CenterCol>
      </HomeDiv>
    </HomeWrapper>
  );
}

const ContactInfo = styled.div`
  padding-top: 20px;
  margin-left: -8px;
  @media (max-width: 800px) {
    margin-left: -5px;
  }
`;

const TitleFlex = styled.div`
  display: flex;
  padding-top: 20px;
`;

const SeperatorLTop = styled.div`
  margin-left: 10px;

  border-bottom: 1px solid #005c63;
  flex-grow: 2;
  align-self: center;
`;

const SeperatorRTop = styled.div`
  margin-right: 10px;

  border-bottom: 1px solid #005c63;
  flex-grow: 2;
  align-self: center;
`;

const SeperatorL = styled.div`
  margin-left: 10px;

  border-bottom: 1px solid #e2c465;
  flex-grow: 2;
  align-self: center;
`;

const SeperatorR = styled.div`
  margin-right: 10px;

  border-bottom: 1px solid #e2c465;
  flex-grow: 2;
  align-self: center;
`;

const FinalText = styled.div``;

const LearningsDiv = styled.div`
  padding-top: 15px;
`;

const Projects = styled.div``;

const Pitch = styled.div`
  padding-top: 20px;
  /* max-width: 800px; */
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

  @media (max-width: 800px) {
    font-size: 19px;
    text-align: justify;
  }
`;

const HeadlineSub = styled.div`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  /* identical to box height, or 36px */

  /* SUNRISE / Charcoal */
  color: #37313c;

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 8px;
  padding-right: 8px;
`;

const CenterCol = styled.div`
  max-width: 800px;
  margin-left: 10px;
  margin-right: 10px;
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
  padding-top: 30px;
`;

const Details = styled.div``;

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
  margin-left: -8px;
  padding-top: 5px;
  padding-bottom: 5px;

  border: transparent;

  border-radius: 3px;
  :hover {
    cursor: pointer;
  }
`;

const AppDetailsImg = styled.div`
  background-image: url("${(props) => props.image_source}");
  height: 400px;

margin-top: 10px;
margin-bottom: 10px;

  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 5px;
  box-shadow: 3px 3px 10px #d2cdd5;
  z-index: 1;
  :hover {
    cursor: pointer;
    color: #47c1bf;
  }

  @media (max-width: 800px) {
    background-size: contain;
    background-position: top;
    height: 250px;


  }
  }
`;

const IntroStatement = styled.div`
  margin-bottom: 20px;
  /* width: 800px; */

  @media (max-width: 799px) {
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
