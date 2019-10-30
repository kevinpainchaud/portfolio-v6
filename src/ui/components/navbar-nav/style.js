import styled from "styled-components";
import { Link as RouterLink } from "preact-router/match";

export const Host = styled.nav`
    align-items: center;
    display: flex;
    justify-content: flex-end;

    > * + * {
        margin-left: 30px;
    }
`;

export const Link = styled(RouterLink)`
    text-decoration: none;

    &.active {
        font-weight: bold;
    }
`;
