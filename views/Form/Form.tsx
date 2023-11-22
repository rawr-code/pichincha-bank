import { View, ScrollView, Text } from "react-native";
// import { useRouter } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";

// Theme
// import palette from "../../theme/palette";

// Styles
import styles from "./styles";

// Components
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import Input from "../../components/Input";

const FormSchema = Yup.object().shape({
    id: Yup.string()
        .min(3, "Requiere minimo 3 caracteres")
        .required("Este campo es requerido"),
    name: Yup.string()
        .min(5, "Requiere minimo 5 caracteres")
        .required("Este campo es requerido"),
    description: Yup.string()
        .min(5, "Requiere minimo 5 caracteres")
        .required("Este campo es requerido"),
    logo: Yup.string()
        .min(5, "Requiere minimo 5 caracteres")
        .required("Este campo es requerido"),
    date1: Yup.string().required("Este campo es requerido"),
    date2: Yup.string().required("Este campo es requerido"),
});

const Form = () => {
    // const router = useRouter();

    return (
        <Layout>
            <Formik
                initialValues={{
                    id: "",
                    name: "",
                    description: "",
                    logo: "",
                    date1: "",
                    date2: "22/02/2024",
                }}
                validationSchema={FormSchema}
                onSubmit={(values) => console.log(values)}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    resetForm,
                    values,
                    errors,
                }) => (
                    <View style={styles.container}>
                        <ScrollView
                            style={styles.form}
                            contentContainerStyle={styles.content}
                        >
                            <Text style={styles.title}>
                                Formulario de Registro
                            </Text>
                            <View style={styles.body}>
                                <Input
                                    label="ID"
                                    onChange={handleChange("id")}
                                    onBlur={handleBlur("id")}
                                    value={values.id}
                                    error={errors.id}
                                />
                                <Input
                                    label="Nombre"
                                    onChange={handleChange("name")}
                                    onBlur={handleBlur("name")}
                                    value={values.name}
                                    error={errors.name}
                                />
                                <Input
                                    label="Descripcion"
                                    onChange={handleChange("description")}
                                    onBlur={handleBlur("description")}
                                    value={values.description}
                                    error={errors.description}
                                />
                                <Input
                                    label="Logo"
                                    onChange={handleChange("logo")}
                                    onBlur={handleBlur("logo")}
                                    value={values.logo}
                                    error={errors.logo}
                                />
                                <Input
                                    label="Fecha liberacion"
                                    onChange={handleChange("date1")}
                                    onBlur={handleBlur("date1")}
                                    value={values.date1}
                                    error={errors.date1}
                                />
                                <Input
                                    label="Fecha Revision"
                                    onChange={handleChange("date2")}
                                    onBlur={handleBlur("date2")}
                                    value={values.date2}
                                    error={errors.date2}
                                    disabled
                                />
                            </View>
                        </ScrollView>
                        <View style={[styles.content, styles.actions]}>
                            <Button text="Enviar" onPress={handleSubmit} />
                            <Button
                                text="Reiniciar"
                                bgColor="grey"
                                onPress={resetForm}
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </Layout>
    );
};

export default Form;
