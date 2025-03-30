import { ScrollView, View, Text } from 'react-native';
import { LegalInfoHeader, LegalInfoSection } from '../../components';
import { useLegalTerms, useStyles } from '../../hooks';
import type { LegalInfoProps } from '../../types';


export const LegalInfoScreen: React.FC<LegalInfoProps> = ({ navigation, route }) => {
  const { termsContent } = useLegalTerms({ typeInfo: route.params.typeInfo });
  const styles = useStyles(({ colors, isDark }) => ({
    content: {
      paddingHorizontal: 20,
    },
    container: {
      flex: 1,
      backgroundColor: isDark ? colors.coolGray[900] : colors.coolGray[50],
    },
    footer: {
      fontSize: 16,
      fontWeight: '500',
      marginVertical: 20,
      color: isDark ? colors.coolGray[200] : colors.coolGray[900],
      fontFamily: 'Quicksand-Regular',
    },
  }));

  return (
    <View style={styles.container}>
      <LegalInfoHeader
        navigation={navigation}
        title={termsContent.title}
        lastUpdate={termsContent.lastUpdate}
      />
      <ScrollView style={styles.content}>
        {termsContent.sections.map((section, index) => (
          <LegalInfoSection
            key={`section-${index}`}
            section={section}
            index={index}
          />
        ))}
        <Text style={styles.footer}>{termsContent.footer}</Text>
      </ScrollView>
    </View>
  );
};
