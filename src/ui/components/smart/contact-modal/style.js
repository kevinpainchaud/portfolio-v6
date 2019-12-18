import styled from "styled-components";

export const ModalContent = styled.div`
    padding: 35px;
    text-align: center;

    a {
        font-weight: 500;
        text-decoration: none;
    }
`;

export const Hr = styled.div`
    background-color: ${props => props.theme.colors.gray400};
    height: 1px;
    margin: 25px auto 20px auto;

    width: 100px;
`;

[Hr].forEach(s => {
    s.defaultProps = {
        theme: {
            colors: {
                gray400: "#c4c4c4"
            }
        }
    };
});
