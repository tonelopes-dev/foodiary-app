import { colors } from "@/styles/colors";
import { LogOutIcon } from "lucide-react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeHeader() {
  return (
    <View className="bg-lime-400 pt-10">
      <SafeAreaView className="flex-row items-center justify-between px-4">
        <View>
          <Text className="font-sans-regular text-sm text-gray-700">
            Olá, 🚀
          </Text>
          <Text className="font-sans-semibold text-base text-black-700">
            Tone Monte
          </Text>
        </View>

        <TouchableOpacity className="size-12 items-center justify-center">
          <LogOutIcon size={20} color={colors.gray[700]} />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}
