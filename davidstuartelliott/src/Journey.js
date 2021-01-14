import React from "react";
import styled from "styled-components";

import { AiOutlineArrowRight } from "react-icons/ai";

function Journey() {
  console.log("About");

  return (
    <JourneyWrapper>
      <JourneyDottedBox>
        <JourneyText>
          Developing & Designing Digital Training Products
        </JourneyText>
        <JourneyDates>
          7<JourneyDatesText>Years</JourneyDatesText>
        </JourneyDates>
      </JourneyDottedBox>
      <StyledArrow>
        <AiOutlineArrowRight
          size={20}
          style={{
            verticalAlign: "middle",
            horizontalAlign: "middle",
            color: "gray",
          }}
        />
      </StyledArrow>
      <JourneyDottedBox>
        <JourneyText>Leading Teams of Designers & Trainers</JourneyText>

        <JourneyDates>
          4<JourneyDatesText>Years</JourneyDatesText>
        </JourneyDates>
      </JourneyDottedBox>
      <StyledArrow>
        <AiOutlineArrowRight
          size={20}
          style={{
            verticalAlign: "middle",
            horizontalAlign: "middle",
            color: "gray",
          }}
        />
      </StyledArrow>
      <JourneyDottedBox>
        <JourneyText>Full Stack Concorida University BootCamp</JourneyText>
        <JourneyDates>
          10<JourneyDatesText>Months</JourneyDatesText>
        </JourneyDates>
      </JourneyDottedBox>
      <StyledArrow>
        <AiOutlineArrowRight
          size={20}
          style={{
            verticalAlign: "middle",
            horizontalAlign: "middle",
            color: "gray",
          }}
        />
      </StyledArrow>
      <JourneyDottedBox>
        <JourneyText>Developing & Shipping Production Code</JourneyText>
        <JourneyDates>
          5<JourneyDatesText>Months</JourneyDatesText>
        </JourneyDates>
      </JourneyDottedBox>
    </JourneyWrapper>
  );
}

const StyledArrow = styled.div`
  transition: all 0.3s ease-out;
  transform: rotate(0deg);

  @media (max-width: 800px) {
    transform: rotate(90deg);
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

const JourneyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;

    flex-direction: column;
  }
`;

const JourneyText = styled.div`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: bold;

  font-size: 13px;
  font-weight: 500;
  height: 40px;
  border-radius: 4px;
  padding-left: 16px;
  padding-top: 6px;

  @media (max-width: 800px) {
    text-align: center;
  }
`;

const JourneyDates = styled.div`
  font-size: 15px;
  font-weight: 500;
  text-align: left;
  border-radius: 5px;

  text-align: center;
  height: 25px;
  line-height: 25px;
  color: #605866;
  margin-left: 5px;
  margin-right: 5px;
`;

const JourneyDatesText = styled.span`
  font-size: 12px;
  padding-left: 4px;
`;

const JourneyDottedBox = styled.div`
  display: flex;
  flex-direction: column;

  color: #00848e;
  height: 80px;
  width: 170px;
  border: 1px dashed #605866;
  border-radius: 8px;

  box-shadow: 3px 3px 10px #d2cdd5;

  @media (max-width: 800px) {
    font-size: 27px;
    line-height: 36px;
    font-weight: 500;
    width: 380px;
  }

  /* :hover {
    cursor: pointer;
  } */
`;

export default Journey;
