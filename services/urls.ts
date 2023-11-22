const AllUrls = {
    PRODUCTS: {
        getAll: "/bp/products",
        create: "/bp/products",
        update: "/bp/products",
        delete: "/bp/products",
        verify: "/bp/products/verification",
    },
} as const;

export type AllUrls = keyof typeof AllUrls;

export default AllUrls;
