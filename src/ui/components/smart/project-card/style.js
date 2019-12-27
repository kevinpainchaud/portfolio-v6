import styled from "styled-components";

import Box from "../../styled/box";

const padding = 25;

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

    > * + * {
        margin-left: ${padding}px;
    }
`;

export const Inner = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Logo = styled(Box)`
    display: inline-block;
    padding: 10px;

    > .img {
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
    position: relative;

    &.mockup-type--ipad {
        > div {
            margin-left: 5%;
            min-height: ${390 - padding * 2}px;
            position: relative;
            width: 120%;

            > .img {
                display: block;
                left: 0;
                position: absolute;
                top: 0;
            }

            > .img:nth-child(1) {
                width: 100%;
            }

            > .img:nth-child(2) {
                border-radius: 20px;
                transform: rotateX(55deg) rotateY(0deg) rotateZ(-45deg);
                transform-origin: 67.5% 17.5%;
                width: 57.25%;
            }
        }
    }

    &.mockup-type--tv {
        > div {
            position: relative;
            margin: auto;
            max-width: 545px;

            > .img {
                &:nth-child(1) {
                    width: 100%;
                }

                &:nth-child(2) {
                    width: 95.6%;
                    left: 2.1%;
                    position: absolute;
                    top: 0.9%;
                    height: 86%;
                }
            }
        }
    }

    &.mockup--reversed {
        max-width: 58%;

        &.mockup-type--ipad {
            > div {
                left: -35%;
                transform: scaleX(-1) translateX(${padding}px);
                width: 128%;

                > .img:nth-child(2) {
                    transform: rotateX(55deg) rotateY(0deg) rotateZ(-45deg)
                        scaleX(-1);
                    transform-origin: 60.75% 31%;
                }
            }
        }
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
