import styled from 'styled-components';

const FooterDiv = styled.footer`
    height: 3rem;
    background-color: black;
    color: white;
    position: relative;
    width: 100%;
    bottom: 0;
    color: white;
    font-size: 1em; 
    text-align: center;
`;

const Footer = () => (
  <FooterDiv>
    Ecommerce created during Wizeline’s Academy React Bootcamp
  </FooterDiv>
);

export default Footer;
