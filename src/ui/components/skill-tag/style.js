import styled from "styled-components";

export const Host = styled.div`
    color: ${props => props.theme.colors.textColor};
    border: 1px solid ${props => props.theme.colors.textColor};
    padding: 5px 8px;
`;

Host.defaultProps = {
    theme: {
        colors: {
            textColor: "gray"
        }
    }
};
