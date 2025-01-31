import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCart } from '../../contexts/CartContext';

import logo from '../../resources/images/logo_furniture.svg';
import shoppingCart from '../../resources/images/buy_cart.svg';
import searchIcon from '../../resources/images/search_icon.svg';

import Wrapper from '../../styles/HeaderWrapper.styled';
import Logo from '../../styles/Logo.styled';
import RigthWrapper from '../../styles/RigthWrapper.styled';
import Cart from '../../styles/Cart.styled';
import Search from '../../styles/SearchIcon.styled';
import NavLink from '../../styles/NavLink.styled';
import NavLinkIcons from '../../styles/NavLinkIcons.styled';
import SearchInput from '../../styles/SearchInput.styled';
import BadgeCart from '../../styles/BadgeCart.styled';

const Header = () => {
    let navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchInput = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const searchTermInput = e.target.value;
        setSearchTerm(searchTermInput);
    };
    const { state } = useCart();

    const handleOnClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setSearchTerm('');
        navigate('/search?q=' + searchTerm);
    };
    return (
        <Wrapper>
            <NavLink id="logoName" to="/">
                <Logo id="logo" src={logo} alt="logo" />
                ShopIT
            </NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <RigthWrapper>
                <SearchInput
                    id="searchInput"
                    type="text"
                    onChange={handleSearchInput}
                    value={searchTerm}
                />
                <NavLinkIcons to="/">
                    <Search
                        id="searchIcon"
                        src={searchIcon}
                        alt="searchIcon"
                        onClick={handleOnClick}
                    />
                </NavLinkIcons>
                <NavLinkIcons to="/cart">
                    <BadgeCart bg="secondary">
                        <Cart id="cart" src={shoppingCart} alt="shoppingCart" />
                        {state.itemsCount}
                    </BadgeCart>
                </NavLinkIcons>
            </RigthWrapper>
        </Wrapper>
    );
};

export default Header;
