import React from "react";
// import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import moment from "moment";

import logo from "~/assets/logo.png";
import home from "~/assets/home.png";

import { Container, Content, Menu } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <div>
          <img src={logo} alt="Linx" />
        </div>

        <ul>
          <Menu>
            <Link to="/">
              <img src={home} alt="Home" />
            </Link>
          </Menu>
        </ul>

        <ul>
          <Menu>
            <p>{moment().format("DD/MM")}</p>
          </Menu>
          <Menu opacity="true" uppercase="true">
            <p>{moment().format("h:mm a")}</p>
          </Menu>
        </ul>
      </Content>
    </Container>
  );
}
