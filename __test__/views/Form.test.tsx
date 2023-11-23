import { render } from "@testing-library/react-native";

// Component
import Form from "../../views/Form";

describe("<Form />", () => {
    it("renders correctly", async () => {
        const handleSubmit = jest.fn();
        const component = render(<Form onSubmit={handleSubmit} />);
        expect(component).toBeDefined();

        const { getByTestId } = component;

        const submitButton = getByTestId("Button-Enviar");

        expect(submitButton).toBeDefined();
    });
});
