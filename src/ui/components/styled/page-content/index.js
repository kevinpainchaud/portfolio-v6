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
`;

export default PageContent;
