import { createMuiTheme } from "@material-ui/core/styles";
import "typeface-nunito";

declare module "@material-ui/core/styles/createMuiTheme" {
    interface Theme {
        colors: {
            [key: string]: Partial<{
                light: string,
                dark: string,
                main: string
            }>
        };
    }

    interface ThemeOptions {
        colors: {
            [key: string]: Partial<{
                light: string,
                dark: string,
                main: string
            }>
        };
    }
}

export default createMuiTheme({
    typography: {
        fontFamily: "nunito",
        headline: {
            fontFamily: "impact",
            fontSize: "32px"
        },
        subheading: {
            fontSize: "16px"
        }
    },
    palette: {
        primary: {
            light: "#BDBDBD",
            main: "#757575",
            dark: "#424242",
            contrastText: "#FFFFFF"
        },
        secondary: {
            light: "#F0F4C3",
            main: "#CDDC39",
            dark: "#827717",
            contrastText: "#FFFFFF"
        },
        background: {
            default: "#f5f5f5"
        }
    },
    colors: {
        accent: {
            light: "#ffffbd",
            dark: "",
            main: "#ffdd8c"
        }
    }
});
