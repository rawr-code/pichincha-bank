import { render, RenderResult } from "@testing-library/react-native";

// Mocks Data
import products from "../../mocks/products.json";

// Hooks
import { useGetProducts } from "../../hooks/useProducts";

// Component
import Index from "../../app/index";

// Mocks
jest.mock("../../hooks/useProducts", () => ({
    useGetProducts: jest.fn(),
}));

const mockUseGetProducts = useGetProducts as jest.Mock;

let component: RenderResult;

describe("<Index />", () => {
    beforeEach(() => {
        mockUseGetProducts.mockImplementation(() => ({
            data: products,
        }));
        component = render(<Index />);
    });

    it("renders correctly", () => {
        expect(component).toBeDefined();
        const { getByTestId } = component;

        const searchBar = getByTestId("Header");
        expect(searchBar).toBeDefined();

        const submitBtn = getByTestId("Submit");

        expect(submitBtn).toBeDefined();
    });

    it("check children", () => {
        expect(component).toBeDefined();

        const { getByTestId } = component;

        for (let i = 0; i < products.length; i += 1) {
            expect(getByTestId(products[i].id)).toBeDefined();
        }
    });

    it("check is empty", () => {
        mockUseGetProducts.mockImplementation(() => ({
            data: [],
        }));

        const { getByTestId } = render(<Index />);
        const empty = getByTestId("Empty-State");

        expect(empty).toBeDefined();
    });
});
