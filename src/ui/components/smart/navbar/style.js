import styled from "styled-components";

const Host = styled.header`
    align-items: center;
    background-color: ${props => (props.transparent ? "transparent" : "#fff")};
    border-bottom: ${props =>
        props.noBorderBottom ? null : "1px solid transparent"};
    border-bottom-color: ${props =>
        props.transparent ? "transparent" : props.theme.colors.gray300};
    display: flex;
    padding: 45px 0;
    position: relative;
    z-index: 1;

    > * + * {
        margin-left: 15px;
    }
`;

Host.defaultProps = {
    theme: {
        colors: {
            gray300: "#e1e1e1"
        }
    }
};

export default Host;
