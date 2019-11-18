import styled from "styled-components";

import OriginalIconLink from "../../dumb/icon-link";

export const IconLink = styled(OriginalIconLink)`
    > a {
        color: ${props => props.theme.colors.textBase};
    }
`;

IconLink.defaultProps = {
    theme: {
        colors: {
            textBase: "#000"
        }
    }
};
