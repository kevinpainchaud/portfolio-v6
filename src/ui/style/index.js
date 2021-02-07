import { createGlobalStyle } from "styled-components";

import fonts from "./fonts";
import base from "./base";
import typography from "./typography";
import visiblity from "./utilities/visibility";

const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${base}
    ${typography}
    ${visiblity}
`;

GlobalStyle.defaultProps = {
    theme: {
        base: {
            fontFamily: "sans-serif",
        },
        colors: {
            primary: "gray",
            textBase: "#000",
        },
        headings: {
            fontFamily: "sans-serif",
        },
    },
};

export default GlobalStyle;
