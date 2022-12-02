import React from 'react'
import styled from 'styled-components';

const StyledLayout = styled.div`
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const Layout = ({children}) => {
    return (
        <StyledLayout>
            {children}
        </StyledLayout>
    )
}

export default Layout;