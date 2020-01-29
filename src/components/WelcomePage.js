import React from "react";
import styled from "styled-components";

const Header = styled.section`
  text-align: center;
`;

export default function WelcomePage() {
  return (
    <Header className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://d1s83tmo8l7caa.cloudfront.net/app/uploads/2017/05/03231751/rick-and-morty.jpg"
          alt="rick"
        />
      </header>
    </Header>
  );
}
