import logo from '../../resources/images/logo_furniture.svg';
import shoppingCart from '../../resources/images/buy_cart.svg';
import searchIcon from '../../resources/images/search_icon.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: black;
  height: 8vh;
  color: white;
  width: 100%;
`;

export const Logo = styled.img`
  float: left;
  height: 6vh;
`;

const RigthWrapper = styled.div`
  float: right;
  padding: 0;
  margin: 0;
`;

const Cart = styled.img`
  text-align: right;
  padding: 1%;
  height: 6vh;
  width: 70%;
`;

const Search = styled.img`
  margin: 0;
  padding: 0;
  height: 6vh;
  width: 70%;
`;

const NavLink = styled(Link)`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 15px;
  &:hover:first-child:hover {
    color: white;
  }
  &:hover,
  &:focus {
    color: #888888;
  }
  @media (max-width: 420px) {
    font-size: 2vh;
    padding-left: 1%;
    padding-right: 1%;
  }
`;

const NavLinkIcons = styled(Link)`
  float: left;
  display: flex;
  color: #f2f2f2;
  text-align: center;
  padding-top: 5%;
  text-decoration: none;
  font-size: 15px;
  padding-top: 8px;
`;

const SearchInput = styled.input`
  float: left;
  display: flex;
  color: #f2f2f2;
  text-align: center;
  padding-top: 5%;
  text-decoration: none;
  font-size: 11px;
  height: 4vh;
  margin-top: 6%;
  border-radius: 20px;
  @media (max-width: 600px) {
    display: none;
  }
`;

const Header = () => (
  <Wrapper>
    <NavLink id="logoName" to="/">
      <Logo id="logo" src={logo} alt="logo" />
      ShopIT
    </NavLink>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/products">Products</NavLink>
    <RigthWrapper>
      <SearchInput id="searchInput" type="text" />
      <NavLinkIcons to="/">
        <Search id="searchIcon" src={searchIcon} alt="searchIcon" />
      </NavLinkIcons>
      <NavLinkIcons to="/">
        <Cart id="cart" src={shoppingCart} alt="shoppingCart" />
      </NavLinkIcons>
    </RigthWrapper>
  </Wrapper>
);

export default Header;
