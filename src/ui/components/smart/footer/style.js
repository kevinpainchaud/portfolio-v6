import styled, { css } from "styled-components";

import { after } from "../../../style/mixins/media-queries";

import OriginalIconLink from "../../dumb/icon-link";
import OriginalStyledLink from "../../styled/styled-link";

export const Host = styled.footer`
    font-size: 14px;
    padding: 15px 0;

    ${after(
        "sm",
        css`
            padding: 45px 0;
        `
    )}
`;

export const StyledLink = styled(OriginalStyledLink)`
    color: ${props => props.theme.colors.primary};
`;

export const IconLink = styled(OriginalIconLink)`
    > a {
        color: ${props => props.theme.colors.primary};
    }
`;

[StyledLink, IconLink].forEach(s => {
    s.defaultProps = {
        theme: {
            colors: {
                primary: "gray",
                textBase: "#000"
            }
        }
    };
});
