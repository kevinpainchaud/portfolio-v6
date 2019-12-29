import { css } from "styled-components";

import { before } from "../mixins/media-queries";

const visibility = css`
    .hidden-xs {
        ${before(
            "sm",
            css`
                display: none;
            `
        )}
    }
`;

export default visibility;
