import { View, Text, TouchableOpacity } from "react-native";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react-native";
import { colors } from "@/styles/colors";

export function DateSwitcher() {
  return (
    <View className="flex-row items-center justify-between pt-3">
      <TouchableOpacity className="size-12 items-center justify-center">
        <ChevronLeftIcon size={25} color={colors.gray[700]} />
      </TouchableOpacity>

      <Text className="text-center font-sans-medium text-base tracking-[1.28px] text-gray-700">
        HOJE, 20 DE SETEMBRO
      </Text>

      <TouchableOpacity className="size-12 items-center justify-center">
        <ChevronRightIcon size={25} color={colors.gray[700]} />
      </TouchableOpacity>
    </View>
  );
}
