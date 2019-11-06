import styled from "styled-components";

const logoWidth = 68,
    logoPadding = 15,
    bodyPadding = 25;

export const Host = styled.div`
    border: 1px solid ${props => props.theme.colors.grayBase};

    > a {
        color: inherit;
        text-decoration: none;
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
    font-size: 14px;
`;

export const Meta = styled.div`
    align-items: center;
    display: flex;

    > svg {
        height: 16px;
        left: 0px;
        min-width: 16px;
        position: relative;
        top: -1px;
        width: 16px;

        > use {
            fill: ${props => props.theme.colors.grayBase};
        }
    }

    > div {
        color: ${props => props.theme.colors.grayBase};
    }

    > svg + div {
        margin-left: 5px;
    }
`;

[Host, Cover, Logo, Meta].forEach(s => {
    s.defaultProps = {
        theme: {
            colors: {
                grayBase: "gray"
            }
        }
    };
});
