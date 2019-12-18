import styled from "styled-components";
import Modal from "react-bootstrap/Modal";

export const Host = styled(Modal)`
    > .modal-content {
        border: 0;
        border-radius: ${props => props.theme.base.borderRadius}px;
    }
`;

export const Header = styled(Modal.Header)`
    &.modal-header {
        align-items: center;
        border-bottom-color: ${props => props.theme.colors.gray400};
        display: flex;
        font-family: "Gilroy";
        font-weight: 600;
    }
`;

export const HeaderTitle = styled(Modal.Title)`
    color: ${props => props.theme.colors.primary};
    text-align: center;
    width: 100%;
`;

export const HeaderBtnClose = styled.div`
    cursor: pointer;

    > svg {
        height: 16px;
        min-width: 16px;
        width: 16px;

        > use {
            fill: ${props => props.theme.colors.grayBase};
        }
    }
`;

export const Body = styled(Modal.Body)``;

[Host, HeaderTitle, HeaderBtnClose].forEach(s => {
    s.defaultProps = {
        theme: {
            base: {
                borderRadius: 0
            },
            colors: {
                primary: "gray",
                gray400: "#c4c4c4",
                grayBase: "gray"
            }
        }
    };
});
