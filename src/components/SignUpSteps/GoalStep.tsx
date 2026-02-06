import { Controller, useFormContext } from "react-hook-form";
import { OptionsSelector } from "@/components/OptionsSelector";
import { SignUpFormData } from "@/components/SignUpSteps/signUpSchema";

export function GoalStep({ onNext }: { onNext?: () => void }) {
  const form = useFormContext<SignUpFormData>();

  return (
    <Controller
      control={form.control}
      name="goal"
      render={({ field }) => (
        <OptionsSelector
          value={field.value}
          onChange={(value) => {
            field.onChange(value);
            onNext?.();
          }}
          options={[
            {
              icon: "🥦",
              title: "Perder peso",
              value: "lose",
            },
            {
              icon: "🍍",
              title: "Manter o peso",
              value: "maintain",
            },
            {
              icon: "🥩",
              title: "Ganhar peso",
              value: "gain",
            },
          ]}
        />
      )}
    />
  );
}
