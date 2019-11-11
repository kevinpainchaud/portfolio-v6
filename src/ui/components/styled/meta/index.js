import styled from "styled-components";

const Meta = styled.div`
    align-items: center;
    display: flex;

    > svg {
        height: ${props => (props.iconWidthXs ? "12px" : "24px")};
        left: 0px;
        min-width: ${props => (props.iconWidthXs ? "12px" : "24px")};
        position: relative;
        top: -1px;
        width: ${props => (props.iconWidthXs ? "12px" : "24px")};

        > use {
            fill: ${props =>
                props.reverseColor ? "#fff" : props.theme.colors.grayBase};
        }
    }

    > div {
        color: ${props =>
            props.reverseColor ? "#fff" : props.theme.colors.grayBase};
    }

    > svg + div {
        margin-left: 5px;
    }
`;

Meta.defaultProps = {
    theme: {
        colors: {
            grayBase: "gray"
        }
    }
};

export default Meta;
