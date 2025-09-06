import { CameraIcon, MicIcon } from "lucide-react-native";
import React, { useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AudioModal } from "./AudioModal";
import { Button } from "./Button";

export function CreateMealBottomBar() {
  const { bottom } = useSafeAreaInsets();

  const [isAudioModalOpen, setIsAudioModalOpen] = useState(false);
  const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);
  return (
    <View
      className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white px-5 pt-3"
      style={{ height: 80 + bottom }}
    >
      <View className="flex-row justify-center gap-3">
        <Button
          size="icon"
          color="gray"
          onPress={() => setIsAudioModalOpen(true)}
        >
          <MicIcon />
        </Button>
        <Button
          size="icon"
          color="gray"
          onPress={() => setIsCameraModalOpen(true)}
        >
          <CameraIcon />
        </Button>
      </View>

      {/* <AudioModal open={isAudioModalOpen} onClose={() => setIsAudioModalOpen(false)} />
      <CameraModal open={isCameraModalOpen} onClose={() => setIsCameraModalOpen(false)} /> */}
      <AudioModal
        open={isAudioModalOpen}
        onClose={() => setIsAudioModalOpen(false)}
      />
      <CameraModal
        open={isCameraModalOpen}
        onClose={() => setIsCameraModalOpen(false)}
      />
    </View>
  );
}
