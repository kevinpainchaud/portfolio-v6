import { css } from "styled-components";

import { after } from "./mixins/media-queries";

const typography = css`
    h1,
    h2,
    h3,
    h4 {
        font-family: ${(props) => props.theme.headings.fontFamily};
        font-weight: 800;
        color: ${(props) => props.theme.colors.primary};
    }

    h1 {
        font-size: 30px;

        ${after(
            "sm",
            css`
                font-size: 40px;
            `
        )}
    }

    h2 {
        font-size: 19px;

        ${after(
            "sm",
            css`
                font-size: 26px;
            `
        )}
    }

    h3 {
        font-size: 16px;

        ${after(
            "sm",
            css`
                font-size: 21px;
            `
        )}
    }

    p,
    ul > li {
        line-height: 1.5em;
    }
`;

export default typography;
