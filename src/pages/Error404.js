import React from "react";
import styled from "styled-components";

import error404 from "../assets/error-404.webp";

const Div = styled.div`
   {
    display: flex;
    justify-content: center;
  }

  img {
    max-width: 100%;
  }
`;

export default function Error404() {
  return (
    <Div>
      <img src={error404} alt="imagen error 404" />
    </Div>
  );
}
