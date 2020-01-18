import styled, { css } from "styled-components";

import { before, after, between } from "../../../style/mixins/media-queries";

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

export const Inner = styled.div`
    ${after(
        "sm",
        css`
            align-items: center;
            display: flex;
        `
    )}

    > div {
        ${after(
            "sm",
            css`
                flex: 1;
                padding: 0 15px;
            `
        )}

        &:nth-child(2) {
            ${between(
                "sm",
                "md",
                css`
                    flex: 2;
                `
            )}
        }

        & + div {
            ${before(
                "sm",
                css`
                    margin-top: 15px;
                `
            )}
        }
    }
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
