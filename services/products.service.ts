import urls from "./urls";

// Utils
import { fetcher } from "../utils";

// Models
import { productModels } from "../models";

export const getProducts = () => async () => {
    const { data } = await fetcher.get<productModels.Product[]>(
        urls.PRODUCTS.getAll
    );

    return data;
};

export const verifyProductId = async (id: string) => {
    const { data } = await fetcher.get<boolean>(urls.PRODUCTS.verify, {
        params: {
            id,
        },
    });

    return data;
};

export const createProduct = async (product: productModels.Product) => {
    const { data } = await fetcher.post<productModels.Product>(
        urls.PRODUCTS.create,
        product
    );

    return data;
};

export const updateProductId = async (
    id: string,
    product: productModels.Product
) => {
    const { data } = await fetcher.put<productModels.Product>(
        urls.PRODUCTS.delete,
        product,
        {
            params: {
                id,
            },
        }
    );

    return data;
};

export const deleteProductId = async (id: string) => {
    const { data } = await fetcher.delete<string>(urls.PRODUCTS.delete, {
        params: {
            id,
        },
    });

    return data;
};
