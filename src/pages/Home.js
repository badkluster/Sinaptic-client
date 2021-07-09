import React from "react";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sinaptic || Applied Technology</title>
        <meta
          name="description"
          content="Sinaptic || Applied Technology"
          data-react-helmet="true"
        />
      </Helmet>
    </>
  );
}
