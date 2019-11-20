import styled from "styled-components";

const logoWidth = 68,
    logoPadding = 15,
    bodyPadding = 25;

export const Host = styled.div`
    border: 1px solid ${props => props.theme.colors.grayBase};

    > a {
        color: inherit;
    }
`;

export const Cover = styled.div`
    background-color: ${props => props.theme.colors.grayBase};
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 125px;

    &.lg {
        height: 300px;
    }
`;

export const Body = styled.div`
    padding: ${bodyPadding}px;
`;

export const Logo = styled.div`
    background-color: #fff;
    border: 1px solid ${props => props.theme.colors.grayBase};
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
    * + & {
        margin-top: 15px;
    }

    > * + * {
        margin-top: 10px;
    }
`;

export const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
`;

export const Description = styled.div`
    font-size: ${props => props.theme.base.fontSize}px;
`;

[Host, Cover, Logo].forEach(s => {
    s.defaultProps = {
        theme: {
            base: {
                fontSize: 14
            },
            colors: {
                grayBase: "gray"
            }
        }
    };
});
