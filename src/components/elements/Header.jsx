import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import RMDLogo from "../images/reactMovie_logo.png";
import TMDBLogo from "../images/tmdb_logo.svg";

const StyledHeader = styled.div`
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    min-height: 120px;
    padding: 20px 0;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      min-height: 0px;
    }
  }
`;

const StyeldRMDLogo = styled.img`
  width: 250px;
  margin-top: 20px;

  @media screen and (max-width: 500px) {
    width: 150px;
    margin-top: 5px;
  }
`;

const StyeldTMDBLogo = styled.img`
  width: 122px;
  margin-top: 25px;
  float: right;

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-content">
        <Link to="/">
          <StyeldRMDLogo src={RMDLogo} alt="logo" />
        </Link>

        <StyeldTMDBLogo src={TMDBLogo} alt="logo2" />
      </div>
    </StyledHeader>
  );
};

export default Header;
