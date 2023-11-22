import { useLocalSearchParams } from "expo-router";

// Views
import Details from "../views/Details";

export default function Page() {
    const { id } = useLocalSearchParams<{ id: string }>();

    return <Details id={id} />;
}
