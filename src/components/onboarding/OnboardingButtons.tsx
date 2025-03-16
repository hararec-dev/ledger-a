import { Button } from "@rneui/base";
import { useOnboardingSlides, useThemeStore } from "../../hooks";
import { StyleSheet, View } from "react-native";
import type { OnboardingButtonsProps } from "../../types";
import { FAB } from "@rneui/themed";


export const OnboardingButtons: React.FC<OnboardingButtonsProps> = ({ currentIndex, onNext, onNavigate }) => {
    const { colors } = useThemeStore();
    const { slides } = useOnboardingSlides();

    return currentIndex === slides.length - 1
        ? (
            <Button
                title="Finalizar"
                onPress={() => onNavigate('OnboardingSetup')}
            />
        ) : (
            <View style={{
                flexDirection: 'row',
                backgroundColor: colors.coolGray[100],
                justifyContent: currentIndex === 0 ? 'flex-end' : 'space-between',
            }}>
                {currentIndex !== 0 && (
                    <Button
                        title="Anterior"
                        onPress={() => onNext(currentIndex - 1)}
                    />
                )}
                <FAB
                    icon={{ name: 'add', color: 'white' }}
                    color="green"
                />
                <Button
                    title="Siguiente"
                    onPress={() => onNext(currentIndex + 1)}
                />
            </View>
        );
};
