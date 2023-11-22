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
        refetchInterval: 1000,
        refetchIntervalInBackground: true,
        refetchOnMount: true,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true,
    });

export const useGetPreviousProductById = (id: string) => {
    const queryClient = useQueryClient();
    const qData = queryClient.getQueryData<productModels.Product[]>([KEY]);

    return qData?.find((p) => p.id === id);
};

export const useVerifyProductId = (id: string) =>
    useQuery({
        queryKey: [KEY, id],
        queryFn: productsService.verifyProductId(id),
    });

export const useCreateProduct = () =>
    useMutation({
        mutationFn: (product: productModels.Product) => {
            return productsService.createProduct(product);
        },
    });

export const useUpdateProduct = () =>
    useMutation({
        mutationFn: ({
            id,
            product,
        }: {
            id: string;
            product: productModels.Product;
        }) => {
            return productsService.updateProductId(id, product);
        },
    });

export const useDeleteProductId = () =>
    useMutation({
        mutationFn: (id: string) => {
            return productsService.deleteProductId(id);
        },
    });
