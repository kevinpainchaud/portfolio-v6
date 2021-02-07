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
    animation: ${fadeIn} 0.2s;
    background-color: ${(props) =>
        props.background ? props.theme.colors.gray300 : null};
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: ${(props) => props.justifyContent || null};
`;

PageContent.defaultProps = {
    theme: {
        colors: {
            gray300: "#f7f7f7",
        },
    },
};

export default PageContent;
