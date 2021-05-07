import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import NextHead from "next/head";
import ReactGA from "react-ga";
import { useAppContext } from "../../../context/app-context";
import tracking from "../../../data/tracking.json";

const Tracking = () => {
    const appContext = useAppContext();
    const [gaTrackingId] = useState(
        tracking.find((tracker) => tracker.type === "ga").code
    );

    useEffect(() => {
        ReactGA.initialize(gaTrackingId);
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [appContext.currentRoutePathname]);

    return (
        <NextHead>
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || []
                        function gtag(){
                            dataLayer.push(arguments)
                        }
                        gtag('js', new Date())
                        gtag('config', '${gaTrackingId}')
                    `,
                }}
            />
        </NextHead>
    );
};

export default Tracking;
