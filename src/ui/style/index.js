import { createGlobalStyle } from "styled-components";

import fonts from "./fonts";
import base from "./base";
import typography from "./typography";

const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${base}
    ${typography}
`;

GlobalStyle.defaultProps = {
    theme: {
        base: {
            fontFamily: "sans-serif",
            fontSize: 14
        }
    }
};

export default GlobalStyle;
