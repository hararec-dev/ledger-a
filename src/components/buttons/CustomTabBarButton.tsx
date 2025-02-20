import { TouchableWithoutFeedback, View } from "react-native";
import type { PropsWithChildren } from "react";

export type CustomTabBarButtonProps = PropsWithChildren<{ onPress: () => void }>;

export const CustomTabBarButton = ({ children, onPress }: CustomTabBarButtonProps) => (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {children}
        </View>
    </TouchableWithoutFeedback>
);