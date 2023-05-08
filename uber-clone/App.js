import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor} >Hii Yugal, Welcome to react native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36d68e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor:{
    color:'#F501F9'
  }
});
