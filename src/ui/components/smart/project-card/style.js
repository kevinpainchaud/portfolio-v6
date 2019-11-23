import styled from "styled-components";
import { darken } from "polished";

import Box from "../../styled/box";

const logoWidth = 64,
    logoPadding = 15,
    bodyPadding = 25;

export const Host = styled(Box)`
    overflow: hidden;

    > a {
        color: inherit;
        display: flex;
        width: 100%;
    }
`;

export const Body = styled.div`
    flex: 1;
    padding: ${bodyPadding}px;
`;

export const Cover = styled.div`
    background-color: ${props => props.theme.colors.grayBase};
    position: relative;
    width: 70%;

    &:after {
        background-image: url("data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='utf-8'?%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='248px' height='700px' xml:space='preserve'%3E%3Cpolygon style='fill:%23FFFFFF;' points='0,0 248,0 0,700 '/%3E%3C/svg%3E");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        content: "";
        height: 105%;
        position: absolute;
        left: -1px;
        top: 0;
        width: 15%;
    }
`;

export const Logo = styled(Box)`
    box-shadow: none;
    display: inline-block;
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

    > ul {
        margin-bottom: 0;
        padding: 0 18px;
    }
`;

export const Title = styled.div`
    font-size: 20px;
    font-family: ${props => props.theme.headings.fontFamily};
    font-weight: 700;
`;

[Host, Cover, Logo, Title].forEach(s => {
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
