import { h } from "preact";
import { useState, useRef, useEffect } from "preact/hooks";

import { Host, Iframe, Loader } from "./style";

import iconLoader from "../../../assets/images/icon-loader.svg";

const IframeWrapper = ({ iframeSrc, className }) => {
    const [iframeLoaded, setIframeLoaded] = useState(false),
        iframeRef = useRef();

    useEffect(
        () => (iframeRef.current.onload = () => setIframeLoaded(true)),
        []
    );

    return (
        <Host className={`${className} ${!iframeLoaded ? "loading" : ""}`}>
            <Iframe ref={iframeRef} src={iframeSrc}></Iframe>
            <Loader>
                <svg>
                    <use xlinkHref={`#${iconLoader.id}`}></use>
                </svg>
            </Loader>
        </Host>
    );
};

export default IframeWrapper;
