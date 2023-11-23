import { FC, useMemo } from "react";
import { View, ScrollView, Text } from "react-native";
import { Formik } from "formik";
import { addDays, addYears } from "date-fns";

// Styles
import styles from "./styles";

// Components
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import Input from "../../components/Input";

// Models
import { productModels } from "../../models";

// Utils
import { formatDate } from "../../utils";

// Schema
import validationSchema from "./validationSchema";

interface FormProps {
    product?: productModels.Product;
    onSubmit: (product: productModels.Product) => void;
}

const Form: FC<FormProps> = ({ product, onSubmit }) => {
    const handleSubmit = (values: productModels.Product) => {
        onSubmit(values);
    };

    const initialState = useMemo(() => {
        return {
            id: product?.id || "",
            name: product?.name || "",
            description: product?.description || "",
            logo: product?.logo || "",
            date_release: formatDate(product?.date_release),
            date_revision: formatDate(product?.date_revision),
        };
    }, [product]);

    const formSchema = useMemo(() => {
        return validationSchema(product);
    }, [product]);

    return (
        <Layout>
            <Formik
                validateOnChange={false}
                validateOnBlur={false}
                initialValues={initialState}
                validationSchema={formSchema}
                onSubmit={handleSubmit}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    resetForm,
                    values,
                    errors,
                    isSubmitting,
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
                                    disabled={!!product?.id}
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
                                    onChange={handleChange("date_release")}
                                    onBlur={handleBlur("date_release")}
                                    value={values.date_release}
                                    error={errors.date_release}
                                    placeholder={formatDate(new Date())}
                                />
                                <Input
                                    label="Fecha Revision"
                                    onChange={handleChange("date_revision")}
                                    onBlur={handleBlur("date_revision")}
                                    value={values.date_revision}
                                    error={errors.date_revision}
                                    placeholder={formatDate(
                                        addDays(addYears(new Date(), 1), 1)
                                    )}
                                />
                            </View>
                        </ScrollView>
                        <View style={[styles.content, styles.actions]}>
                            <Button
                                text="Enviar"
                                onPress={handleSubmit}
                                disabled={isSubmitting}
                            />
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
