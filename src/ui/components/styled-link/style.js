import styled from "styled-components";

import Link from "../link";

export const StyledLink = styled(Link)`
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    text-decoration: underline;
`;

StyledLink.defaultProps = {
    theme: {
        colors: {
            primary: "gray"
        }
    }
};
