import { useState, useEffect } from 'react';
import { View, FlatList, TextInput, Text, TouchableOpacity, ViewStyle } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from './Icon';

type IconType = 'ionicons' | 'material_community_icons';

interface IconSelectorProps {
  onSelectIcon: (iconName: string) => void;
  iconType: IconType;
}

export const IconSelector: React.FC<IconSelectorProps> = ({ onSelectIcon, iconType }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [icons, setIcons] = useState<string[]>([]);

  useEffect(() => {
    let glyphMap: { [key: string]: number };

    if (iconType === 'ionicons') {
      glyphMap = Ionicons.getRawGlyphMap();
    } else {
      glyphMap = MaterialIcons.getRawGlyphMap();
    }

    const iconNames: string[] = Object.keys(glyphMap);
    setIcons(iconNames);
  }, [iconType]);

  const filteredIcons: string[] = icons.filter((icon: string) =>
    icon.toLowerCase().includes(searchText.toLowerCase())
  );

  const containerStyle: ViewStyle = {
    flex: 1,
    padding: 16,
    backgroundColor: 'pink',
  };

  const searchInputStyle: ViewStyle = {
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
  };

  const itemContainerStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  };

  const iconStyle: ViewStyle = {
    marginRight: 15,
  };

  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      onPress={() => onSelectIcon(item)}
      style={itemContainerStyle}
    >
      <Icon
        name={item}
        size={24}
        style={iconStyle}
        iconType={
          iconType === 'ionicons'
            ? 'ion_icon'
            : 'material_community_icon'
        }
      />
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={containerStyle}>
      <TextInput
        placeholder="Search icon..."
        value={searchText}
        onChangeText={setSearchText}
        style={searchInputStyle}
      />

      <FlatList<string>
        data={filteredIcons}
        keyExtractor={(item: string) => item}
        renderItem={renderItem}
      />
    </View>
  );
};
