import styled from 'styled-components';

const FooterDiv = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
    background-color: black;
    color: white;
`;

const Footer = () => (
  <FooterDiv>
    Ecommerce created during Wizeline’s Academy React Bootcamp
  </FooterDiv>
);

export default Footer;
