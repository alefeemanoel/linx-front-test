import styled, { css } from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 430px;
  min-width: 400px;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 4;

  ${props =>
    props.today &&
    css`
      background: #ffffff;
      border-radius: 15px;

      margin: 10px 0;
    `}

  .itemToday {
    display: flex;
    justify-content: space-between;
    padding: 5px 25px;
  }
`;

export const Title = styled.p`
  display: ${props => props.display || "flex"};
  justify-content: ${props => props.content || "left"};
  font-weight: ${props => (props.bold ? 700 : 400)};
  font-size: ${props => props.size || "32px"};
  color: ${props => (props.black ? "black" : "white")};
  text-align: ${props => props.align || "left"};
  position: relative;

  small {
    font-size: 25px;
    position: absolute;
  }
`;

export const Today = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 25px 25%;
`;

export const IconToday = styled.div`
  margin-left: 40px;

  img {
    max-height: 85px;
    filter: invert(31%) sepia(34%) saturate(758%) hue-rotate(232deg)
      brightness(95%) contrast(86%);
  }
`;

export const Text = styled.p`
  color: ${props => props.color || "black"};
  font-size: ${props => props.size || "14px"};
  text-align: ${props => props.align || "left"};
  font-weight: ${props => props.weight || 300};
`;

export const BackgroundImage = styled.div`
  background-image: ${props => `url(${props.image})` || ""};
  background-repeat: no-repeat;
  background-position: -40px 0;
  padding-bottom: 50px;
  border-bottom: 1px solid #e8ecf4;
  background-size: 135%;
  margin-bottom: 20px;
`;

export const TodayInfo = styled.p`
  color: ${props => (props.title ? "#4e2b67" : "#8897ac")};
  font-weight: 500;
`;
