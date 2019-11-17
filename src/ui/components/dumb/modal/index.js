import { h } from "preact";
import { useState } from "preact/hooks";

import "./bootstrap-modal.scss";

import { Host, Header, HeaderTitle, Body } from "./style";

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
                <div onClick={handleClose}>X</div>
            </Header>
            <Body>{props.children}</Body>
        </Host>
    );
};

export default Modal;
