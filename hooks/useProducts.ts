import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Models
import { productModels } from "../models";

// Services
import { productsService } from "../services";

const KEY = "PRODUCTS";

export const useGetProducts = () =>
    useQuery({
        queryKey: [KEY],
        queryFn: productsService.getProducts(),
        refetchInterval: 5000,
        refetchIntervalInBackground: true,
    });

export const useGetPreviousProductById = (id: string) => {
    const queryClient = useQueryClient();
    const qData = queryClient.getQueryData<productModels.Product[]>([KEY]);

    return qData?.find((p) => p.id === id);
};

export const useCreateProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (product: productModels.Product) => {
            return productsService.createProduct(product);
        },
        onSuccess: (product) => {
            const prevData =
                queryClient.getQueryData<productModels.Product[]>([KEY]) || [];

            queryClient.setQueryData([KEY], [...prevData, product]);
        },
    });
};

export const useUpdateProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
            id,
            product,
        }: {
            id: string;
            product: productModels.Product;
        }) => {
            return productsService.updateProductId(id, product);
        },
        onSuccess: (product) => {
            const prevData = queryClient.getQueryData<productModels.Product[]>([
                KEY,
            ]);

            const updateData = prevData?.map((p) => {
                if (p.id === product.id) {
                    return product;
                }
                return p;
            });

            queryClient.setQueryData([KEY], updateData);
        },
    });
};

export const useDeleteProductId = () =>
    useMutation({
        mutationFn: (id: string) => {
            return productsService.deleteProductId(id);
        },
    });
