import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import Custom_Drawer from "./components/navigations/drawer";

export default function App() {
  return (
    <NavigationContainer>
      <Custom_Drawer />
    </NavigationContainer>
  );
  }