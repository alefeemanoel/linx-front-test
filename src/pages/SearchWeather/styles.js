import styled, { css } from "styled-components";
import { device } from "~/styles/device";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: auto auto auto;
  grid-gap: 0 50px;
  height: 100%;
  padding: 0 10px;

  @media ${device.laptopL} {
    max-width: 1300px;
    max-height: 750px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column;

  ${props =>
    props.bigMargin &&
    css`
      margin: 42px 0 0;

      .subTitle {
        margin-bottom: 30px;
      }
    `}

  .weatherWeek {
    display: flex;
    flex-flow: row;
  }
  .weekForecast {
    margin: 30px 0;
  }

  .searchBox {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .contentWeatherWeek {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;

export const Title = styled.p`
  display: ${props => props.display || "flex"};
  justify-content: ${props => props.content || "left"};
  font-weight: ${props => (props.bold ? 700 : 400)};
  font-size: ${props => props.size || "32px"};
  color: ${props => (props.black ? "black" : "white")};
  text-align: ${props => props.align || "left"};
  font-family: ${props => props.family || "AvantGarde, sans-serif"};
  position: relative;
`;

export const CardWeather = styled.li`
  display: flex;
  flex-flow: column;
  border: 1px solid #7f6393;
  border-radius: 27px;
  padding: 15px;
  min-width: 140px;
  position: relative;
  transition: 0.3s;
  margin: 0 15px;
  top: 0;

  &:first-child {
    margin-left: 0px;
  }

  &:last-child {
    margin-right: 0px;
  }

  &:hover {
    background-color: #462a5a;
    box-shadow: 0px 2px 4px 0.5px rgba(0, 0, 0, 0.5);
    top: -10px;

    .line {
      width: 68%;
    }
  }

  .top {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    padding-bottom: 40px;

    img {
      max-width: 30px;
      filter: brightness(0) invert(1);
    }
  }
  .bottom {
    padding-top: 35px;
  }
  .line {
    position: absolute;
    bottom: 0;
    width: 20%;
    background-color: #f15e27;
    background-image: linear-gradient(to right, #f15e27, #f8971c);
    height: 3px;
    transition: 0.3s;
    margin-left: 6px;
  }
`;

export const Text = styled.p`
  font-weight: ${props => props.weight || 400};
  font-size: ${props => props.size || "14px"};
  color: ${props => props.color || "white"};
  text-align: ${props => props.align || "left"};
`;
