import { h } from "preact";
import { useContext } from "preact/hooks";

import { AppContext } from "../../app";

import { Button, ButtonPrimary } from "../../styled/button";

import { Host, Link } from "./style";

const NavbarNav = ({ reverseColor }) => {
    const appContext = useContext(AppContext);

    const handleContactBtnClick = () =>
        appContext.emitter.emit("TOGGLE_CONTACT_MODAL");

    return (
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
            <Button onClick={handleContactBtnClick} tagName="span">
                Me contacter
            </Button>
            <ButtonPrimary>Voir mon CV</ButtonPrimary>
        </Host>
    );
};

export default NavbarNav;
