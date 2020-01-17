import { h } from "preact";
import { useContext, useRef, useEffect } from "preact/hooks";
import { subscribe } from "subscribe-ui-event";

import { AppContext } from "../../app";

import { Host, Link, Icon, Label } from "./style";

import iconHome from "../../../assets/images/icon-home.svg";
import iconList from "../../../assets/images/icon-list.svg";
import iconUser from "../../../assets/images/icon-user.svg";
import iconMessage from "../../../assets/images/icon-message.svg";
import iconDocument from "../../../assets/images/icon-document.svg";

const StickyBottomNav = className => {
    const appContext = useContext(AppContext),
        hostRef = useRef();

    const handleBodyPadding = () =>
        (document.body.style.paddingBottom = `${hostRef.current.offsetHeight}px`);

    const handleContactButtonClick = () =>
        appContext.emitter.emit("TOGGLE_CONTACT_MODAL");

    useEffect(() => {
        handleBodyPadding();

        subscribe("resize", handleBodyPadding, {
            throttleRate: 500
        });
    }, []);

    return (
        <Host ref={hostRef} class="visible-xs">
            <Link href="/" tagName="routerLink" activeClassName="active">
                <Icon>
                    <svg>
                        <use xlinkHref={`#${iconHome.id}`}></use>
                    </svg>
                </Icon>
                <Label>Accueil</Label>
            </Link>
            <Link href="/projets" tagName="routerLink" activeClassName="active">
                <Icon>
                    <svg>
                        <use xlinkHref={`#${iconList.id}`}></use>
                    </svg>
                </Icon>
                <Label>Projets</Label>
            </Link>
            <Link
                href="/a-propos"
                tagName="routerLink"
                activeClassName="active"
            >
                <Icon>
                    <svg>
                        <use xlinkHref={`#${iconUser.id}`}></use>
                    </svg>
                </Icon>
                <Label>À propos</Label>
            </Link>
            <Link onClick={handleContactButtonClick} tagName="span">
                <Icon>
                    <svg>
                        <use xlinkHref={`#${iconMessage.id}`}></use>
                    </svg>
                </Icon>
                <Label>Contact</Label>
            </Link>
            <Link href="/cv-kevin-painchaud.pdf" target="_blank" tagName="span">
                <Icon>
                    <svg>
                        <use xlinkHref={`#${iconDocument.id}`}></use>
                    </svg>
                </Icon>
                <Label>CV</Label>
            </Link>
        </Host>
    );
};

export default StickyBottomNav;
