import { NavigationContainer } from '@react-navigation/native'

import { MyDrawer } from "./components/DrawerScreen"

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

