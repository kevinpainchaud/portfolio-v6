import { css } from "styled-components";

import FiraSansRegularWoff2 from "../assets/fonts/fira-sans/fira-sans-regular.woff2";
import FiraSansSemiBoldWoff2 from "../assets/fonts/fira-sans/fira-sans-semi-bold.woff2";

const fonts = css`
    // Fira Sans
    @font-face {
        font-family: "Fira Sans";
        src: url(${FiraSansRegularWoff2}) format("woff2");
        font-weight: 400;
    }

    @font-face {
        font-family: "Fira Sans";
        src: url(${FiraSansSemiBoldWoff2}) format("woff2");
        font-weight: 600;
    }
`;

export default fonts;
