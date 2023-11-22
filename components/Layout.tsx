import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

// Theme
import palette from "../theme/palette";
import { FC } from "react";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Ionicons name="card" size={24} color={palette.primary} />
                    <Text style={styles.title}>Banco Pichincha</Text>
                </View>
                <View style={styles.container}>{children}</View>
            </View>
        </SafeAreaView>
    );
};

export default Layout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white,
    },
    header: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: palette.grey,
    },
    title: {
        marginLeft: 4,
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: palette.secondary,
    },
});
