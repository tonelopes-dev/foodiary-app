import { View } from "react-native";
import { CreateMealBottomBar } from "@/components/CreateMealBottomBar";
import { MealsList } from "@/components/MealsList";
import { HomeHeader } from "@/components/HomeHeader";

export default function Page() {
  return (
    <View className="flex-1 bg-white">
      <HomeHeader />
      <MealsList />

      <CreateMealBottomBar />
    </View>
  );
}
