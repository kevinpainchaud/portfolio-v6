import { lighten } from "polished";

export const mainTheme = {
    base: {
        fontFamily: '"Fira Sans", sans-serif'
    },
    colors: {
        primary: "#eb6e08",
        grayBase: "gray",
        textBase: lighten(0.15, "#000")
    },
    button: {
        borderRadius: "20px",
        borderWidth: "2px"
    }
};
