import styled from "styled-components";

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
    align-items: ${props => props.alignItems || null};
    display: flex;
    justify-content: ${props => props.justifyContent || null};
    margin-left: -${colPadding}px;
    margin-right: -${colPadding}px;

    > div {
        text-align: ${props => props.textAlign || null};
    }
`;

export const Col = styled.div`
    flex-basis: ${props =>
        props.colWidth
            ? ((props.colWidth / nbCols) * 100).toFixed(6) + "%"
            : "auto"};

    padding-left: ${colPadding}px;
    padding-right: ${colPadding}px;
    max-width: ${props =>
        props.colWidth
            ? ((props.colWidth / nbCols) * 100).toFixed(6) + "%"
            : "auto"};
    width: 100%;

    > * {
        min-height: ${props => (props.sameHeight ? "100%" : null)};
    }
`;
