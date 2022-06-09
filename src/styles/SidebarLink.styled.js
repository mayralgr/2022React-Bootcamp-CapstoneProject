import styled from 'styled-components';
const SidebarLink = styled.div`
    background-color: ${({ active }) =>
        active
            ? '#bb7c54'
            : '#fc9c9c'}; //Conditional styling the background color
    display: block;
    color: black;
    padding: 16px;
    text-decoration: none;
    &:hover:not(.active) {
        color: white;
    }
`;
export default SidebarLink;
