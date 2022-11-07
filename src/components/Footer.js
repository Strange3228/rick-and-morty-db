import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
      <div>
        <div>Maksym Kutasievich</div>
        <div>
          <p>Thank you for API: </p>
          <a
            href="https://rickandmortyapi.com/"
            rel="noreferrer"
            target="_blank"
          >
            rickandmortyapi.com
          </a>
        </div>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  background-color: #c9e63c;
  padding: 2rem 3rem;
  margin: auto;
  margin-bottom: 0%;
  margin-top: auto;
  & > div {
    max-width: 1520px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  margin-top: 3rem;
  a {
    text-decoration: underline;
  }
`;

export default Footer;
