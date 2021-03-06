import { h, Fragment } from "preact";
import PropTypes from "prop-types";
import Helmet from "preact-helmet";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import mainTheme from "../assets/styles/themes/main";
import GlobalStyle from "../assets/styles/index";
import { AppWrapper } from "../context/app-context";

import Tracking from "../components/smart/tracking";
import Navbar from "../components/smart/navbar";
import Footer from "../components/smart/footer";
import StickyBottomNav from "../components/smart/sticky-bottom-nav";
import ContactModal from "../components/smart/contact-modal";

const App = ({ Component, pageProps }) => {
    return (
        <Fragment>
            {/* Document head */}
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
                            "https://www.kevinpainchaud.fr/images/og-image.jpg",
                    },
                ]}
                link={[
                    {
                        rel: "shortcut icon",
                        href: "/favicon.ico",
                        type: "image/x-icon",
                    },
                    {
                        rel: "icon",
                        href: "/favicon.png",
                        type: "image/png",
                        sizes: "128x128",
                    },
                ]}
            />

            {/* Styles */}
            <Normalize />
            <GlobalStyle theme={mainTheme} />

            <ThemeProvider theme={mainTheme}>
                <AppWrapper>
                    <Tracking />
                    <Navbar />
                    <Component {...pageProps} />
                    <Footer />
                    <StickyBottomNav />
                    <ContactModal />
                </AppWrapper>
            </ThemeProvider>
        </Fragment>
    );
};

App.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object,
};

export default App;
