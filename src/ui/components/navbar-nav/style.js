import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;

    > * + * {
        margin-left: 10px;
    }
`;
