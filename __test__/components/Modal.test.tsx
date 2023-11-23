import { Text } from "react-native";
import { fireEvent, render } from "@testing-library/react-native";

import Modal from "../../components/Modal";

let mockOnPress = () => null;

describe("<Modal />", () => {
    beforeEach(() => {
        mockOnPress = jest.fn();
    });

    it("renders correctly", () => {
        const { getByTestId } = render(
            <Modal open onToggle={mockOnPress}>
                <Text>content</Text>
            </Modal>
        );
        const backdrop = getByTestId("Backdrop");
        const sheet = getByTestId("Sheet");

        expect(backdrop).toBeDefined();
        expect(sheet).toBeDefined();
    });

    it("call onPress function when the close button is pressed", () => {
        const { getByTestId } = render(
            <Modal open onToggle={mockOnPress}>
                <Text>content</Text>
            </Modal>
        );
        const backdrop = getByTestId("Backdrop");
        expect(backdrop).toBeDefined();

        const closeButton = getByTestId("Close-button");
        fireEvent.press(closeButton);

        expect(mockOnPress).toHaveBeenCalled();
    });

    it("renders is closed", () => {
        const el = render(
            <Modal open={false} onToggle={mockOnPress}>
                <Text>content</Text>
            </Modal>
        );

        expect(el.toJSON()).toBeNull();
    });
});
