import styled from "styled-components";

export const Host = styled.div`
    align-items: center;
    display: inline-flex;

    > svg {
        height: ${props => (props.iconWidthXs ? "12px" : "24px")};
        min-width: ${props => (props.iconWidthXs ? "12px" : "24px")};
        width: ${props => (props.iconWidthXs ? "12px" : "24px")};

        > use {
            fill: ${props => props.theme.colors.grayBase};
        }

        & + * {
            margin-left: 5px;
        }
    }
`;

Host.defaultProps = {
    theme: {
        colors: {
            grayBase: "gray"
        }
    }
};
