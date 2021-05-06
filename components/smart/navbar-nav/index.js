import { h } from "preact";
import { useRouter } from "next/router";
import { useState, useEffect } from "preact/hooks";
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
    const router = useRouter();
    const [currentRouteUrl, setCurrentRouteUrl] = useState();

    useEffect(() => {
        const handleRouteChange = (url) => {
            setCurrentRouteUrl(url);
        };

        handleRouteChange(router.pathname);
        router.events.on("routeChangeStart", handleRouteChange);

        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, []);

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
                className={currentRouteUrl === "/" ? "active" : null}
                reverseColor={reverseColor}
            >
                Accueil
            </Link>
            <Link
                href="/projets"
                tagName="routerLink"
                className={currentRouteUrl === "/projets" ? "active" : null}
                reverseColor={reverseColor}
            >
                Projets
            </Link>
            <Link
                href="/a-propos"
                tagName="routerLink"
                className={currentRouteUrl === "/a-propos" ? "active" : null}
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
