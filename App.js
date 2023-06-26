// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import React, {useState, useEffect} from "react";
import Tabs from "./src/Components/Tabs";


const App = () => {
  const [loading, setloading] = useState(true)
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}

export default App
