import styled from "styled-components";

export const Host = styled.footer`
    align-items: center;
    display: flex;
    justify-content: center;

    > * + * {
        margin-left: 45px;
    }
`;
