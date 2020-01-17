import styled from "styled-components";

const Host = styled.div`
    align-items: center;
    display: inline-flex;

    > svg {
        height: ${props => (props.iconWidthXs ? "12px" : "24px")};
        min-width: ${props => (props.iconWidthXs ? "12px" : "24px")};
        width: ${props => (props.iconWidthXs ? "12px" : "24px")};

        > use {
            fill: ${props =>
                props.gray
                    ? props.theme.colors.grayBase
                    : props.theme.colors.primary};
        }

        & + * {
            margin-left: 5px;
        }
    }
`;

Host.defaultProps = {
    theme: {
        colors: {
            primary: "gray",
            grayBase: "gray"
        }
    }
};

export default Host;
