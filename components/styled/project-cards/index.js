import styled, { css } from "styled-components";

import { after } from "../../../assets/styles/mixins/media-queries";

import { gutterWidth } from "../grid";

export const ProjectCards = styled.div`
    padding-bottom: 25px;

    ${after(
        "sm",
        css`
            padding-bottom: 40px;
        `
    )}

    ${after(
        "md",
        css`
            padding-bottom: 80px;
        `
    )}

    > * + * {
        margin-top: ${gutterWidth / 2}px;

        ${after(
            "sm",
            css`
                margin-top: ${gutterWidth}px;
            `
        )}
    }
`;
