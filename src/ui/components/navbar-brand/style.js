import styled from "styled-components";

export const Host = styled.div`
    > a {
        color: ${props => props.theme.colors.textBase};
        font-size: 20px;
        font-weight: 600;
    }
`;

Host.defaultProps = {
    theme: {
        colors: {
            textBase: "#000"
        }
    }
};
