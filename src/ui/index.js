import { h, render } from "preact";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import Helmet from "preact-helmet";

import App from "./components/app";

import mainTheme from "./style/themes/main";
import GlobalStyle from "./style/index";

import faviconIco from "./assets/images/favicon.ico";
import faviconPng from "./assets/images/favicon.png";
import ogImage from "./assets/images/og-image.jpg";

render(
    <ThemeProvider theme={mainTheme}>
        {/* Document title */}
        <Helmet
            title="Kévin Painchaud | Développeur front-end à Rennes"
            meta={[
                {
                    name: "viewport",
                    content:
                        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                },
                {
                    property: "og:image",
                    content: `https://www.kevinpainchaud.fr${ogImage}`
                }
            ]}
            link={[
                {
                    rel: "shortcut icon",
                    href: faviconIco,
                    type: "image/x-icon"
                },
                {
                    rel: "icon",
                    href: faviconPng,
                    type: "image/png",
                    sizes: "128x128"
                }
            ]}
        />

        {/* Styles */}
        <Normalize />
        <GlobalStyle />

        <div>
            <App />
        </div>
    </ThemeProvider>,
    document.body,
    document.body.firstElementChild
);

// Prevent conflict between preact-router & react-snap
// After the page prerendering, remove active class from header links
window.snapSaveState = () => {
    const activeHeaderLinks = document.querySelector("header a.active");

    if (activeHeaderLinks) {
        activeHeaderLinks.classList.remove("active");
    }
};
