import { useCallback } from 'react';
import { View, Text, FlatList, type ListRenderItem } from 'react-native';
import { LegalInfoHeader, LegalInfoSection } from '@components';
import { useLastActivity, useLegalTerms, useStyles } from '@hooks';
import type { LegalInfoProps, LegalSection } from '@types';


export const LegalInfoScreen: React.FC<LegalInfoProps> = ({ navigation, route }) => {
  const { termsContent } = useLegalTerms({ typeInfo: route.params.typeInfo });
  const styles = useStyles(({ colors, isDark, fonts }) => ({
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
      fontFamily: fonts.quicksand.regular,
    },
  }));

  useLastActivity(() => ({
    path: 'LegalInfo',
    params: {
      typeInfo: route.params.typeInfo,
    },
  }), []);

  const renderSection: ListRenderItem<LegalSection> = useCallback(({ item, index }) => (
    <LegalInfoSection
      key={`section-${index}`}
      section={item}
      index={index}
    />
  ), []);

  return (
    <View style={styles.container}>
      <LegalInfoHeader
        navigation={navigation}
        title={termsContent.title}
        lastUpdate={termsContent.lastUpdate}
      />
      <FlatList
        style={styles.content}
        data={termsContent.sections}
        renderItem={renderSection}
        keyExtractor={(_, index) => `section-${index}`}
        getItemLayout={(_, index) => (
          { length: 100, offset: 100 * index, index }
        )}
        ListFooterComponent={<Text style={styles.footer}>{termsContent.footer}</Text>}
      />
    </View>
  );
};
