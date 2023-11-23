// Views
import Home from "../views/Home";

// Hooks
import { useProducts } from "../hooks";

export default function Index() {
    const { data = [], isLoading } = useProducts.useGetProducts();

    return <Home data={data} isLoading={isLoading} />;
}
