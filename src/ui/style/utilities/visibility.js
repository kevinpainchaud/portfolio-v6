import { css } from "styled-components";

import { before, after, between } from "../mixins/media-queries";

const visibility = css`
    .visible-xs {
        ${after(
            "sm",
            css`
                display: none !important;
            `
        )}
    }

    .hidden-xs {
        ${before(
            "sm",
            css`
                display: none;
            `
        )}
    }

    .hidden-sm {
        ${between(
            "sm",
            "md",
            css`
                display: none;
            `
        )}
    }
`;

export default visibility;
