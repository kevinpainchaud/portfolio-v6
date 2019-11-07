import styled from "styled-components";

export const Meta = styled.div`
    align-items: center;
    display: flex;

    > svg {
        height: 16px;
        left: 0px;
        min-width: 16px;
        position: relative;
        top: -1px;
        width: 16px;

        > use {
            fill: ${props => props.theme.colors.grayBase};
        }
    }

    > div {
        color: ${props => props.theme.colors.grayBase};
    }

    > svg + div {
        margin-left: 5px;
    }
`;

Meta.defaultProps = {
    theme: {
        colors: {
            grayBase: "gray"
        }
    }
};
