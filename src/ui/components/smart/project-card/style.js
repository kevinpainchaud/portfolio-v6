import styled from "styled-components";

import Box from "../../styled/box";

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
    padding: 25px;
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
