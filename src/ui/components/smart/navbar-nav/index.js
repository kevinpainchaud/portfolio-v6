import { h } from "preact";
import { useContext } from "preact/hooks";

import { AppContext } from "../../app";

import {
    Button,
    ButtonPrimary,
    ButtonWhite,
    ButtonSecondaryOutline,
    ButtonWhiteOutline
} from "../../styled/button";

import { Host, Link } from "./style";

const NavbarNav = ({ reverseColor }) => {
    const appContext = useContext(AppContext);

    const handleContactButtonClick = () =>
        appContext.emitter.emit("TOGGLE_CONTACT_MODAL");

    const ContactButton = reverseColor
        ? ButtonWhiteOutline
        : ButtonSecondaryOutline;

    const SeeCVButton = reverseColor ? ButtonWhite : ButtonPrimary;

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
                href="/projets/"
                tagName="routerLink"
                activeClassName="active"
                reverseColor={reverseColor}
            >
                Projets
            </Link>
            <Link
                href="/a-propos/"
                tagName="routerLink"
                activeClassName="active"
                reverseColor={reverseColor}
            >
                À propos
            </Link>
            <ContactButton onClick={handleContactButtonClick} tagName="span">
                Me contacter
            </ContactButton>
            <SeeCVButton
                href="/cv-kevin-painchaud.pdf"
                target="_blank"
                tagName="button"
            >
                Voir mon CV
            </SeeCVButton>
        </Host>
    );
};

export default NavbarNav;
