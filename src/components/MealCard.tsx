import { Text, TouchableOpacity, View } from "react-native";
interface IMealCardProps {
  id: string;
  name: string;
  time: string;
  description: string;
  withinDiet: boolean;
}
export function MealCard({
  id,
  name,
  time,
  description,
  withinDiet,
}: IMealCardProps) {
  return (
    <TouchableOpacity className="w-full">
      <Text className="font-sans-regular text-base text-gray-700">
        Hoje, 12h20
      </Text>
      <View className="mt-2 flex-row gap-3 rounded-2xl border border-gray-400 px-4 py-5">
        <View className="size-12 items-center justify-center rounded-full bg-gray-200">
          <Text>🍞</Text>
        </View>

        <View className="flex-1">
          <Text className="font-sans-regular text-base text-gray-700">
            {name}
          </Text>
          <Text className="font-sans-medium text-base text-black-700">
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
