import { useState, useEffect } from 'react';
import { View, FlatList, TextInput, Text, TouchableOpacity, Switch } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Clipboard from '@react-native-clipboard/clipboard';
import { Icon } from './Icon';
import { useAppNavigation, useThemeStore } from '../../hooks';

interface IconSelectorProps {
  onSelectIcon: (iconName: string) => void;
}

export const IconSelector: React.FC<IconSelectorProps> = ({ onSelectIcon }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [icons, setIcons] = useState<string[]>([]);
  const [isIonicons, setIsIonicons] = useState<boolean>(true);
  const { colors, isDark, setTheme } = useThemeStore();

  useEffect(() => {
    let glyphMap: { [key: string]: number };

    if (isIonicons) {
      glyphMap = Ionicons.getRawGlyphMap();
    } else {
      glyphMap = MaterialIcons.getRawGlyphMap();
    }

    const iconNames: string[] = Object.keys(glyphMap);
    setIcons(iconNames);
  }, [isIonicons]);

  const filteredIcons: string[] = icons.filter((icon: string) =>
    icon.toLowerCase().includes(searchText.toLowerCase())
  );

  const { goToColorSelection } = useAppNavigation();

  const styles = {
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: 'pink',
    },
    searchInput: {
      padding: 10,
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 16,
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginBottom: 16,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 12,
      borderBottomWidth: 1,
      borderColor: '#eee',
    },
    icon: {
      marginRight: 15,
    },
    copyButton: {
      marginLeft: 10,
      padding: 4,
      backgroundColor: '#eee',
      borderRadius: 4,
    },
    themeToggle: {
      zIndex: 1,
      padding: 10,
      borderRadius: 25,
      marginBottom: 10,
      marginHorizontal: 30,
    },
  } as const;

  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      onPress={() => onSelectIcon(item)}
      style={styles.itemContainer}
    >
      <Icon
        name={item}
        size={24}
        style={styles.icon}
        iconType={isIonicons ? 'ion_icon' : 'material_community_icon'}
      />
      <Text>{item}</Text>
      <TouchableOpacity
        onPress={() => Clipboard.setString(item)}
        style={styles.copyButton}
      >
        <Text>Copiar</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <TouchableOpacity
          onPress={() => setTheme(isDark ? 'light' : 'dark')}
          style={[
            styles.themeToggle,
            {
              backgroundColor: isDark ? colors.coolGray[50] : colors.warmGray[900],
            },
          ]}>
          <Icon
            name={isDark ? 'sunny-outline' : 'moon-outline'}
            size={30}
            color={colors.cyan[500]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.themeToggle}
          onPress={() => goToColorSelection()}
        >
          <Text>Color</Text>
        </TouchableOpacity>
        <Text>Material Icons</Text>
        <Switch
          value={isIonicons}
          onValueChange={setIsIonicons}
          thumbColor={isIonicons ? '#4CAF50' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#81c784' }}
        />
        <Text>Ionicons</Text>
      </View>

      <TextInput
        placeholder="Search icon..."
        value={searchText}
        onChangeText={setSearchText}
        style={styles.searchInput}
      />

      <FlatList<string>
        data={filteredIcons}
        keyExtractor={(item: string) => item}
        renderItem={renderItem}
      />
    </View>
  );
};
