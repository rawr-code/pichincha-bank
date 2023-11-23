import { fireEvent, render, RenderResult } from "@testing-library/react-native";

// Mocks Data
import products from "../../mocks/products.json";

// Component
import Home from "../../views/Home/Home";

jest.mock("expo-router", () => ({
    useRouter() {
        return {
            push: jest.fn(),
        };
    },
}));

let component: RenderResult;

describe("<Home />", () => {
    beforeEach(() => {
        component = render(<Home data={products} />);
    });

    it("renders correctly", () => {
        expect(component).toBeDefined();

        const { getByTestId } = component;

        const container = getByTestId("Container");
        expect(container).toBeDefined();

        const list = getByTestId("List");
        expect(list).toBeDefined();

        const searchBar = getByTestId("Header");
        expect(searchBar).toBeDefined();

        const submitBtn = getByTestId("Submit");
        expect(submitBtn).toBeDefined();

        const addButton = getByTestId("Button-Agregar");
        expect(addButton).toBeDefined();
        expect(fireEvent.press(addButton));
    });

    it("check children", () => {
        expect(component).toBeDefined();

        const { getByTestId } = component;

        for (let i = 0; i < products.length; i += 1) {
            const cardBtn = getByTestId(products[i].id);
            expect(cardBtn).toBeDefined();
            expect(fireEvent.press(cardBtn));
        }
    });
});
