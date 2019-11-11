import styled from "styled-components";

const Host = styled.div`
    > a {
        color: ${props =>
            props.reverseColor ? "#fff" : props.theme.colors.textBase};
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

export default Host;
