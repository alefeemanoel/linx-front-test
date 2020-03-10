import React from "react";
import { Input } from "@rocketseat/unform";

import search from "~/assets/search.png";

import { Container } from "./styles";

export default function Search(props) {
  return (
    <Container>
      <Input type="search" placeholder={props.placeholder} name="search" />
      <button type="submit">
        <img src={search} alt={props.altButton} />
      </button>
    </Container>
  );
}
