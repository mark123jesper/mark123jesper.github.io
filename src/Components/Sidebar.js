import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const Sidebar = () => {
    return (
        <SidebarStyles>
           <Navigation/>
        </SidebarStyles>
    )
}

const SidebarStyles = styled.div`
    width: 12rem;
    height: 100%;
    position: fixed;
    background-color: var(--sidebar-dark);
    color: var(--font-color-dark);
`;

export default Sidebar;


