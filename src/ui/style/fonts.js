import { css } from "styled-components";

import HKGroteskLight from "../assets/fonts/hk-grotesk/hk-grotesk-light.woff2";
import HKGroteskRegular from "../assets/fonts/hk-grotesk/hk-grotesk-regular.woff2";
import HKGroteskMedium from "../assets/fonts/hk-grotesk/hk-grotesk-medium.woff2";
import HKGroteskSemiBold from "../assets/fonts/hk-grotesk/hk-grotesk-semi-bold.woff2";
import HKGroteskBold from "../assets/fonts/hk-grotesk/hk-grotesk-bold.woff2";

import GilroyBold from "../assets/fonts/gilroy/gilroy-bold.woff2";
import GilroyBlack from "../assets/fonts/gilroy/gilroy-black.woff2";

const fonts = css`
    // HK Grotesk
    @font-face {
        font-family: "HK Grotesk";
        src: url(${HKGroteskLight}) format("woff2");
        font-weight: 300;
    }

    @font-face {
        font-family: "HK Grotesk";
        src: url(${HKGroteskRegular}) format("woff2");
        font-weight: 400;
    }

    @font-face {
        font-family: "HK Grotesk";
        src: url(${HKGroteskMedium}) format("woff2");
        font-weight: 500;
    }

    @font-face {
        font-family: "HK Grotesk";
        src: url(${HKGroteskSemiBold}) format("woff2");
        font-weight: 600;
    }

    @font-face {
        font-family: "HK Grotesk";
        src: url(${HKGroteskBold}) format("woff2");
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
