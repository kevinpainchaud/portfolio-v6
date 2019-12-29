import styled from "styled-components";

const logoWidth = 45,
    logoPadding = 15;

const Host = styled.div`
    align-items: center;
    display: inline-flex;
    flex-direction: column;

    > div {
        &:first-child {
            padding: ${logoPadding}px;
            width: ${logoWidth + logoPadding * 2}px;

            > .img {
                display: block;
                height: ${logoWidth}px;
                width: ${logoWidth}px;
            }
        }

        &:last-child {
            color: ${props => props.theme.colors.textColor};
            font-size: 16px;
            margin-top: 10px;
        }
    }
`;

Host.defaultProps = {
    theme: {
        colors: {
            textColor: "gray"
        }
    }
};

export default Host;
