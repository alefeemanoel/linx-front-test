import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 4;
`;

export const Content = styled.div`
  background-image: linear-gradient(#5b3c72, #412157);
  max-width: 80px;
  height: 97%;

  -webkit-box-shadow: 0px 1px 4px -1px rgba(255, 255, 255, 0.1);
  -moz-box-shadow: 0px 1px 4px -1px rgba(255, 255, 255, 0.1);
  box-shadow: 0px 1px 4px -1px rgba(255, 255, 255, 0.1);

  margin: 0 auto;
  padding: 30px 7px;
  border-radius: 15px;

  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Menu = styled.li`
  img {
    width: 32px;
    height: 32px;
    filter: brightness(0) invert(1);
  }

  p {
    color: #ffffff;
    text-align: center;
  }

  ${props =>
    props.opacity &&
    css`
      p {
        opacity: 0.5;
      }
    `}

  ${props =>
    props.uppercase &&
    css`
      p {
        text-transform: uppercase;
      }
    `}
`;
