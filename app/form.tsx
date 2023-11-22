import { useLocalSearchParams, useRouter } from "expo-router";

// Views
import Form from "../views/Form";

// Hooks
import { useProducts } from "../hooks";

export default function Page() {
    const { id = "" } = useLocalSearchParams<{ id: string }>();
    const data = useProducts.useGetPreviousProductById(id);

    const { mutateAsync: createProduct } = useProducts.useCreateProduct();
    const { mutateAsync: updateProduct } = useProducts.useUpdateProduct();

    const router = useRouter();

    return (
        <Form
            product={data}
            onSubmit={async (product) => {
                if (!id.length) {
                    await createProduct(product);
                } else {
                    await updateProduct({ id, product });
                }

                router.replace("/");
            }}
        />
    );
}
