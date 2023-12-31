import { Text, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

// Views
import Details from "../views/Details";

// Hooks
import { useProducts } from "../hooks";

// Components
import Button from "../components/Button";

export default function Page() {
    const { id = "" } = useLocalSearchParams<{ id: string }>();

    const data = useProducts.useGetPreviousProductById(id);
    const router = useRouter();

    if (!id.length || !data) {
        return (
            <View
                style={{
                    flex: 1,
                    padding: 28,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    rowGap: 16,
                }}
            >
                <Text
                    style={{
                        fontSize: 28,
                        fontWeight: "bold",
                    }}
                >
                    ID no encontrado
                </Text>
                <Button
                    text="Volver"
                    onPress={() => {
                        router.replace("/");
                    }}
                />
            </View>
        );
    }

    return <Details product={data} />;
}
