import { render, RenderResult } from "@testing-library/react-native";

import Input from "../../components/Input";

let component: RenderResult;

describe("<Input />", () => {
    const label = "Label";
    const erroMsg = "error";
    const value = "visa";

    beforeEach(() => {
        component = render(
            <Input label={label} error={erroMsg} value={value} />
        );
    });

    it("renders correctly", () => {
        const { getByTestId } = component;
        const inputLabel = getByTestId("Label-input");
        expect(inputLabel.props.children).toEqual(label);
    });

    it("renders error correctly", () => {
        const { getByTestId } = component;
        const errorLabel = getByTestId("Error-input");
        expect(errorLabel.props.children).toEqual(erroMsg);
    });

    it("check input value", () => {
        const { getByTestId } = component;
        const input = getByTestId("Input-input");
        expect(input.props.value).toBe(value);
    });

    it("check is disabled", () => {
        const { getByTestId } = render(<Input disabled />);

        const input = getByTestId("Input-input");
        expect(input.props.editable).toBe(false);
    });
});
