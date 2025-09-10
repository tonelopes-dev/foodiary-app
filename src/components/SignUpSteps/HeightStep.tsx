import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/Input";
import { SignUpFormData } from "@/components/SignUpSteps/signUpSchema";

export function HeightStep() {
  const { control } = useFormContext<SignUpFormData>();

  return (
    <Controller
      control={control}
      name="height"
      render={({ field, fieldState }) => (
        <Input
          label="Altura"
          placeholder="Ex: 175"
          value={field.value}
          onChangeText={field.onChange}
          error={fieldState.error?.message}
          keyboardType="numeric"
          append="cm"
        />
      )}
    />
  );
}
