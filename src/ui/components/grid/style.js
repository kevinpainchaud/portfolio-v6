import styled from "styled-components";

const nbCols = 12;

export const Container = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    margin: auto;
    max-width: 1140px;
    width: 100%;
`;

export const Row = styled.div`
    align-items: flex-start;
    display: flex;
    margin-left: -15px;
    margin-right: -15px;

    > div {
        text-align: ${props => props.textAlign || "left"};
    }
`;

export const Col = styled.div`
    flex-basis: ${props =>
        props.colWidth
            ? ((props.colWidth / nbCols) * 100).toFixed(6) + "%"
            : "auto"};

    padding-left: 15px;
    padding-right: 15px;
    max-width: ${props =>
        props.colWidth
            ? ((props.colWidth / nbCols) * 100).toFixed(6) + "%"
            : "auto"};
    width: 100%;
`;
