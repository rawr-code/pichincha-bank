import { View, Text, FlatList, Pressable } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

// Theme
import palette from "../../theme/palette";

// Styles
import styles from "./styles";

// Components
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import Input from "../../components/Input";

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d721",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d722",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d732",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d742",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d752",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d7522",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e229d752",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e2129d752",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd296-145571e29d752",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd196-145571e29d752",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd963-145571e29d752",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-b1d96-145571e29d752",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-1451571e29d752",
        title: "Third Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e129d752",
        title: "Third Item",
    },
];

const Home = () => {
    const router = useRouter();

    return (
        <Layout>
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({ item, index }) => (
                        <Pressable
                            style={[
                                styles.card,
                                index === 0 && styles.first,
                                index === DATA.length - 1 && styles.last,
                            ]}
                            onPress={() => {
                                router.push({
                                    pathname: "/[id]",
                                    params: { id: item.id },
                                });
                            }}
                        >
                            <View style={{ flex: 1 }}>
                                <Text style={styles.cardTitle}>Name</Text>
                                <Text style={styles.cardLabel}>
                                    ID: {item.title}
                                </Text>
                            </View>
                            <Ionicons
                                name="chevron-forward"
                                size={20}
                                color={palette.grey}
                            />
                        </Pressable>
                    )}
                    keyExtractor={(item) => item.id}
                    stickyHeaderIndices={[0]}
                    contentContainerStyle={styles.list}
                    ListHeaderComponent={
                        <View style={styles.header}>
                            <Input placeholder="Search..." />
                        </View>
                    }
                />
                <View style={styles.actions}>
                    <Button
                        text="Agregar"
                        onPress={() => {
                            router.push({
                                pathname: "/form",
                                params: { id: "bacon" },
                            });
                        }}
                    />
                </View>
            </View>
        </Layout>
    );
};

export default Home;
