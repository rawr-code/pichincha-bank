import { FC, useMemo } from "react";
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

// Models
import { productModels } from "../../models";

interface HomeProps {
    data: productModels.Product[];
    isLoading: boolean;
}

const Home: FC<HomeProps> = ({ data, isLoading }) => {
    const router = useRouter();

    const listData = useMemo(() => {
        const skeleton = {
            id: "",
            name: "",
            description: "",
            logo: "",
            date_release: "",
            date_revision: "",
        };
        const skeletonData: productModels.Product[] = Array(10).fill(skeleton);

        return isLoading ? skeletonData : data;
    }, [data, isLoading]);

    return (
        <Layout>
            <View style={styles.container} testID="Container">
                <FlatList
                    testID="List"
                    data={listData}
                    renderItem={({ item, index }) => (
                        <Pressable
                            style={[
                                styles.card,
                                index === 0 && styles.first,
                                (listData.length == 0 ||
                                    index === listData.length - 1) &&
                                    styles.last,
                            ]}
                            onPress={() => {
                                router.push({
                                    pathname: "/[id]",
                                    params: { id: item.id },
                                });
                            }}
                            testID={item.id}
                            disabled={!item.id.length}
                        >
                            <View style={{ flex: 1, rowGap: 8 }}>
                                {item.name.length ? (
                                    <Text style={styles.cardTitle}>
                                        {item.name}
                                    </Text>
                                ) : (
                                    <View
                                        style={{
                                            height: 16,
                                            width: "60%",
                                            backgroundColor: "grey",
                                            borderRadius: 4,
                                            opacity: 0.5,
                                        }}
                                    />
                                )}
                                {item.id.length ? (
                                    <Text style={styles.cardLabel}>
                                        ID: {item.id}
                                    </Text>
                                ) : (
                                    <View
                                        style={{
                                            height: 12,
                                            width: "40%",
                                            backgroundColor: "grey",
                                            borderRadius: 4,
                                            opacity: 0.5,
                                        }}
                                    />
                                )}
                            </View>
                            <Ionicons
                                name="chevron-forward"
                                size={20}
                                color={palette.grey}
                            />
                        </Pressable>
                    )}
                    keyExtractor={(item, index) => item.id || `id-${index}`}
                    stickyHeaderIndices={[0]}
                    contentContainerStyle={styles.list}
                    ListHeaderComponent={
                        <View style={styles.header} testID="Header">
                            <Input placeholder="Search..." />
                        </View>
                    }
                    ListEmptyComponent={
                        <View testID="Empty-State">
                            <Text>No hay elementos para mostrar</Text>
                        </View>
                    }
                />
                <View style={styles.actions} testID="Submit">
                    <Button
                        text="Agregar"
                        onPress={() => router.push("/form")}
                    />
                </View>
            </View>
        </Layout>
    );
};

export default Home;
