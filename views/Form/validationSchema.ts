import * as Yup from "yup";
import { parse } from "date-fns";

//Models
import { productModels } from "../../models";

// Services
import { productsService } from "../../services";

// Utils
import { formatDate } from "../../utils";

const validationSchema = (product?: productModels.Product) =>
    Yup.object().shape({
        // TODO validacion asincrona con endpoint de verificacion
        id: Yup.string()
            .min(3, "Requiere minimo 3 caracteres")
            .max(10, "Debe ser maximo 10 caracteres")
            .required("Este campo es requerido")
            .test("validar id", "Este id ya esta en uso", async (id) => {
                const res = await productsService.verifyProductId(id);
                return !res;
            }),
        name: Yup.string()
            .min(5, "Requiere minimo 5 caracteres")
            .max(100, "Debe ser maximo 100 caracteres")
            .required("Este campo es requerido"),
        description: Yup.string()
            .min(10, "Requiere minimo 10 caracteres")
            .max(200, "Debe ser maximo 200 caracteres")
            .required("Este campo es requerido"),
        logo: Yup.string().required("Este campo es requerido"),
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
                "Debe ser una fecha mayor o igual a la actual"
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
                "Debe ser un año mayor a la fecha de liberacion"
            ),
    });

export default validationSchema;
