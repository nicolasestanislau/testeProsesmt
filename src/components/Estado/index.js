import React from "react";

import { Container } from "./styles";

const Estado = ({ cases, deaths, refuses, suspects }) => {

  return (
      <li style={{listStyle: 'none'}}>
        <Container>
          <p>casos: {cases}</p>
          <p>mortes: {deaths}</p>
          <p>recuperados: {refuses}</p>
          <p>suspeitas: {suspects}</p>
        </Container>
      </li>
  );
}

export default Estado;