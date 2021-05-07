import styled, { css } from "styled-components";

import { before, after } from "../../../assets/styles/mixins/media-queries";

export const Jumbotron = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 0;

    ${after(
        "sm",
        css`
            align-items: center;
            flex-direction: row;
            height: 100%;
            padding: 45px 0;
        `
    )}
`;

export const JumbotronContent = styled.div`
    ${before(
        "sm",
        css`
            margin-top: 10px;
            order: 2;
            text-align: center;
        `
    )}

    ${after(
        "sm",
        css`
            width: 55%;
        `
    )}

    > p {
        font-size: 16px;
        line-height: 1.7em;
        margin: 0;

        ${after(
            "sm",
            css`
                font-size: 18px;
            `
        )}

        ${after(
            "md",
            css`
                line-height: 2em;
            `
        )}

        & + * {
            margin-top: 25px;
        }
    }
`;

export const JumbotronImage = styled.div`
    ${before(
        "sm",
        css`
            margin: 0 auto;
            order: 1;
        `
    )}

    ${after(
        "sm",
        css`
            margin-left: 35px;
            width: 40%;
        `
    )}

    img {
        ${before(
            "sm",
            css`
                max-width: 250px !important;
            `
        )}
    }
`;
