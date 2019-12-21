import styled from "styled-components";

import Box from "../../styled/box";

import ipadMockup from "../../../assets/images/ipad-mockup.png";

const padding = 25,
    ipadMockupHeight = 474;

export const Host = styled(Box)`
    overflow: hidden;

    > a {
        color: inherit;
        display: flex;
        width: 100%;
    }
`;

export const Body = styled.div`
    display: flex;
    flex: 1;
    padding: ${padding}px;

    > div:first-child {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const Logo = styled(Box)`
    display: inline-block;
    padding: 10px;

    > img {
        display: block;
        height: 64px;
        width: 64px;
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
    color: ${props => props.theme.colors.primary};
    font-size: 20px;
    font-family: ${props => props.theme.headings.fontFamily};
    font-weight: 700;
`;

export const Mockup = styled.div`
    flex: 1;
    min-height: ${ipadMockupHeight - padding}px;
    position: relative;

    &:before {
        background-image: url(${ipadMockup});
        background-position: left top;
        background-repeat: no-repeat;
        content: "";
        display: block;
        height: calc(100% + ${padding}px);
        left: 0;
        position: absolute;
        top: 0;
        width: calc(100% + ${padding}px);
    }

    > img {
        border-radius: 20px;
        left: 0;
        position: absolute;
        top: 0;
        transform: rotateX(55deg) rotateY(0deg) rotateZ(-45deg);
        transform-origin: 69% 18%;
        width: 645px;
    }

    * + & {
        margin-left: 60px;
    }
`;

[Host, Logo, Title].forEach(s => {
    s.defaultProps = {
        theme: {
            headings: {
                fontFamily: "sans-serif"
            },
            colors: {
                primary: "gray",
                gray300: "#e1e1e1",
                grayBase: "gray"
            }
        }
    };
});
