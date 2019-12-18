import { h } from "preact";
import { useState } from "preact/hooks";

import "./bootstrap-modal.scss";

import { Host, Header, HeaderTitle, HeaderBtnClose, Body } from "./style";

import iconCross from "../../../assets/images/icon-cross.svg";

const Modal = props => {
    const [show, setShow] =
        typeof props.setShow === "function"
            ? [props.show, props.setShow]
            : useState(props.show);

    const handleClose = () => setShow(!show);

    return (
        <Host show={show} onHide={handleClose}>
            <Header>
                <HeaderTitle>{props.title}</HeaderTitle>
                <HeaderBtnClose onClick={handleClose}>
                    <svg>
                        <use xlinkHref={`#${iconCross.id}`}></use>
                    </svg>
                </HeaderBtnClose>
            </Header>
            <Body>{props.children}</Body>
        </Host>
    );
};

export default Modal;
