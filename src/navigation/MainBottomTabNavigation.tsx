import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useMainBottomTabNavigation } from "../hooks";
import type { MainBottomTabParamList } from "../types";


const Tab = createBottomTabNavigator<MainBottomTabParamList>();

export const MainBottomTabNavigation: React.FC = () => {
  const { screenOptions, tabRoutes } = useMainBottomTabNavigation();

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabRoutes.map((route) => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            ...route.options,
            lazy: true,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
