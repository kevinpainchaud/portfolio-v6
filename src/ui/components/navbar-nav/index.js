import { h } from "preact";

import { Host, Link } from "./style";
import { Button, ButtonPrimary } from "../button/style";

const NavbarNav = () => (
    <Host>
        <Link href="/" tagName="routerLink" activeClassName="active">
            Accueil
        </Link>
        <Link href="/projets" tagName="routerLink" activeClassName="active">
            Projets
        </Link>
        <Link href="/a-propos" tagName="routerLink" activeClassName="active">
            À propos
        </Link>
        <Button>Me contacter</Button>
        <ButtonPrimary>Télécharger mon CV</ButtonPrimary>
    </Host>
);

export default NavbarNav;
