import { createGlobalStyle } from "styled-components";

import fonts from "./_fonts";
import base from "./_base";
import typography from "./_typography";

export const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${base}
    ${typography}
`;
