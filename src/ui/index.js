import { h, render } from "preact";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import Helmet from "preact-helmet";

import App from "./components/app";

import mainTheme from "./style/themes/main";
import GlobalStyle from "./style/index";

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
