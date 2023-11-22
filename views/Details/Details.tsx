import { FC, useState } from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";

// Styles
import styles from "./styles";

// Components
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import Modal from "../../components/Modal";

interface DetailsProps {
    id?: string;
}

const Details: FC<DetailsProps> = ({ id }) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSheet = () => {
        // setIsOpen(!isOpen);
        setIsOpen(false);
    };

    return (
        <>
            <Layout>
                <View style={styles.container}>
                    <View style={styles.body}>
                        <Text style={styles.title}>ID: {id}</Text>
                        <Text style={styles.label}>Información extra</Text>

                        <View style={styles.column}>
                            <View style={styles.row}>
                                <Text style={styles.label}>Nombre</Text>
                                <Text style={styles.labelValue}>
                                    Emmanuel Villegas
                                </Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Descripción</Text>
                                <Text style={styles.labelValue}>Visa</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Logo</Text>
                                <View style={{ padding: 0, width: "80%" }}>
                                    <View
                                        style={{
                                            width: "100%",
                                            height: 200,
                                            backgroundColor: "black",
                                        }}
                                    ></View>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>
                                    Fecha liberación
                                </Text>
                                <Text style={styles.labelValue}>
                                    12-08-1997
                                </Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Fecha revisión</Text>
                                <Text style={styles.labelValue}>
                                    12-08-2023
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.actions}>
                        <Button
                            text="Editar"
                            bgColor="grey"
                            onPress={() => {
                                router.push({
                                    pathname: "/form]",
                                    params: { id: "bacon" },
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
                        onPress={() => {
                            router.push({
                                pathname: "/blog/[id]",
                                params: { id: "bacon" },
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
