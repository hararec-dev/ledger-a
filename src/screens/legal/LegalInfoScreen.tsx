import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { LegalInfoHeader, LegalInfoSection } from '../../components';
import { useLegalTerms } from '../../hooks';
import type { LegalInfoProps } from '../../types';


export const LegalInfoScreen: React.FC<LegalInfoProps> = ({ navigation, route }) => {
  const { termsContent } = useLegalTerms({ typeInfo: route.params.typeInfo });

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 20,
  },
  footer: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 20,
    color: '#444',
    fontFamily: 'Quicksand-Regular',
  },
});
