import { FC } from "react";
import { act, renderHook, waitFor } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Mocks Data
import products from "../../mocks/products.json";

// Hooks
import { useProducts } from "../../hooks";

const queryClient = new QueryClient();
const wrapper: FC<{ children: React.ReactNode }> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useProducts", () => {
    it("useGetProducts", async () => {
        const { result } = renderHook(useProducts.useGetProducts, {
            wrapper,
        });
        await waitFor(() => expect(result.current.isSuccess).toBe(true));
    });
    it("useGetPreviousProductById  ", async () => {
        const { result } = renderHook(
            () => useProducts.useGetPreviousProductById(products[0].id),
            {
                wrapper,
            }
        );
        await waitFor(() => expect(result.current).toBe(undefined));
    });
    it("useCreateProduct ", async () => {
        const { result } = renderHook(useProducts.useCreateProduct, {
            wrapper,
        });

        const product = products[0];

        act(() => {
            result.current.mutateAsync({ ...product });
        });

        await waitFor(() => expect(result.current.isSuccess).toBe(true));
    });
    it("useUpdateProduct ", async () => {
        const { result } = renderHook(useProducts.useUpdateProduct, {
            wrapper,
        });

        const product = products[0];

        act(() => {
            result.current.mutateAsync({ id: product.id, product });
        });

        await waitFor(() => expect(result.current.isSuccess).toBe(true));
    });
    it("useDeleteProductId ", async () => {
        const { result } = renderHook(useProducts.useDeleteProductId, {
            wrapper,
        });

        act(() => {
            result.current.mutateAsync(products[0].id);
        });

        await waitFor(() => expect(result.current.isSuccess).toBe(true));
    });
});
