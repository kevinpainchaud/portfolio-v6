import { h } from "preact";
import { createContext } from "preact";
import { useContext } from "preact/hooks";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import mitt from "mitt";

const emitter = mitt();

export const AppContext = createContext({
    emitter,
    currentRoutePathname: null,
});

export function AppWrapper({ children }) {
    const router = useRouter();

    return (
        <AppContext.Provider
            value={{ emitter, currentRoutePathname: router.pathname }}
        >
            {children}
        </AppContext.Provider>
    );
}

AppWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export function useAppContext() {
    return useContext(AppContext);
}
