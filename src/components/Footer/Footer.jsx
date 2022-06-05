import styled from 'styled-components';

const FooterDiv = styled.footer`
    height: 2.5rem;
    background-color: black;
    color: white;

    position: relative; <!-- HERE -->
    width: 100%;
    bottom: 0;
    color: white;
    font-size: 1rem; 
    text-align: center;
`;

const Footer = () => (
  <FooterDiv>
    Ecommerce created during Wizeline’s Academy React Bootcamp
  </FooterDiv>
);

export default Footer;
