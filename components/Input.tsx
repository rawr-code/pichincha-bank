import { FC } from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";

// Theme
import palette from "../theme/palette";

interface InputProps {
    label?: string;
    error?: string;
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    onChange?: (text: string) => void;
    onBlur?: (e: unknown) => void;
}

const Input: FC<InputProps> = ({
    label,
    error,
    placeholder,
    value,
    disabled,
    onChange,
    onBlur,
}) => {
    return (
        <View style={styles.container}>
            {label ? <Text style={styles.labe}>{label}</Text> : null}
            <View
                style={[
                    styles.inputWrapper,
                    disabled && styles.disabledInputWrapper,
                    !!error?.length && styles.errorWrapper,
                ]}
            >
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    cursorColor={palette.black}
                    value={value}
                    autoFocus={false}
                    editable={!disabled}
                    onChangeText={onChange}
                    onBlur={onBlur}
                />
            </View>
            {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        rowGap: 8,
    },
    labe: {
        fontWeight: "bold",
        color: palette.black,
    },
    inputWrapper: {
        borderColor: palette.grey,
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 8,
        width: "100%",
    },
    input: {
        height: 40,
        color: palette.black,
    },
    disabledInputWrapper: {
        backgroundColor: palette.backdrop,
        opacity: 0.5,
    },
    errorWrapper: {
        borderColor: palette.red,
    },
    errorInput: {
        color: palette.red,
    },
    error: {
        fontWeight: "bold",
        color: palette.red,
    },
});
