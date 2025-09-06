import { FlatList, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DailyStats } from "./DailyStats";
import { DateSwitcher } from "./DateSwitcher";
import { MealCard } from "./MealCard";

const meals = [
  {
    id: "1",
    name: "Café da manhã",
    time: "07:00",
    description: "Omelete com queijo e tomate",
    withinDiet: true,
  },
  {
    id: "2",
    name: "Lanche da manhã",
    time: "10:00",
    description: "Iogurte com granola",
    withinDiet: true,
  },
  {
    id: "3",
    name: "Almoço",
    time: "12:00",
    description: "Frango grelhado com salada",
    withinDiet: true,
  },
  {
    id: "4",
    name: "Lanche da tarde",
    time: "15:00",
    description: "Maçã com pasta de amendoim",
    withinDiet: true,
  },
  {
    id: "5",
    name: "Jantar",
    time: "19:00",
    description: "Salmão com brócolis",
    withinDiet: true,
  },
];

function MealsListHeader() {
  return (
    <>
      <DateSwitcher />
      <View className="mt-4">
        <DailyStats
          calories={{ goal: 2000, current: 1500 }}
          proteins={{ goal: 100, current: 80 }}
          carbohydrates={{ goal: 200, current: 150 }}
          fats={{ goal: 50, current: 40 }}
        />
      </View>

      <View className="mt-7 h-px bg-gray-200" />

      <Text className="m-5 font-sans-medium text-base tracking-[1.28px] text-black-700">
        REFEIÇÕES DO DIA
      </Text>
    </>
  );
}

function Separator() {
  return <View className="h-8" />;
}

export function MealsList() {
  const { bottom } = useSafeAreaInsets();

  return (
    <FlatList
      data={meals}
      contentContainerStyle={{ paddingBottom: bottom + 80 }}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={MealsListHeader}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => (
        <View className="px-5">
          <MealCard
            id={item.id}
            name={item.name}
            time={item.time}
            description={item.description}
            withinDiet={item.withinDiet}
          />
        </View>
      )}
    />
  );
}
