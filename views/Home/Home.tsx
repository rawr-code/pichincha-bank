import { FC } from "react";
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
}

const Home: FC<HomeProps> = ({ data }) => {
    const router = useRouter();

    return (
        <Layout>
            <View style={styles.container} testID="Container">
                <FlatList
                    testID="List"
                    data={data}
                    renderItem={({ item, index }) => (
                        <Pressable
                            style={[
                                styles.card,
                                index === 0 && styles.first,
                                index === data.length - 1 && styles.last,
                            ]}
                            onPress={() => {
                                router.push({
                                    pathname: "/[id]",
                                    params: { id: item.id },
                                });
                            }}
                            testID={item.id}
                        >
                            <View style={{ flex: 1 }}>
                                <Text style={styles.cardTitle}>
                                    {item.name}
                                </Text>
                                <Text style={styles.cardLabel}>
                                    ID: {item.id}
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
                        onPress={() => {
                            router.push({
                                pathname: "/form",
                            });
                        }}
                    />
                </View>
            </View>
        </Layout>
    );
};

export default Home;
