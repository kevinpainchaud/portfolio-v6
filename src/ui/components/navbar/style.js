import styled from "styled-components";

export const Host = styled.header`
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colors.grayBase};
    display: flex;
    padding: 45px 0;

    > * + * {
        margin-left: 15px;
    }
`;

Host.defaultProps = {
    theme: {
        colors: {
            grayBase: "gray"
        }
    }
};
