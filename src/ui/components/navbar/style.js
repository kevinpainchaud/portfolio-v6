import styled from "styled-components";

export const Header = styled.header`
    display: flex;

    > * + * {
        margin-left: 15px;
    }
`;
