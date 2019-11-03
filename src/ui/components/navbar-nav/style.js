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
    color: ${props => props.theme.colors.textBase};
    text-decoration: none;

    &.active {
        font-weight: bold;
    }
`;

Link.defaultProps = {
    theme: {
        colors: {
            textBase: "#000"
        }
    }
};
