import { lighten } from "polished";

const mainTheme = {
    base: {
        fontFamily: '"HK Grotesk", sans-serif',
        fontSize: 18
    },
    headings: {
        fontFamily: '"Gilroy", sans-serif'
    },
    colors: {
        primary: "#eb6e08",
        gray300: "#e1e1e1",
        grayBase: "gray",
        textBase: lighten(0.15, "#000")
    },
    button: {
        borderRadius: 200,
        borderWidth: 2
    }
};

export default mainTheme;
