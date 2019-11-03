import styled from "styled-components";

const getStyledLink = Link => {
    const link = styled(Link)`
        color: ${props => props.theme.colors.primary};
        cursor: pointer;
        text-decoration: underline;
    `;

    link.defaultProps = {
        theme: {
            colors: {
                primary: "gray"
            }
        }
    };

    return link;
};

export default getStyledLink;
