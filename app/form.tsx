import { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

// Views
import Form from "../views/Form";

// Components
import Loading from "../components/Loading";

// Hooks
import { useProducts } from "../hooks";

export default function Page() {
    const { id = "" } = useLocalSearchParams<{ id: string }>();
    const data = useProducts.useGetPreviousProductById(id);
    const [isLoading, setIsLoading] = useState(false);

    const { mutateAsync: createProduct } = useProducts.useCreateProduct();
    const { mutateAsync: updateProduct } = useProducts.useUpdateProduct();

    const router = useRouter();

    return (
        <>
            <Form
                product={data}
                onSubmit={async (product) => {
                    setIsLoading(true);
                    if (!id.length) {
                        await createProduct(product);
                        setIsLoading(false);
                        router.replace("/");
                    } else {
                        await updateProduct({ id, product });
                        setIsLoading(false);
                        router.push({
                            pathname: "/[id]",
                            params: { id },
                        });
                    }
                }}
            />
            {isLoading ? <Loading /> : null}
        </>
    );
}
