import styled from "styled-components";

export const Host = styled.div`
    align-items: center;
    display: flex;

    > div:first-child {
        & + * {
            margin-left: 10px;
        }
    }

    > * + * {
        margin-left: 15px;
    }
`;
