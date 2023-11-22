import { StyleSheet } from "react-native";

// Theme
import palette from "../../theme/palette";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white,
    },
    body: {
        flex: 1,
        backgroundColor: palette.white,
        padding: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
    },
    label: {
        fontSize: 16,
        color: palette.black,
        opacity: 0.5,
    },
    labelValue: {
        fontSize: 16,
        color: palette.black,
        fontWeight: "bold",
    },
    column: {
        marginTop: 28,
        rowGap: 16,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    actions: {
        paddingVertical: 20,
        paddingHorizontal: 24,
        rowGap: 8,
    },
    sheet: {
        backgroundColor: "white",
        // padding: 16,
        // height: 220,
        paddingBottom: 20,
        width: "100%",
        position: "absolute",
        bottom: -20 * 1.1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        zIndex: 1,
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: palette.backdrop,
        zIndex: 1,
    },
});
