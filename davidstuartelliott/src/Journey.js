import React from "react";
import styled from "styled-components";

import { AiOutlineArrowRight } from "react-icons/ai";

function Journey() {
  console.log("About");

  return (
    <JourneyWrapper>
      <JourneyItem>
        <JourneyText>
          Developing & Designing Digital Training Products
        </JourneyText>
        <JourneyDates>
          7<JourneyDatesText>Years</JourneyDatesText>
        </JourneyDates>
      </JourneyItem>

      <AiOutlineArrowRight
        size={20}
        style={{
          verticalAlign: "middle",
          horizontalAlign: "middle",
          color: "gray",
        }}
      />

      <JourneyItem>
        <JourneyText>
          Leading Teams of<div>Designers & Trainers</div>{" "}
        </JourneyText>

        <JourneyDates>
          4<JourneyDatesText>Years</JourneyDatesText>
        </JourneyDates>
      </JourneyItem>
      <AiOutlineArrowRight
        size={20}
        style={{
          verticalAlign: "middle",
          horizontalAlign: "middle",
          color: "gray",
        }}
      />

      <JourneyItem>
        <JourneyText>
          <div>Full Stack Concorida</div>
          <div>University BootCamp</div>
        </JourneyText>
        <JourneyDates>
          1<JourneyDatesText>Year</JourneyDatesText>
        </JourneyDates>
      </JourneyItem>
      <AiOutlineArrowRight
        size={20}
        style={{
          verticalAlign: "middle",
          horizontalAlign: "middle",
          color: "gray",
        }}
      />

      <JourneyItem>
        <JourneyText>Developing & Shipping Production Code</JourneyText>
        <JourneyDates>
          5<JourneyDatesText>Months</JourneyDatesText>
        </JourneyDates>
      </JourneyItem>
    </JourneyWrapper>
  );
}

const JourneyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const JourneyText = styled.div`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: bold;

  font-size: 13px;
  font-weight: 500;
  height: 40px;
  border-radius: 4px;
  padding-left: 10px;
  padding-top: 5px;
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

const JourneyItem = styled.div`
  display: flex;
  flex-direction: column;

  color: #00848e;
  height: 80px;
  width: 180px;
  border-radius: 5px;
  border: 1px dashed grey;

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

export default Journey;
