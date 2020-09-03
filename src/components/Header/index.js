import Head from "next/head";
import Link from "next/link";
import React from "react";

import { Wrapper } from "./styles";

const Header = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Wrapper>
        <Link href="/">
          <img src="/logo.png" alt="Petz" />
        </Link>
      </Wrapper>
    </>
  );
};

export default Header;
