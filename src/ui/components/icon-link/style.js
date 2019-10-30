import styled from "styled-components";

export const Host = styled.div`
    align-items: center;
    display: flex;

    > svg {
        height: 24px;
        min-width: 24px;
        width: 24px;

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
