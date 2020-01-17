import styled from "styled-components";

import OriginalLink from "../link";

export const Host = styled.div`
    background-color: #fff;
    bottom: 0;
    box-shadow: ${props => props.theme.colors.grayBase} -1px 10px 25px;
    display: flex;
    left: 0;
    position: fixed;
    width: 100%;

    > * {
        flex: 1;
    }

    > * + * {
        border-left: 1px solid ${props => props.theme.colors.gray300};
    }
`;

export const Link = styled(OriginalLink)`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;

    &.active {
        background-color: ${props => props.theme.colors.secondary};
        color: #fff;
    }
`;

export const Icon = styled.div`
    > svg {
        height: 24px;
        min-width: 24px;
        width: 24px;

        > use {
            fill: ${props => props.theme.colors.primary};

            .active & {
                fill: #fff;
            }
        }
    }
`;

export const Label = styled.div`
    font-size: 12px;
    margin-top: 2px;
    text-align: center;
`;

[Host, Link, Icon].forEach(s => {
    s.defaultProps = {
        theme: {
            colors: {
                primary: "gray",
                secondary: "gray",
                gray300: "#e1e1e1",
                grayBase: "gray"
            }
        }
    };
});
