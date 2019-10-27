import { h } from "preact";
import StyledRouterLink from "../styled-router-link";

import { Nav } from "./style";

const NavbarNav = () => (
    <Nav>
        <StyledRouterLink href="/">Accueil</StyledRouterLink>
        <StyledRouterLink href="/projets">Projets</StyledRouterLink>
        <StyledRouterLink href="/a-propos">À propos</StyledRouterLink>
    </Nav>
);

export default NavbarNav;
