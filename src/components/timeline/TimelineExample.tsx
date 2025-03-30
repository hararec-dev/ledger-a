import { useMemo } from 'react';
import { View } from 'react-native';
import { Timeline } from '../../components';
import { useStyles, useThemeStore } from '../../hooks';
import type { TimelineItem } from '../../types';


export const TimelineExample = () => {
    const { colors: appColors } = useThemeStore();
    const styles = useStyles(({ colors }) => ({
        container: {
            flex: 1,
            padding: 16,
            backgroundColor: colors.coolGray[50],
        },
        lineColor:{
            color: colors.coolGray[300],
        },
        dotColor:{
            color: colors.fuchsia[500],
        },
    }));
    const timelineData = useMemo<TimelineItem[]>(() => [
        {
            id: '1',
            title: 'Meeting with Client',
            description: 'Discussed project requirements and timeline',
            time: '09:00 AM',
            date: 'Jan 15, 2023',
            dotColor: appColors.blue[500],
        },
        {
            id: '2',
            title: 'Project Kickoff',
            description: 'Initial team meeting to start the project',
            time: '02:30 PM',
            date: 'Jan 17, 2023',
            dotColor: appColors.green[500],
        },
        {
            id: '3',
            title: 'Design Review',
            description: 'Review of initial design mockups',
            time: '11:00 AM',
            date: 'Jan 20, 2023',
            dotColor: appColors.purple[500],
        },
        {
            id: '4',
            title: 'Development Sprint',
            description: 'First development sprint begins',
            time: '09:00 AM',
            date: 'Jan 25, 2023',
            dotColor: appColors.amber[500],
        },
        {
            id: '5',
            title: 'Progress Review',
            description: 'Review of progress with stakeholders',
            time: '03:00 PM',
            date: 'Feb 05, 2023',
            dotColor: appColors.red[500],
        },
    ],[appColors]);

    return (
        <View style={styles.container}>
            <Timeline
                data={timelineData}
                lineColor={styles.lineColor.color}
                dotColor={styles.dotColor.color}
            />
        </View>
    );
};
