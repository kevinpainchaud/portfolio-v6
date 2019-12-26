import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { forwardRef } from "preact/compat";

import {
    Host,
    Backdrop,
    Wrapper,
    Outside,
    Dialog,
    Content,
    Header,
    HeaderTitle,
    HeaderBtnClose,
    Body
} from "./style";

import iconCross from "../../../assets/images/icon-cross.svg";

const Modal = forwardRef((props, ref) => {
    const [show, setShow] = useState(false);

    const handleOpening = () => {
            setShow(true);
            document.body.overflow = "hidden";
        },
        handleClosing = () => {
            setShow(false);
            document.body.overflow = "visible";
        };

    useEffect(() => {
        ref.current.addEventListener("open", handleOpening);
    }, []);

    return (
        <Host ref={ref}>
            <Backdrop
                onClick={handleClosing}
                class={show ? "visible" : null}
            ></Backdrop>
            <Wrapper class={show ? "visible" : null}>
                <Outside onClick={handleClosing} show={show}></Outside>
                <Dialog class={show ? "visible" : null}>
                    <Content>
                        <Header>
                            <HeaderTitle>Modal header</HeaderTitle>
                            <HeaderBtnClose onClick={handleClosing}>
                                <svg>
                                    <use xlinkHref={`#${iconCross.id}`}></use>
                                </svg>
                            </HeaderBtnClose>
                        </Header>
                        <Body>{props.children}</Body>
                    </Content>
                </Dialog>
            </Wrapper>
        </Host>
    );
});

export default Modal;
