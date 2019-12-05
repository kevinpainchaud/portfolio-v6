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
        primary: "#110133",
        secondary: "#40bfc1",
        gray200: "#edfcfc",
        gray300: "#e6fdfd",
        gray400: "#cadcdc",
        grayBase: "#808080",
        textBase: lighten(0.15, "#000")
    },
    button: {
        borderRadius: 200,
        borderWidth: 2
    }
};

export default mainTheme;
