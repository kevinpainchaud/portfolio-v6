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
    color: ${props =>
        props.reverseColor ? "#fff" : props.theme.colors.textBase};

    &.active {
        font-weight: 700;
    }
`;

Link.defaultProps = {
    theme: {
        colors: {
            textBase: "#000"
        }
    }
};
