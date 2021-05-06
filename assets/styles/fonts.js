import { css } from "styled-components";

import Poppins400Woff from "../fonts/poppins-v15-latin/poppins-v15-latin-400.woff";
import Poppins400Woff2 from "../fonts/poppins-v15-latin/poppins-v15-latin-400.woff2";
import Poppins600Woff from "../fonts/poppins-v15-latin/poppins-v15-latin-600.woff";
import Poppins600Woff2 from "../fonts/poppins-v15-latin/poppins-v15-latin-600.woff2";
import Poppins800Woff from "../fonts/poppins-v15-latin/poppins-v15-latin-800.woff";
import Poppins800Woff2 from "../fonts/poppins-v15-latin/poppins-v15-latin-800.woff2";

const fonts = css`
    /* poppins-regular - latin */
    @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        src: local(""), url("${Poppins400Woff2}") format("woff2"),
            url("${Poppins400Woff}") format("woff");
    }
    /* poppins-600 - latin */
    @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        src: local(""), url("${Poppins600Woff2}") format("woff2"),
            url("${Poppins600Woff}") format("woff");
    }
    /* poppins-800 - latin */
    @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 800;
        src: local(""), url("${Poppins800Woff2}") format("woff2"),
            url("${Poppins800Woff}") format("woff");
    }
`;

export default fonts;
