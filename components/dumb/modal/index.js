import { h } from "preact";
import { useEffect } from "preact/hooks";
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
    Body,
} from "./style";

import iconCross from "../../../public/images/icons/icon-cross.svg";

const Modal = ({ title, show, close, children }) => {
    useEffect(() => {
        if (show) {
            const hasScrollbar =
                window.innerHeight < document.body.clientHeight;

            document.body.style.overflow = "hidden";

            if (hasScrollbar) {
                document.body.style.paddingRight = `${getScrollbarWidth()}px`;
            }
        } else {
            setTimeout(() => {
                document.body.style.overflow = "visible";
                document.body.style.paddingRight = 0;
            }, 300);
        }
    }, [show]);

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

    return (
        <Host>
            <Backdrop
                onClick={close}
                className={show ? "visible" : null}
            ></Backdrop>
            <Wrapper className={show ? "visible" : null}>
                <Outside onClick={close} show={show}></Outside>
                <Dialog className={show ? "visible" : null}>
                    <Content>
                        <Header>
                            <HeaderTitle>{title}</HeaderTitle>
                            <HeaderBtnClose onClick={close}>
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
    show: PropTypes.bool,
    close: PropTypes.func,
    children: PropTypes.element,
};

export default Modal;
