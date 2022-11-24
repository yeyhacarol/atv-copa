import { View, Text, StyleSheet } from 'react-native';

export const Feed = () => {
  return (
    <View style={styles.container}>
      <Text>Swipe to right to open the drawer navigator</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  }
})