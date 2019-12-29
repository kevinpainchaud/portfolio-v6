import styled, { css } from "styled-components";

import { after } from "../../../style/mixins/media-queries";

export const Host = styled.div`
    text-align: center;
`;

export const Title = styled.h2`
    font-size: 15px;
    margin: 0;

    ${after(
        "sm",
        css`
            padding: 20px;
        `
    )}
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
    }
`;
