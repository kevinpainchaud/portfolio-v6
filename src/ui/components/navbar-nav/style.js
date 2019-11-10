import styled from "styled-components";

import OriginalLink from "../link";

export const Host = styled.nav`
    align-items: center;
    display: flex;
    justify-content: flex-end;

    > * + * {
        margin-left: 30px;
    }
`;

export const Link = styled(OriginalLink)`
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
