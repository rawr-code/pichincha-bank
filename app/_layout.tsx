import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Layout = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" options={{ title: "home" }} />
                <Stack.Screen name="form" options={{ title: "form" }} />
                <Stack.Screen name="[id]" options={{ title: "details" }} />
            </Stack>
        </QueryClientProvider>
    );
};

export default Layout;
