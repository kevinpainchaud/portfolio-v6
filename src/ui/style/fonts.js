import { css } from "styled-components";

import HKGroteskLightWoff2 from "../assets/fonts/hk-grotesk/hk-grotesk-light.woff2";
import HKGroteskLightWoff from "../assets/fonts/hk-grotesk/hk-grotesk-light.woff";
import HKGroteskRegularWoff2 from "../assets/fonts/hk-grotesk/hk-grotesk-regular.woff2";
import HKGroteskRegularWoff from "../assets/fonts/hk-grotesk/hk-grotesk-regular.woff";
import HKGroteskMediumWoff2 from "../assets/fonts/hk-grotesk/hk-grotesk-medium.woff2";
import HKGroteskMediumWoff from "../assets/fonts/hk-grotesk/hk-grotesk-medium.woff";
import HKGroteskSemiBoldWoff2 from "../assets/fonts/hk-grotesk/hk-grotesk-semibold.woff2";
import HKGroteskSemiBoldWoff from "../assets/fonts/hk-grotesk/hk-grotesk-semibold.woff";
import HKGroteskBoldWoff2 from "../assets/fonts/hk-grotesk/hk-grotesk-bold.woff2";
import HKGroteskBoldWoff from "../assets/fonts/hk-grotesk/hk-grotesk-bold.woff";

import GilroyBold from "../assets/fonts/gilroy/gilroy-bold.woff2";
import GilroyBlack from "../assets/fonts/gilroy/gilroy-black.woff2";

const fonts = css`
    // HK Grotesk
    @font-face {
        font-family: "HK Grotesk";
        src: url(${HKGroteskLightWoff2}) format("woff2"),
            url(${HKGroteskLightWoff}) format("woff");
        font-weight: 300;
    }

    @font-face {
        font-family: "HK Grotesk";
        src: url(${HKGroteskRegularWoff2}) format("woff2"),
            url(${HKGroteskRegularWoff}) format("woff");
        sfont-weight: 400;
    }

    @font-face {
        font-family: "HK Grotesk";
        src: url(${HKGroteskMediumWoff2}) format("woff2"),
            url(${HKGroteskMediumWoff}) format("woff");
        font-weight: 500;
    }

    @font-face {
        font-family: "HK Grotesk";
        src: url(${HKGroteskSemiBoldWoff2}) format("woff2"),
            url(${HKGroteskSemiBoldWoff}) format("woff");
        font-weight: 600;
    }

    @font-face {
        font-family: "HK Grotesk";
        src: url(${HKGroteskBoldWoff2}) format("woff2"),
            url(${HKGroteskBoldWoff}) format("woff");
        font-weight: 700;
    }

    // Gilroy
    @font-face {
        font-family: "Gilroy";
        src: url(${GilroyBold}) format("woff2");
        font-weight: 600;
    }

    @font-face {
        font-family: "Gilroy";
        src: url(${GilroyBlack}) format("woff2");
        font-weight: 700;
    }
`;

export default fonts;
