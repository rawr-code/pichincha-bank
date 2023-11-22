import { FC } from "react";
import { View, ScrollView, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { addDays, addYears, parse } from "date-fns";

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

interface FormProps {
    product?: productModels.Product;
    onSubmit: (product: productModels.Product) => void;
}

const Form: FC<FormProps> = ({ product, onSubmit }) => {
    const FormSchema = Yup.object().shape({
        id: Yup.string()
            .min(3, "Requiere minimo 3 caracteres")
            .required("Este campo es requerido"),
        name: Yup.string()
            .min(2, "Requiere minimo 2 caracteres")
            .required("Este campo es requerido"),
        description: Yup.string()
            .min(5, "Requiere minimo 5 caracteres")
            .required("Este campo es requerido"),
        logo: Yup.string()
            .min(5, "Requiere minimo 5 caracteres")
            .required("Este campo es requerido"),
        date_release: Yup.date()
            .transform(function (value, originalValue) {
                if (this.isType(value)) {
                    return value;
                }
                const result = parse(
                    originalValue,
                    "yyyy.MM.dd",
                    product ? new Date(product?.date_release) : new Date()
                );
                return result;
            })
            .typeError("Introduzca una fecha valida")
            .required("Este campo es requerido")
            .min(
                formatDate(
                    product ? new Date(product?.date_release) : new Date()
                ),
                "Debe ser una fecha mayor o igual a la de hoy"
            ),
        date_revision: Yup.date()
            .transform(function (value, originalValue) {
                if (this.isType(value)) {
                    return value;
                }
                const result = parse(
                    originalValue,
                    "yyyy.MM.dd",
                    product ? new Date(product?.date_revision) : new Date()
                );
                return result;
            })
            .typeError("Introduzca una fecha valida")
            .required("Este campo es requerido")
            .min(
                formatDate(
                    product ? new Date(product?.date_revision) : new Date()
                ),
                "Debe ser un año mayor a la fecha de revision"
            ),
    });

    return (
        <Layout>
            <Formik
                validateOnChange={false}
                validateOnBlur={false}
                initialValues={{
                    id: product?.id || "",
                    name: product?.name || "",
                    description: product?.description || "",
                    logo: product?.logo || "",
                    date_release: formatDate(product?.date_release),
                    date_revision: formatDate(product?.date_revision),
                }}
                validationSchema={FormSchema}
                onSubmit={(values) => onSubmit(values)}
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
