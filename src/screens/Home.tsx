import { CreateMealBottomBar } from "@/components/CreateMealBottomBar";
import HomeHeader from "@/components/HomeHeader";
import { MealsList } from "@/components/MealsList";
import { View } from "react-native";
export function Home() {
  return (
    <View className="flex-1">
      <HomeHeader />
      <MealsList />
      <CreateMealBottomBar />
    </View>
  );
}
