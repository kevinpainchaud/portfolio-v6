import { h } from "preact";

import { Host, Link } from "./style";
import { Button, ButtonPrimary } from "../button/style";

const NavbarNav = () => (
    <Host>
        <Link href="/" activeClassName="active">
            Accueil
        </Link>
        <Link href="/projets" activeClassName="active">
            Projets
        </Link>
        <Link href="/a-propos" activeClassName="active">
            À propos
        </Link>
        <Button>Me contacter</Button>
        <ButtonPrimary>Télécharger mon CV</ButtonPrimary>
    </Host>
);

export default NavbarNav;
