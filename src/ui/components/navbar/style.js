import styled from "styled-components";

export const Host = styled.header`
    display: flex;

    > * + * {
        margin-left: 15px;
    }
`;
