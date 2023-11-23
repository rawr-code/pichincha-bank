import { fireEvent, render } from "@testing-library/react-native";

import Button from "../../components/Button";

describe("<Button />", () => {
    it("call onPress function when the button is pressed", () => {
        const mockOnPress = jest.fn();

        const { getByTestId } = render(
            <Button onPress={mockOnPress} text="Text" />
        );
        const pressMeButton = getByTestId("Button-Text");
        fireEvent.press(pressMeButton);

        expect(mockOnPress).toHaveBeenCalled();
    });
});
