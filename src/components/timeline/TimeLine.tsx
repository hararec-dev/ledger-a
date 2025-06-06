import { View, Text, FlatList } from 'react-native';
import { useStyles } from '@hooks';
import type { TimelineItem, TimelineProps } from '@types';


export const Timeline: React.FC<TimelineProps> = ({
    data,
    lineColor,
    dotSize = 16,
    dotColor,
    titleStyle,
    descriptionStyle,
    timeStyle,
    dateStyle,
    containerStyle,
    itemContainerStyle,
    showScrollIndicator = false,
}) => {
    const styles = useStyles(({ colors }) => ({
        container: {
            flex: 1,
        },
        itemContainer: {
            flexDirection: 'row',
            marginBottom: 20,
        },
        timeContainer: {
            width: 80,
            alignItems: 'flex-end',
            paddingRight: 15,
            marginTop: 2,
        },
        time: {
            fontSize: 12,
            color: colors.coolGray[500],
        },
        date: {
            fontSize: 10,
            color: colors.coolGray[400],
        },
        lineContainer: {
            alignItems: 'center',
            width: 20,
        },
        dot: {
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: colors.fuchsia[600],
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
        },
        line: {
            width: 2,
            flex: 1,
            backgroundColor: colors.coolGray[400],
            position: 'absolute',
            top: 16,
            bottom: -20,
        },
        contentContainer: {
            flex: 1,
            paddingLeft: 15,
            paddingRight: 10,
        },
        title: {
            fontSize: 16,
            fontWeight: 'bold',
            color: colors.warmGray[900],
            marginBottom: 5,
        },
        description: {
            fontSize: 14,
            color: colors.coolGray[600],
        },
    }));

    const renderItem = ({ item, index }: { item: TimelineItem; index: number }) => (
        <View style={[styles.itemContainer, itemContainerStyle]}>
            <View style={styles.timeContainer}>
                {item.time && (
                    <Text style={[styles.time, timeStyle]}>{item.time}</Text>
                )}
                {item.date && (
                    <Text style={[styles.date, dateStyle]}>{item.date}</Text>
                )}
            </View>

            <View style={styles.lineContainer}>
                <View
                    style={[
                        styles.dot,
                        {
                            width: dotSize,
                            height: dotSize,
                            borderRadius: dotSize / 2,
                            backgroundColor: item.dotColor || dotColor || styles.dot.backgroundColor,
                        },
                    ]}
                >
                    {item.icon}
                </View>

                {index !== data.length - 1 && (
                    <View
                        style={[
                            styles.line,
                            { backgroundColor: lineColor || styles.line.backgroundColor },
                        ]}
                    />
                )}
            </View>

            <View style={styles.contentContainer}>
                <Text style={[styles.title, titleStyle]}>{item.title}</Text>
                {item.description && (
                    <Text style={[styles.description, descriptionStyle]}>
                        {item.description}
                    </Text>
                )}
            </View>
        </View>
    );

    return (
        <FlatList
            style={[styles.container, containerStyle]}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={showScrollIndicator}
        />
    );
};
