import { View, Text, StyleSheet } from "react-native";

const Loading = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Procesando</Text>
            <Text style={styles.label}>Espere por favor</Text>
        </View>
    );
};

export default Loading;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    title: { fontSize: 22, fontWeight: "bold" },
    label: { fontSize: 16, opacity: 0.5 },
});
