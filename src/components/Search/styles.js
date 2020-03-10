import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  input {
    background: transparent;
    border: 2px solid #ffffff;
    border-right: none;
    outline: none;
    width: 100%;
    height: 90px;
    border-radius: 15px 0 0 15px;
    font-weight: 300;
    padding: 0px 10px;
    letter-spacing: 2px;
    color: #ffffff;
    padding-left: 20px;
    font-size: 20px;
    font-family: "Roboto", sans-serif;

    &::placeholder {
      color: #ffffff;
    }
  }

  button {
    height: 90px;
    width: 55px;
    outline: none;
    border: 2px solid #ffffff;
    border-left: none;
    border-radius: 0 15px 15px 0;
    background: transparent;
    color: #ffffff;
    transition: all 0.3s ease;

    img {
      width: 25px;
      height: 25px;
      filter: brightness(0) invert(1);
    }
  }
`;
