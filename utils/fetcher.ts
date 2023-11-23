import axios from "axios";

export const getUrlHost = (enviroment?: string) => {
    if (!enviroment) {
        const err = new Error("Enviroment API_URL no setted");
        throw err;
    }
    return enviroment;
};

const client = axios.create({
    baseURL: getUrlHost(process.env.EXPO_PUBLIC_API_URL),
    headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        authorId: 10,
    },
});

export default client;
