import { FC, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";

// Styles
import styles from "./styles";

// Components
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import Modal from "../../components/Modal";

// Models
import { productModels } from "../../models";

// Utils
import { formatDate } from "../../utils";
import { useProducts } from "../../hooks";

interface DetailsProps {
    product: productModels.Product;
}

const Details: FC<DetailsProps> = ({ product }) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const { mutateAsync } = useProducts.useDeleteProductId();

    const toggleSheet = () => {
        // setIsOpen(!isOpen);
        setIsOpen(false);
    };

    return (
        <>
            <Layout>
                <View style={styles.container}>
                    <ScrollView style={styles.body}>
                        <Text style={styles.title}>ID: {product.id}</Text>
                        <Text style={styles.label}>Información extra</Text>

                        <View style={styles.column}>
                            <View style={styles.row}>
                                <Text style={styles.label}>Nombre</Text>
                                <Text style={styles.labelValue}>
                                    {product.name}
                                </Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Descripción</Text>
                                <Text style={styles.labelValue}>
                                    {product.description}
                                </Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Logo</Text>
                                <View style={{ padding: 0, width: "100%" }}>
                                    <Image
                                        style={{
                                            width: "60%",
                                            height: 200,
                                        }}
                                        source={{
                                            uri: product.logo,
                                        }}
                                        resizeMode="contain"
                                    />
                                </View>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>
                                    Fecha liberación
                                </Text>
                                <Text style={styles.labelValue}>
                                    {formatDate(product.date_release)}
                                </Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Fecha revisión</Text>
                                <Text style={styles.labelValue}>
                                    {formatDate(product.date_revision)}
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={styles.actions}>
                        <Button
                            text="Editar"
                            bgColor="grey"
                            onPress={() => {
                                router.replace({
                                    pathname: "/form",
                                    params: { id: product.id },
                                });
                            }}
                        />
                        <Button
                            text="Eliminar"
                            textColor="white"
                            bgColor="red"
                            onPress={() => {
                                setIsOpen(true);
                            }}
                        />
                    </View>
                </View>
            </Layout>

            <Modal open={isOpen} onToggle={toggleSheet}>
                <View style={[styles.actions, { paddingVertical: 28 }]}>
                    <Text style={{ textAlign: "center", fontSize: 16 }}>
                        ¿Estas seguro de que desea eliminar el producto{" "}
                        <Text
                            style={{
                                fontWeight: "bold",
                            }}
                        >
                            VISA MAESTRO
                        </Text>
                        ?
                    </Text>
                </View>
                <View style={styles.actions}>
                    <Button
                        text="Confirmar"
                        onPress={async () => {
                            await mutateAsync(product.id);
                            router.replace({
                                pathname: "/",
                            });
                        }}
                    />
                    <Button
                        text="Cancelar"
                        bgColor="grey"
                        onPress={toggleSheet}
                    />
                </View>
            </Modal>
        </>
    );
};

export default Details;
