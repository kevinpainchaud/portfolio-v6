import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { forwardRef } from "preact/compat";
import PropTypes from "prop-types";

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

const Modal = ({ title, children }, ref) => {
    const [show, setShow] = useState(false);

    const handleOpening = () => {
            const hasScrollbar =
                window.innerHeight < document.body.clientHeight;

            setShow(true);
            document.body.style.overflow = "hidden";

            if (hasScrollbar) {
                document.body.style.paddingRight = `${getScrollbarWidth()}px`;
            }
        },
        handleClosing = () => {
            setShow(false);

            setTimeout(() => {
                document.body.style.overflow = "visible";
                document.body.style.paddingRight = 0;
            }, 300);
        };

    const getScrollbarWidth = () => {
        // Creating invisible container
        const outer = document.createElement("div");
        outer.style.visibility = "hidden";
        outer.style.overflow = "scroll"; // forcing scrollbar to appear
        outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
        document.body.appendChild(outer);

        // Creating inner element and placing it in the container
        const inner = document.createElement("div");
        outer.appendChild(inner);

        // Calculating difference between container's full width and the child width
        const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

        // Removing temporary elements from the DOM
        outer.parentNode.removeChild(outer);

        return scrollbarWidth;
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
                            <HeaderTitle>{title}</HeaderTitle>
                            <HeaderBtnClose onClick={handleClosing}>
                                <svg>
                                    <use xlinkHref={`#${iconCross.id}`}></use>
                                </svg>
                            </HeaderBtnClose>
                        </Header>
                        <Body>{children}</Body>
                    </Content>
                </Dialog>
            </Wrapper>
        </Host>
    );
};

Modal.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element
};

export default forwardRef(Modal);
