import styled from "styled-components";

const logoWidth = 45,
    logoPadding = 15;

const Host = styled.div`
    align-items: center;
    display: inline-flex;
    flex-direction: column;

    > div {
        &:first-child {
            border: 1px solid ${props => props.theme.colors.textColor};
            padding: ${logoPadding}px;
            width: ${logoWidth + logoPadding * 2}px;

            > svg {
                display: block;
                height: ${logoWidth}px;

                min-width: ${logoWidth}px;
                width: ${logoWidth}px;
            }
        }

        &:last-child {
            color: ${props => props.theme.colors.textColor};
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
