import { View, StyleSheet } from 'react-native';
import { useThemeStore } from '../../hooks';
import { Timeline } from './TimeLine';

export const TimelineExample = () => {
    const { colors } = useThemeStore();
    const timelineData = [
        {
            id: '1',
            title: 'Meeting with Client',
            description: 'Discussed project requirements and timeline',
            time: '09:00 AM',
            date: 'Jan 15, 2023',
            dotColor: colors.blue[500],
        },
        {
            id: '2',
            title: 'Project Kickoff',
            description: 'Initial team meeting to start the project',
            time: '02:30 PM',
            date: 'Jan 17, 2023',
            dotColor: colors.green[500],
        },
        {
            id: '3',
            title: 'Design Review',
            description: 'Review of initial design mockups',
            time: '11:00 AM',
            date: 'Jan 20, 2023',
            dotColor: colors.purple[500],
        },
        {
            id: '4',
            title: 'Development Sprint',
            description: 'First development sprint begins',
            time: '09:00 AM',
            date: 'Jan 25, 2023',
            dotColor: colors.amber[500],
        },
        {
            id: '5',
            title: 'Progress Review',
            description: 'Review of progress with stakeholders',
            time: '03:00 PM',
            date: 'Feb 05, 2023',
            dotColor: colors.red[500],
        },
    ];

    return (
        <View style={{
            flex: 1,
            padding: 16,
            backgroundColor: colors.coolGray[50],
        }}>
            <Timeline
                data={timelineData}
                lineColor={colors.coolGray[300]}
                dotColor={colors.fuchsia[500]}
            />
        </View>
    );
};
