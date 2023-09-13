
import { StyleSheet } from 'react-native';;
import Navigation from './Src/Navigation';
import Firstpage from './Src/Deco/Firstpage';
import Home from './Src/Screen/Home';
const App = () => {
  return (
     <Navigation/>
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
