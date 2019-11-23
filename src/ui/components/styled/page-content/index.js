import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const PageContent = styled.div`
    background-color: ${props =>
        props.background ? props.theme.colors.gray200 : null};
    animation: ${fadeIn} 0.2s;
`;

PageContent.defaultProps = {
    theme: {
        colors: {
            gray200: "#f7f7f7"
        }
    }
};

export default PageContent;
