import { h } from "preact";
import { useState, useRef, useEffect } from "preact/hooks";

import { Host, Iframe, Loader } from "./style";

import loader from "../../../assets/images/loader.svg";

const IframeWrapper = ({ iframeSrc, className }) => {
    const [iframeLoaded, setIframeLoaded] = useState(false),
        iframeRef = useRef();

    useEffect(() => {
        iframeRef.current.onload = () => setIframeLoaded(true);
    }, []);

    return (
        <Host class={!iframeLoaded ? "loading" : null} className={className}>
            <Iframe ref={iframeRef} src={iframeSrc}></Iframe>
            <Loader>
                <svg>
                    <use xlinkHref={`#${loader.id}`}></use>
                </svg>
            </Loader>
        </Host>
    );
};

export default IframeWrapper;
