import { Controller, useFormContext } from "react-hook-form";
import { OptionsSelector } from "@/components/OptionsSelector";
import { SignUpFormData } from "@/components/SignUpSteps/signUpSchema";

export function GenderStep({ onNext }: { onNext?: () => void }) {
  const form = useFormContext<SignUpFormData>();

  return (
    <Controller
      control={form.control}
      name="gender"
      render={({ field }) => (
        <OptionsSelector
          value={field.value}
          onChange={(value) => {
            field.onChange(value);
            onNext?.();
          }}
          options={[
            {
              icon: "👨",
              title: "Masculino",
              value: "male",
            },
            {
              icon: "👩",
              title: "Feminino",
              value: "female",
            },
          ]}
        />
      )}
    />
  );
}
