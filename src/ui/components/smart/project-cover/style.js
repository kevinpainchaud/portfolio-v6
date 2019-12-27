import styled from "styled-components";

export const Host = styled.div`
    padding-bottom: 55px;
    position: relative;
`;

export const BackgroundImage = styled.div`
    background-color: #000;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

    &:after {
        background-color: ${props => props.theme.colors.primary};
        content: "";
        display: block;
        height: 100%;
        left: 0;
        opacity: 0.8;
        position: absolute;
        top: 0;
        width: 100%;
    }

    > .img {
        height: 100%;
        width: 100%;

        img {
            object-fit: cover;
        }
    }
`;

export const Header = styled.div`
    position: relative;
    z-index: 1;
`;

export const Body = styled.div`
    position: relative;
    z-index: 1;

    * + & {
        margin-top: 200px;
    }
`;

export const BodyInner = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;

    text-align: center;

    > * + * {
        margin-top: 25px;
    }
`;

export const Title = styled.h1`
    color: #fff;
    margin: 0;
`;

export const Metas = styled.div`
    align-items: center;
    display: flex;
    margin: -10px;

    * + & {
        margin-top: 10px;
    }

    > div {
        margin: 10px;
    }
`;

BackgroundImage.defaultProps = {
    theme: {
        colors: {
            primary: "gray",
            gray300: "#e1e1e1"
        }
    }
};
