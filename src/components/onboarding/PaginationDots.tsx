import { View } from "react-native";
import { useThemeStore } from "../../hooks";
import type { PaginationDotsProps } from "../../types";

export const PaginationDots: React.FC<PaginationDotsProps> = ({ currentIndex, numberOfIndexes }) => {
    const { colors } = useThemeStore();

    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
        }}>
            {new Array(numberOfIndexes).fill(undefined).map((_, index) => (
                <View
                    key={index}
                    style={{
                        height: 5,
                        borderRadius: 10,
                        marginHorizontal: 2,
                        backgroundColor: currentIndex === index
                            ? colors.fuchsia[600]
                            : colors.fuchsia[900],
                        width: currentIndex === index ? 25 : 5
                    }}
                />
            ))}
        </View>
    );
};
