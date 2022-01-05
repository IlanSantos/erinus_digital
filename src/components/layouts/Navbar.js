import React from 'react'
import Link from 'next/link'
import { Nav, NavLinks, NavBrand, NavItem } from '../../styles/NavbarStyle'

const Navbar = () => {
    return (
        <Nav>
            <NavBrand>
                <Link href="/">
                    <a>ERINUS Digital</a>
                </Link>
            </NavBrand>
            <NavLinks>
                <NavItem>
                    <Link href="/consultoria"><a>Consultoria</a></Link>
                </NavItem>
                <NavItem>
                    <Link href="/contato"><a>Contato</a></Link>
                </NavItem>
            </NavLinks>
        </Nav>
    )
}

export default Navbar