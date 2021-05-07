import { h } from "preact";
import PropTypes from "prop-types";

import { useAppContext } from "../../../context/app-context";

import {
    ButtonPrimary,
    ButtonWhite,
    ButtonSecondaryOutline,
    ButtonWhiteOutline,
} from "../../styled/button";

import { Host, Link } from "./style";

const NavbarNav = ({ reverseColor }) => {
    const appContext = useAppContext();

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
                className={
                    appContext.currentRoutePathname === "/" ? "active" : null
                }
                reverseColor={reverseColor}
            >
                Accueil
            </Link>
            <Link
                href="/projets"
                tagName="routerLink"
                className={
                    appContext.currentRoutePathname === "/projets" ||
                    appContext.currentRoutePathname === "/projets/[slug]"
                        ? "active"
                        : null
                }
                reverseColor={reverseColor}
            >
                Projets
            </Link>
            <Link
                href="/a-propos"
                tagName="routerLink"
                className={
                    appContext.currentRoutePathname === "/a-propos"
                        ? "active"
                        : null
                }
                reverseColor={reverseColor}
            >
                À propos
            </Link>
            <ContactButton onClick={handleContactButtonClick} tagName="span">
                Me contacter
            </ContactButton>
            <SeeCVButton
                href="/documents/cv-kevin-painchaud.pdf"
                target="_blank"
                tagName="button"
            >
                Voir mon CV
            </SeeCVButton>
        </Host>
    );
};

NavbarNav.propTypes = {
    reverseColor: PropTypes.bool,
};

export default NavbarNav;
