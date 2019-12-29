import { css } from "styled-components";

import { after } from "./mixins/media-queries";

const base = css`
    body {
        font-family: ${props => props.theme.base.fontFamily};
        font-size: 14px;
        font-weight: 400;

        ${after(
            "sm",
            css`
                font-size: 18px;
            `
        )}
    }

    * {
        box-sizing: border-box;
    }

    a {
        color: ${props => props.theme.colors.primary};
        text-decoration: none;
    }
`;

export default base;
