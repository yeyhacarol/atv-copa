import {
  createDrawerNavigator,
} from '@react-navigation/drawer'

import { Feed } from "../components/Feed"
import { CustomDrawerContent } from "../components/DrawerNav"

const Drawer = createDrawerNavigator();

import { View, Text, StyleSheet } from 'react-native';

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

export const MyDrawer = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}