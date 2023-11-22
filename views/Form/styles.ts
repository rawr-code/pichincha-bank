import { StyleSheet } from "react-native";

// Theme
import palette from "../../theme/palette";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white,
    },
    content: {
        paddingVertical: 20,
        paddingHorizontal: 24,
    },
    form: {
        flex: 1,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 28,
    },
    body: {
        rowGap: 8,
    },
    actions: {
        rowGap: 8,
        borderTopWidth: 1,
        borderColor: palette.grey,
    },
});
