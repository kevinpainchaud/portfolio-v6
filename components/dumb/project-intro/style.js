import styled, { css } from "styled-components";

import { after } from "../../../assets/styles/mixins/media-queries";

export const Host = styled.div`
    text-align: center;
`;

export const Title = styled.h2`
    margin: 0;
`;

export const Content = styled.p`
    font-size: 14px;
    line-height: 2em;
    margin: 0;

    ${after(
        "sm",
        css`
            font-size: 18px;
        `
    )}

    * + & {
        margin-top: 10px;

        ${after(
            "sm",
            css`
                margin-top: 20px;
            `
        )}

        ${after(
            "md",
            css`
                margin-top: 35px;
            `
        )}
    }
`;
