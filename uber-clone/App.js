import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import {store} from './store';

export default function App() {
  return (
    <Provider store={store} >
      <View style={styles.container}>
        <Text style={styles.textColor} >Hii Yugal, Welcome to react native</Text>
      </View>
    </Provider>
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
