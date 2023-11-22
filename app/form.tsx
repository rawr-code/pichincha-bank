import { useLocalSearchParams } from "expo-router";

// Views
import Form from "../views/Form";

export default function Page() {
    const { id } = useLocalSearchParams<{ id: string }>();

    return <Form />;
}
