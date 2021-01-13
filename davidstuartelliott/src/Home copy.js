import React from "react";
import styled from "styled-components";

import SmallerSource from "./images/self_square.jpg"; // Tell webpack this JS file uses this image
import TopFigma from "./TopFigma";

import DaveSrc from "./images/self_portfolio.jpg"; // Tell webpack this JS file uses this image

import HowImg1 from "./images/How1Master.png"; // Tell webpack this JS file uses this image

import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

import Journey from "./Journey.js";

function goToNetlifyProject() {
  window.location.href =
    "https://david-elliott-shopify-personal-project.netlify.app/";
}

function goToGitHubProject() {
  window.location.href =
    "https://github.com/davidelliott007/shopify-podcast-translator/tree/ver-1";
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
        <Journey></Journey>

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
            Since August, with the generous support of everyone at Telus
            Training department, I've been supplmenting my full-time job at as a
            Training Manager with Front End development work at Telus Digital
          </IntroPitch>

          <IntroPitch>
            Full stack development is a perfect fit for me. Every git commit I
            make, and every standup I go to is, frankly, joyful.
          </IntroPitch>
        </IntroStatement>
        <Pitch>
          <Headline>Project - How People Talk</Headline>
          <IntroPitch>
            Supporting the Podcast industry is a passion of mine, so I thought I
            would take the great Shopify Masters podcast and see if I could add
            some value to it.
          </IntroPitch>

          <Details>
            <AppDetailsImg
              image_source={HowImg1}
              smaller_source={HowImg1}
            ></AppDetailsImg>

            <IntroPitch>
              <StandOut>
                I decided to try something a little ambitious - could I produce
                an interactive french version of the podcast using NodeJS, React
                and Redux?
              </StandOut>
              Explore Project >
            </IntroPitch>
            <IntroPitch>
              I wanted an interactive transcript that would offer french
              translations, line per line, that I could skip if I wanted to, but
              hear repeated back to me as well.
            </IntroPitch>

            <IntroPitch>
              I sat down and figured out what I would need to do -
            </IntroPitch>
            <ol>
              <li>
                Align the text transcript to the timeline of the mp3 with a cool
                tool called{" "}
                <a href={"https://github.com/lowerquality/gentle"}>
                  Gentle Aligner
                </a>{" "}
                to figure out where each sentence occurs in the waveform. This
                would give me a JSON Object with each word of the transcript
                aligned to a timecode.
              </li>
              <li>
                Translate the english transcript using the Google Language API
                to produce a french transcript with Node JS.
              </li>
              <li>
                Combine the aligned english text from (1) with the french text
                from (2) to produce a bilingual JSON array.
              </li>
              <li>Use that array as a navigation instrument for the mp3.</li>
              <li>
                Use that array to send the french text{" "}
                <HighlightedWord>back</HighlightedWord> to the Google Speech API
                to produce inidividual french mp3s.
              </li>
              <li>Wire it all up in React and Redux.</li>
            </ol>
            <body>
              <FinalStandOut>
                It took a lot of hacking away, but{" "}
                <TLDRBtnSmaller onClick={goToNetlifyProject}>
                  here it is{" "}
                </TLDRBtnSmaller>
                - a clickable React App that allows you to hear each speaker in
                English, and then in French. All automatically generated!
              </FinalStandOut>
            </body>
          </Details>
        </Pitch>

        <Tidbits>
          Some other interesting tidbits behind the making of this app -
          <ol>
            <li>
              I was running my own Node Express server to serve out the data
              (the server is still up). I have a bunch of juicy JSON files from
              all the transcribing code I've written. However, I've switched to
              a bit bucket on Linode to serve out the JSON along with the
              individual translated MP3 files because I'm about to tweet this
              project out and I neeed a more robust solution.
            </li>
            <li>
              I use the Google Text to Speech API, so I can use customized
              female and male voices with Quebec accents. I switched from the
              SpeechSynthesis framework because the voice results were too
              variant across browsers and devices.
            </li>

            <li>
              This is my graduation project for my Bootcamp, so I intend to
              expand it quite a bit! There's no reason I can't add more
              languages, or add meta-data from others APIs, etc. I'll be
              graduating on November 18th, so I'll be adding to this project on
              ongoing basis.
            </li>
          </ol>
        </Tidbits>
        <FinalPart>
          <body>
            Thanks for your time - I know there are a lot of candidates, and I'm
            looking forward to the opportunity to dive into the code and explain
            a little bit of my thinking. It was super fun to put this together!
          </body>
          <body>
            I made a bit of a subtle design choice by placing my github,
            linkedIn and twitter links into my profile picture, so here they are
            again -
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

const Headline = styled.div`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  /* identical to box height, or 36px */

  /* SUNRISE / Charcoal */
  color: #37313c;
`;

const DisplayMedium = styled.div`
  font-size: 26px;
  line-height: 32px;
  font-weight: 400;

  @media (max-width: 800px) {
    font-size: 21px;
    line-height: 28px;
    font-weight: 400;
  }
`;

const HomeDiv = styled.div`
  max-width: 800px;
`;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroPitch = styled.div`
  color: black;
  padding-top: 5px;

  font-family: Avenir Next;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
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
  max-width: 800px;
`;

const Pitch = styled.div`
  padding-top: 20px;
  max-width: 800px;
`;

const Tidbits = styled.div`
  max-width: 750px;
  padding-top: 5px;
`;

const HighlightedWord = styled.span`
  font-weight: bold;
  color: black;
`;

const FinalStandOut = styled.div`
  font-weight: bold;
  color: black;
`;

const StandOut = styled.div`
  font-weight: bold;
  color: black;
`;

const StandOutBox = styled.div`
  padding: 10px;
`;

const Details = styled.div`
  padding-top: 20px;
`;

const TLDR = styled.div`
  /* background-color: #f4f6f8;
  border-radius: 15px; */
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

const InvisibleButton = styled.button`
  background-color: transparent;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: none;
  }

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

const TLDRBtn = styled.button`
  color: #00848e;
  background-color: transparent;
  font-size: 42px;
  line-height: 44px;
  font-weight: 500;

  padding-left: 5px;
  padding-right: 5px;
  border: 1px dashed #003135;
  padding-bottom: 5px;
  padding-top: 0px;
  margin-right: 5px;
  margin-left: 5px;

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

const TLDRBtnSmaller = styled.button`
  color: #00848e;
  background-color: transparent;
  font-size: 22px;
  font-weight: 500;

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
  max-width: 800px;

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
  margin-bottom: 20px;
  max-width: 800px;
`;

const NameText = styled.text`
  color: #00848e;
`;
export default Home;