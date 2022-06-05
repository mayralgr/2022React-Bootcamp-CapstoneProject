import logo from '../../resources/images/logo_rocket.svg';
import shoppingCart from '../../resources/images/buy_cart.svg';
import searchIcon from '../../resources/images/search_icon.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = styled.img`
  width: 5%;
  float: left;
  margin: 1%;
  margin-rigth: 0;
  height: 6vh;
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: black;
  height: 8vh;
  color: white;
`;
const Name = styled.span`
  // width: 10%;
  padding: 2%;
  padding-left: 0;
  height: 6vh;
  float: left;
  color: white;
`;
const HeaderTab = styled.li`
  padding: 2%;
  height: 6vh;
  color: white;
  text-align: center;
`;

const Cart = styled.img`
  width: 5%;
  float: right;
  text-align: right;
  margin: 1%;
  height: 6vh;
`;

const Search = styled.img`
  width: 5%;
  float: right;
  margin: 1%;
  height: 6vh;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover,
  &:focus {
    color: #888888;
  }
`;

const TabsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
`;

const Header = () => (
  <Wrapper>
    <Logo src={logo} alt="logo" />
    <Name>GetIT</Name>

    <TabsWrapper>
      <HeaderTab>
        <NavLink to="/">Home</NavLink>
      </HeaderTab>
      <HeaderTab>
        <NavLink to="/products">Products</NavLink>
      </HeaderTab>
      
    <Search src={searchIcon} alt="searchIcon" />
    <Cart src={shoppingCart} alt="shoppingCart" />
    </TabsWrapper>
    
  </Wrapper>
);

export default Header;
