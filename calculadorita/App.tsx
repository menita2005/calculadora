import { StatusBar, Text, View } from "react-native";
import { CalculatorScreen } from "./src/screens/CalculatorScreen";
import { styles } from "./src/config/theme/app-theme";

function App() {
  return(
    <View style={styles.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'}/>
        
      {/*<Text>Calculadora</Text>*/}

      <CalculatorScreen/>
      
    </View>
  );
};


export default App;