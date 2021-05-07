import { lighten } from "polished";

const mainTheme = {
    base: {
        fontFamily: '"Poppins", sans-serif',
        borderRadius: 6,
        transitionDuration: 0.2,
    },
    headings: {
        fontFamily: '"Poppins", sans-serif',
    },
    colors: {
        primary: "#110133",
        secondary: "#40bfc1",
        gray200: "#edfcfc",
        gray300: "#edf6f6",
        gray400: "#cadcdc",
        grayBase: "#808080",
        textBase: lighten(0.15, "#000"),
    },
    button: {
        borderRadius: 200,
        borderWidth: 2,
    },
};

export default mainTheme;
