import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "./styles/global.css";

export default function App() {
  return (
    <View className="bg-lime-500 flex-1 items-center justify-center">
      <Text className="text-base">uhuuuu eu amo fazer Apps Mobile</Text>
      <StatusBar style="auto" />
    </View>
  );
}
