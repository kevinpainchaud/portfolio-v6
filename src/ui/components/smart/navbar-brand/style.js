import styled from "styled-components";

const Host = styled.div`
    > a {
        align-items: center;

        display: flex;

        > .img {
            height: 48px;
            min-width: 48px;
            width: 48px;

            & + * {
                margin-left: 12px;
            }
        }

        > span {
            color: ${props =>
                props.reverseColor ? "#fff" : props.theme.colors.textBase};
            font-family: "Gilroy";
            font-size: 23px;
            font-weight: 700;
            line-height: 1em;
        }
    }
`;

Host.defaultProps = {
    theme: {
        colors: {
            textBase: "#000"
        }
    }
};

export default Host;
