import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Divider } from '@rneui/themed';
import { LegaInfoItem } from '../../components';
import { useStyles } from '../../hooks';
import type { LegalInfoSectionProps, LegalItem } from '../../types';


export const LegalInfoSection: React.FC<LegalInfoSectionProps> = memo(({ section, index }) => {
  const themeStyles = useStyles(({ colors, isDark, fonts }) => ({
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 12,
      fontFamily: fonts.quicksand.regular,
      color: isDark ? colors.coolGray[100] : colors.coolGray[800],
    },
  }));

  return (
    <View style={styles.section}>
      <Text style={themeStyles.sectionTitle}>{index + 1}. {section.subtitle}</Text>
      {section.items.map((item: LegalItem, idx: number) => (
        <LegaInfoItem key={`item-${idx}`} item={item} />
      ))}
      <Divider />
    </View>
  );
});

const styles = StyleSheet.create({
  section: {
    marginVertical: 20,
  },
});
