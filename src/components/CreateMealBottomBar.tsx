import { CameraIcon, MicIcon } from "lucide-react-native";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "./Button";

export function CreateMealBottomBar() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white px-5 pt-3"
      style={{ height: 80 + bottom }}
    >
      <View className="flex-row justify-center gap-3">
        <Button size="icon" color="gray">
          <MicIcon />
        </Button>
        <Button size="icon" color="gray">
          <CameraIcon />
        </Button>
      </View>
    </View>
  );
}
