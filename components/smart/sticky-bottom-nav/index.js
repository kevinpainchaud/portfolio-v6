import { h } from "preact";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "preact/hooks";

import { useAppContext } from "../../../context/app-context";

import { Host, Link, Icon, Label } from "./style";

import iconHome from "../../../public/images/icons/icon-home.svg";
import iconList from "../../../public/images/icons/icon-list.svg";
import iconUser from "../../../public/images/icons/icon-user.svg";
import iconMessage from "../../../public/images/icons/icon-message.svg";
import iconDocument from "../../../public/images/icons/icon-document.svg";

const StickyBottomNav = () => {
    const appContext = useAppContext();
    const hostRef = useRef();
    const router = useRouter();
    const [currentRouteUrl, setCurrentRouteUrl] = useState();

    useEffect(() => {
        setCurrentRouteUrl(router.pathname);
        router.events.on("routeChangeStart", setCurrentRouteUrl);

        return () => {
            router.events.off("routeChangeStart", setCurrentRouteUrl);
        };
    }, []);

    const handleContactButtonClick = () =>
        appContext.emitter.emit("TOGGLE_CONTACT_MODAL");

    return (
        <Host ref={hostRef} className="visible-xs">
            <Link
                href="/"
                tagName="routerLink"
                className={currentRouteUrl === "/" ? "active" : null}
            >
                <Icon>
                    <svg>
                        <use xlinkHref={`#${iconHome.id}`}></use>
                    </svg>
                </Icon>
                <Label>Accueil</Label>
            </Link>
            <Link
                href="/projets/"
                tagName="routerLink"
                className={currentRouteUrl === "/projets" ? "active" : null}
            >
                <Icon>
                    <svg>
                        <use xlinkHref={`#${iconList.id}`}></use>
                    </svg>
                </Icon>
                <Label>Projets</Label>
            </Link>
            <Link
                href="/a-propos/"
                tagName="routerLink"
                className={currentRouteUrl === "/a-propos" ? "active" : null}
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
            <Link
                href="/documents/cv-kevin-painchaud.pdf"
                target="_blank"
                tagName="span"
            >
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
