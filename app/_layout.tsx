import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{ title: "home" }} />
            <Stack.Screen name="form" options={{ title: "form" }} />
        </Stack>
    );
};

export default Layout;
