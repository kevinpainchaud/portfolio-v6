import { useEffect } from "preact/hooks";
import ReactGA from "react-ga";
import { useAppContext } from "../../../context/app-context";
import tracking from "../../../data/tracking.json";

const Tracking = () => {
    const appContext = useAppContext();

    useEffect(() => {
        ReactGA.initialize(
            tracking.find((tracker) => tracker.type === "ga").code
        );
    }, []);

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [appContext.currentRoutePathname]);
};

export default Tracking;
