const theme = {
    primary: "#ffc500",
    secondary: "#323232",
    black: "#252525",
    grey: "#d6d6d6",
    white: "#fff",
    red: "#d50707",
    backdrop: "rgba(0, 0, 0, 0.3)",
} as const;

export type Theme = keyof typeof theme;

export default theme;
