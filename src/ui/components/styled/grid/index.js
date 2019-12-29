import styled, { css } from "styled-components";

import { before, after } from "../../../style/mixins/media-queries";

export const nbCols = 12;
export const gutterWidth = 30;
export const colPadding = (gutterWidth / 2).toFixed();

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1140px;
    padding-left: ${colPadding}px;
    padding-right: ${colPadding}px;
    width: 100%;
`;

export const Row = styled.div`
    margin-left: -${colPadding}px;
    margin-right: -${colPadding}px;

    ${after(
        "sm",
        css`
            align-items: ${props => props.alignItems || null};
            display: flex;
            justify-content: ${props => props.justifyContent || null};
        `
    )}

    > * {
        text-align: ${props => props.textAlign || null};
    }

    > * + * {
        ${before(
            "sm",
            css`
                margin-top: 15px;
            `
        )}
    }
`;

export const Col = styled.div`
    padding-left: ${colPadding}px;
    padding-right: ${colPadding}px;
    width: 100%;

    ${after(
        "sm",
        css`
            flex-basis: ${props =>
                props.colWidth
                    ? ((props.colWidth / nbCols) * 100).toFixed(6) + "%"
                    : "auto"};
            min-width: ${props =>
                props.colWidth
                    ? ((props.colWidth / nbCols) * 100).toFixed(6) + "%"
                    : "auto"};
        `
    )}

    > * {
        min-height: ${props => (props.sameHeight ? "100%" : null)};
    }
`;
