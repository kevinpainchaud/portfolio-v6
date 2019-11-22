import { lighten } from "polished";

const mainTheme = {
    base: {
        fontFamily: '"HK Grotesk", sans-serif',
        fontSize: 18,
        borderRadius: 6,
        transitionDuration: 0.2
    },
    headings: {
        fontFamily: '"Gilroy", sans-serif'
    },
    colors: {
        primary: "#eb6e08",
        gray300: "#f2f2f2",
        grayBase: "gray",
        textBase: lighten(0.15, "#000")
    },
    button: {
        borderRadius: 200,
        borderWidth: 2
    }
};

export default mainTheme;
