import React from "react";
import styled from "styled-components";

function Learned() {
  console.log("About");

  return (
    <div>
      <IntroPitch>
        During the Concordia Bootcamp and at Telus Digital, I've learned a few
        principles to focus on while developing...
      </IntroPitch>

      <CenteringFlex>
        <LearnedWrapper>
          <LearnedItem>
            <LearnedText>Collaboration is a super-power</LearnedText>

            <LearnedSubText>
              Chatting, pairing, good comments are more important now than ever.
            </LearnedSubText>
          </LearnedItem>

          <LearnedItem>
            <LearnedText>Keep pushing to learn </LearnedText>

            <LearnedSubText>
              Since graduating I've already taken on three new technologies.
            </LearnedSubText>
          </LearnedItem>

          <LearnedItem>
            <LearnedText>Test, lint, then test again</LearnedText>
            <LearnedSubText>
              Code should be tested and legible. Good tests are a great
              investment.
            </LearnedSubText>
          </LearnedItem>
        </LearnedWrapper>
      </CenteringFlex>
    </div>
  );
}

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
  align-items: center;
`;

const LearnedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 800px;
  padding-top: 10px;

  @media (max-width: 800px) {
    flex-direction: column;
    max-width: 300px;
    align-items: center;

    /* width: 400px; */
  }
`;

const LearnedItem = styled.div`
  color: #00848e;
  /* height: 70px; */
  width: 250px;
  border-radius: 5px;
  box-shadow: 3px 3px 10px #d2cdd5;
  z-index: 1;
  padding-top: 5px;
  padding-bottom: 10px;

  @media (max-width: 800px) {
    margin-bottom: 10px;
  }

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
  padding-top: 5px;
  text-align: center;
  @media (max-width: 800px) {
    padding-bottom: 0px;
    padding-top: 0px;
  }
`;

const LearnedSubText = styled.div`
  font-weight: 500;
  font-size: 12px;

  color: #605866;
  padding-left: 18px;
  padding-right: 18px;

  @media (max-width: 800px) {
    line-height: 120%;
  }
`;

export default Learned;
