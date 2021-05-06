import { h } from "preact";
import { createContext } from "preact";
import { useContext } from "preact/hooks";
import mitt from "mitt";

const emitter = mitt();

export const AppContext = createContext({ emitter });

export function AppWrapper({ children }) {
    return (
        <AppContext.Provider value={{ emitter }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
