import { h, render } from "preact";
import { Normalize } from "styled-normalize";
import Helmet from "preact-helmet";

import App from "./components/app";

import { GlobalStyle } from "./style/index";

render(
    <div>
        {/* Document title */}
        <Helmet title="Kévin Painchaud | Développeur front-end à Rennes" />

        {/* Styles */}
        <Normalize />
        <GlobalStyle />

        <App />
    </div>,
    document.body,
    document.body.firstElementChild
);
