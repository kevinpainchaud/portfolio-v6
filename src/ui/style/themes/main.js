import { lighten } from "polished";

const mainTheme = {
    base: {
        fontFamily: '"Fira Sans", sans-serif'
    },
    colors: {
        primary: "#eb6e08",
        gray300: "#e1e1e1",
        grayBase: "gray",
        textBase: lighten(0.15, "#000")
    },
    button: {
        borderRadius: "20px",
        borderWidth: "2px"
    }
};

export default mainTheme;
