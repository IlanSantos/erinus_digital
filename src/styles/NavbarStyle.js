import styled from "styled-components"

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: .25rem .5rem;
    width: 100%;
    min-height: 70px;
    color: #00135b;
    background-color: white;
    filter: drop-shadow(0px 1px 2px rgba(0,0,0,.200));
`
export const NavBrand = styled.div`
    font-size: 1.65rem;
    font-weight: 200;
    a{  
        color: inherit !important;
        text-decoration: none;
    }
`

export const NavLinks = styled.ul`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
    padding: 0;
    margin: 0;
`

export const NavItem = styled.li`
    display: block;
    color: #00135b !important;
    font-size: 1.2rem;
    font-weight: 400;
    margin-right: .7rem;
    a{
        color:inherit !important;
        text-decoration: none !important;
    }

    :hover{
        animation: button-scale 450ms;
    }
    @keyframes button-scale {
        0%{
            transform: scale(1);
        }35%, 70%{
            transform: scale(1.07)
        }100%{
            transform: scale(1)
        }
    }
`