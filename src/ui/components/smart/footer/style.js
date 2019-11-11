import styled from "styled-components";

import OriginalIconLink from "../../dumb/icon-link";
import OriginalStyledLink from "../../styled/styled-link";

export const Host = styled.footer`
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 45px 0;

    > * + * {
        margin-left: 45px;
    }
`;

export const StyledLink = styled(OriginalStyledLink)`
    color: ${props => props.theme.colors.textBase};
`;

export const IconLink = styled(OriginalIconLink)`
    > a {
        color: ${props => props.theme.colors.textBase};
    }
`;

[StyledLink, IconLink].forEach(s => {
    s.defaultProps = {
        theme: {
            colors: {
                textBase: "#000"
            }
        }
    };
});