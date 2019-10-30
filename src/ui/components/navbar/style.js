import styled from "styled-components";

export const Host = styled.header`
    align-items: center;
    display: flex;
    padding: 45px 0;

    > * + * {
        margin-left: 15px;
    }
`;
