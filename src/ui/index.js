import { h, render } from "preact";
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import Helmet from "preact-helmet";

import App from "./components/app";

import mainTheme from "./style/themes/main";
import GlobalStyle from "./style/index";

import faviconIco from "./assets/images/favicon.ico";
import faviconPng from "./assets/images/favicon.png";

const matomoInstance = createInstance({
    urlBase: "https://piwik.kpcd.me/",
    siteId: 1,
});

render(
    <MatomoProvider value={matomoInstance}>
        <ThemeProvider theme={mainTheme}>
            {/* Document title */}
            <Helmet
                title="Kévin Painchaud | Développeur front-end à Rennes"
                meta={[
                    {
                        name: "viewport",
                        content:
                            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
                    },
                    {
                        property: "og:image",
                        content:
                            "https://www.kevinpainchaud.fr/assets/images/og-image.jpg",
                    },
                ]}
                link={[
                    {
                        rel: "shortcut icon",
                        href: faviconIco,
                        type: "image/x-icon",
                    },
                    {
                        rel: "icon",
                        href: faviconPng,
                        type: "image/png",
                        sizes: "128x128",
                    },
                ]}
            />

            {/* Styles */}
            <Normalize />
            <GlobalStyle />

            <div>
                <App />
            </div>
        </ThemeProvider>
    </MatomoProvider>,
    document.body,
    document.body.firstElementChild
);

window.snapSaveState = () => {
    // Prevent conflict between preact-router & react-snap
    // After the page prerendering, remove active class from header links
    const activeHeaderLinks = document.querySelectorAll(
        "header a.active, footer + nav a.active"
    );

    if (activeHeaderLinks) {
        activeHeaderLinks.forEach((link) => link.classList.remove("active"));
    }

    // Removing the app wrapper padding bottom by default
    // Patch to prevent a glitch on page load
    document.body.firstChild.style.paddingBottom = 0;
};
