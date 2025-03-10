import { View, Text, Button, ScrollView, Dimensions } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../types';
import { useThemeStore } from '../../hooks';

type OnboardingCarouselNavigationProp = StackNavigationProp<
    RootStackParamList,
    'OnboardingCarousel'
>;

type Props = {
    navigation: OnboardingCarouselNavigationProp;
};

const { width } = Dimensions.get('window');

export const OnboardingCarouselScreen = ({ navigation }: Props) => {
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
