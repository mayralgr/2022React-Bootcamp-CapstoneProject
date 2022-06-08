import styled from 'styled-components';
const SidebarLink = styled.div`
    display: block;
    color: black;
    padding: 16px;
    text-decoration: none;
    &:hover:not(.active) {
        color: white;
    }
`;
export default SidebarLink;
