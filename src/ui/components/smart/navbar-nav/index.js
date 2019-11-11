import { h } from "preact";

import { Button, ButtonPrimary } from "../../styled/button";

import { Host, Link } from "./style";

const NavbarNav = ({ reverseColor }) => (
    <Host>
        <Link
            href="/"
            tagName="routerLink"
            activeClassName="active"
            reverseColor={reverseColor}
        >
            Accueil
        </Link>
        <Link
            href="/projets"
            tagName="routerLink"
            activeClassName="active"
            reverseColor={reverseColor}
        >
            Projets
        </Link>
        <Link
            href="/a-propos"
            tagName="routerLink"
            activeClassName="active"
            reverseColor={reverseColor}
        >
            À propos
        </Link>
        <Button>Me contacter</Button>
        <ButtonPrimary>Télécharger mon CV</ButtonPrimary>
    </Host>
);

export default NavbarNav;
