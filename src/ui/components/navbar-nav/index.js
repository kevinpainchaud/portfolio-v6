import { h } from "preact";
import { Link } from "preact-router/match";

import { Nav } from "./style";

const NavbarNav = () => (
    <Nav>
        <Link href="/">Accueil</Link>
        <Link href="/projets">Projets</Link>
        <Link href="/a-propos">À propos</Link>
    </Nav>
);

export default NavbarNav;
