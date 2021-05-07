import { css } from "styled-components";

import { after, before } from "./mixins/media-queries";
import { layout } from "./variables/layout";

const base = css`
    body {
        color: ${(props) => props.theme.colors.textBase};
        font-family: ${(props) => props.theme.base.fontFamily};
        font-size: 14px;
        font-weight: 400;

        ${after(
            "sm",
            css`
                font-size: 18px;
            `
        )}
    }

    #__next {
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        ${before(
            "sm",
            css`
                padding-bottom: ${layout.stickyBottomNavHeight}px;
            `
        )}
    }

    * {
        box-sizing: border-box;
    }

    a {
        color: ${(props) => props.theme.colors.primary};
        text-decoration: none;
    }

    strong {
        font-weight: 600;
    }
`;

export default base;
