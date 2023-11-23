import { FC } from "react";
import { Text, StyleSheet, Pressable } from "react-native";

// Theme
import palette, { Theme } from "../theme/palette";

interface ButtonProps {
    text: string;
    textColor?: Theme;
    bgColor?: Theme;
    onPress: () => void;
}

const Button: FC<ButtonProps> = ({
    text,
    textColor = "black",
    bgColor = "primary",
    onPress,
}) => {
    return (
        <Pressable
            style={[styles.container, { backgroundColor: palette[bgColor] }]}
            onPress={onPress}
            testID={`Button-${text}`}
        >
            <Text style={[styles.text, { color: palette[textColor] }]}>
                {text}
            </Text>
        </Pressable>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 6,
        paddingVertical: 16,
        paddingHorizontal: 20,
        backgroundColor: palette.primary,
    },
    text: {
        textAlign: "center",
        color: palette.black,
        fontWeight: "bold",
    },
});
