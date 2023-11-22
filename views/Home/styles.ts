import { StyleSheet } from "react-native";

// Theme
import palette from "../../theme/palette";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white,
    },
    list: { paddingHorizontal: 24, paddingBottom: 24 },
    header: {
        paddingVertical: 24,
        backgroundColor: palette.white,
        width: "100%",
    },
    card: {
        borderColor: palette.grey,
        paddingLeft: 16,
        paddingRight: 12,
        paddingVertical: 16,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderBottomWidth: 0,
    },
    cardTitle: {
        fontWeight: "bold",
        color: palette.black,
        fontSize: 16,
    },
    cardLabel: {
        fontWeight: "bold",
        color: palette.black,
        fontSize: 12,
        opacity: 0.5,
    },
    first: {
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    last: {
        borderBottomWidth: 1,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
    },
    actions: {
        borderTopWidth: 1,
        borderTopColor: palette.grey,
        paddingVertical: 20,
        paddingHorizontal: 24,
    },
});
