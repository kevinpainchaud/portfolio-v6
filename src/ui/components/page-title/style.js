import styled from "styled-components";

export const Host = styled.div`
    padding: 80px 0;
    text-align: center;
`;

export const Title = styled.h1`
    line-height: 1.15em;
    margin: 0;
`;

export const SubTitle = styled.div`
    color: ${props => props.theme.colors.grayBase};

    * + & {
        margin-top: 15px;
    }
`;

SubTitle.defaultProps = {
    theme: {
        colors: {
            grayBase: "gray"
        }
    }
};
