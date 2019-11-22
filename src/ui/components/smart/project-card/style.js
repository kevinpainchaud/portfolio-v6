import styled from "styled-components";
import { darken } from "polished";

import Box from "../../styled/box";

const logoWidth = 68,
    logoPadding = 15,
    bodyPadding = 25;

export const Host = styled(Box)`
    overflow: hidden;

    > a {
        color: inherit;
    }
`;

export const Cover = styled.div`
    background-color: ${props => props.theme.colors.grayBase};
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 155px;

    &.lg {
        height: 500px;
    }
`;

export const Body = styled.div`
    padding: ${bodyPadding}px;
`;

export const Logo = styled(Box)`
    box-shadow: none;
    display: inline-block;
    margin-top: -${(logoWidth / 2 + logoPadding + bodyPadding).toFixed()}px;
    padding: ${logoPadding}px;

    > img {
        display: block;
        height: ${logoWidth}px;
        width: ${logoWidth}px;
    }
`;

export const Content = styled.div`
    font-size: 16px;

    * + & {
        margin-top: 15px;
    }

    > * + * {
        margin-top: 10px;
    }
`;

export const Title = styled.div`
    font-size: 20px;
    font-family: ${props => props.theme.headings.fontFamily};
    font-weight: 700;
`;

export const Description = styled.div``;

[Host, Cover, Logo].forEach(s => {
    s.defaultProps = {
        theme: {
            headings: {
                fontFamily: "sans-serif"
            },
            colors: {
                gray300: "#e1e1e1",
                grayBase: "gray"
            }
        }
    };
});
