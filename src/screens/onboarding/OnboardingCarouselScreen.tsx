import { View, Text, Button, ScrollView, Dimensions } from 'react-native';
import { useThemeStore } from '../../hooks';
import type { OnboardingCarouselProps } from '../../types';


const { width } = Dimensions.get('window');

export const OnboardingCarouselScreen = ({ navigation }: OnboardingCarouselProps) => {
    const { colors } = useThemeStore();
    const slides = [
        'Bienvenido a FinanApp',
        'Lleva el control de tus finanzas',
        'Organiza tus cuentas',
        'Visualiza tus reportes'
    ];

    return (
        <ScrollView horizontal pagingEnabled>
            {slides.map((slide, index) => (
                <View
                    key={index}
                    style={{
                        width,
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 20,
                        backgroundColor: colors.pink[300],
                    }}
                >
                    <Text style={{ fontSize: 24, color: colors.coolGray[100] }}>{slide}</Text>
                    {index === slides.length - 1 && (
                        <Button
                            title="Continuar"
                            onPress={() => navigation.navigate('OnboardingSetup')}
                        />
                    )}
                </View>
            ))}
        </ScrollView>
    );
};
