import React from "react";
import styled from "styled-components";

import { AiFillFire } from "react-icons/ai";
function Learned() {
  console.log("About");

  return (
    <CenteringFlex>
      <IntroPitch>
        During the Concordia Bootcamp and at Telus Digital, I've learned a few
        principles to focus on while developing...
      </IntroPitch>

      <LearnedWrapper>
        <LearnedItem>
          <LearnedText>Collaboration is a super-power</LearnedText>

          <LearnedSubText>
            <LearnedSubTextText>
              Chatting, pairing, good comments are more important now than ever
            </LearnedSubTextText>
          </LearnedSubText>
        </LearnedItem>

        <LearnedItem>
          <LearnedText>Keep pushing to learn </LearnedText>

          <LearnedSubText>
            <LearnedSubTextText>
              Since graduating I've already
            </LearnedSubTextText>
            <LearnedSubTextText>
              taken on three new technologies
            </LearnedSubTextText>
          </LearnedSubText>
        </LearnedItem>

        <LearnedItem>
          <LearnedText>Test, lint, then test again</LearnedText>
          <LearnedSubText>
            <LearnedSubTextText>
              Code should be tested and legible. Good tests are a great
              invesment.
            </LearnedSubTextText>
          </LearnedSubText>
        </LearnedItem>
      </LearnedWrapper>
    </CenteringFlex>
  );
}

const HeadlineCentered = styled.span`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  text-align: center; /* identical to box height, or 36px */

  /* SUNRISE / Charcoal */
  color: #37313c;
`;

const IntroPitch = styled.div`
  color: black;
  padding-top: 5px;

  font-family: Avenir Next;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
`;

const CenteringFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

const LearnedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

const HeadItem = styled.div``;

const LearnedItem = styled.div`
  color: #00848e;
  height: 80px;
  width: 210px;
  border-radius: 5px;
  box-shadow: 3px 3px 10px #d2cdd5;
  z-index: 1;
  margin: 20px;

  @media (max-width: 800px) {
    font-size: 27px;
    line-height: 36px;
    font-weight: 500;
  }

  border-radius: 3px;
  /* :hover {
    cursor: pointer;
  } */
`;
const LearnedText = styled.div`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: bold;

  font-size: 13px;
  font-weight: 500;
  padding-bottom: 5px;
  border-radius: 4px;
  padding-left: 5px;
  padding-top: 5px;
  text-align: center;
`;

const LearnedSubText = styled.div`
  font-weight: 500;
  font-size: 12px;

  text-align: center;
  color: #605866;
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  padding-right: 8px;
`;

const LearnedSubTextText = styled.span``;

export default Learned;
