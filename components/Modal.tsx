import { FC } from "react";
import { View, Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Animated, {
    FadeIn,
    FadeOut,
    SlideInDown,
    SlideOutDown,
} from "react-native-reanimated";

// Theme
import palette from "../theme/palette";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface ModalProps {
    open: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ open, onToggle, children }) => {
    if (!open) return null;

    return (
        <>
            <AnimatedPressable
                style={styles.backdrop}
                onPress={onToggle}
                entering={FadeIn}
                exiting={FadeOut}
                testID="Backdrop"
            />
            <Animated.View
                style={styles.sheet}
                entering={SlideInDown.springify().damping(15)}
                exiting={SlideOutDown}
                testID="Sheet"
            >
                <View style={styles.actions}>
                    <Pressable onPress={onToggle} testID="Close-button">
                        <Ionicons
                            name="close-sharp"
                            size={28}
                            color={palette.grey}
                        />
                    </Pressable>
                </View>
                {children}
            </Animated.View>
        </>
    );
};

export default Modal;

const styles = StyleSheet.create({
    sheet: {
        backgroundColor: "white",
        paddingBottom: 20,
        width: "100%",
        position: "absolute",
        bottom: -20 * 1.1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        zIndex: 1,
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: palette.backdrop,
        zIndex: 1,
    },
    actions: {
        paddingVertical: 20,
        paddingHorizontal: 24,
        rowGap: 8,
        justifyContent: "center",
        alignItems: "flex-end",
        borderBottomWidth: 1,
        borderColor: palette.grey,
    },
});
