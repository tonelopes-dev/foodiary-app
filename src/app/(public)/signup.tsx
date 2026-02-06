import { zodResolver } from "@hookform/resolvers/zod";
import { isAxiosError } from "axios";
import { router } from "expo-router";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react-native";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Alert, View } from "react-native";
import { AuthLayout } from "@/components/AuthLayout";
import { Button } from "@/components/Button";
import { AccountStep } from "@/components/SignUpSteps/AccountStep";
import { ActivityLevelStep } from "@/components/SignUpSteps/ActivityLevelStep";
import { BirthDateStep } from "@/components/SignUpSteps/BirthDateStep";
import { GenderStep } from "@/components/SignUpSteps/GenderStep";
import { GoalStep } from "@/components/SignUpSteps/GoalStep";
import { HeightStep } from "@/components/SignUpSteps/HeightStep";
import { WeightStep } from "@/components/SignUpSteps/WeightStep";
import { signUpSchema } from "@/components/SignUpSteps/signUpSchema";
import { useAuth } from "@/hooks/useAuth";
import { colors } from "@/styles/colors";

export default function SignUp() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const form = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const steps = [
    {
      icon: "🎯",
      title: "Qual é seu objetivo?",
      subtitle: "O que você pretende alcançar com a dieta?",
      Component: GoalStep,
    },
    {
      icon: "👥",
      title: "Qual é seu gênero",
      subtitle: "Seu gênero influencia no tipo da dieta",
      Component: GenderStep,
    },
    {
      icon: "📅",
      title: "Qual é sua data de nascimento?",
      subtitle: "Sua idade ajuda a personalizar sua dieta",
      Component: BirthDateStep,
    },
    {
      icon: "📏",
      title: "Qual é sua altura?",
      subtitle: "Sua altura é importante para o cálculo do IMC",
      Component: HeightStep,
    },
    {
      icon: "⚖️",
      title: "Qual é seu peso atual?",
      subtitle: "Seu peso atual nos ajuda a criar sua dieta",
      Component: WeightStep,
    },
    {
      icon: "🏃",
      title: "Qual é seu nível de atividade?",
      subtitle: "Isso nos ajuda a calcular suas necessidades calóricas",
      Component: ActivityLevelStep,
    },
    {
      icon: "📝",
      title: "Crie sua conta",
      subtitle: "Finalize seu cadastro para começar sua jornada",
      Component: AccountStep,
    },
  ];

  function handlePreviousStep() {
    if (currentStepIndex === 0) {
      router.back();
      return;
    }

    setCurrentStepIndex((prevState) => prevState - 1);
  }

  async function handleNextStep() {
    const fieldsByStep = [
      ["goal"],
      ["gender"],
      ["birthDate"],
      ["height"],
      ["weight"],
      ["activityLevel"],
      ["name", "email", "password"],
    ];

    const currentStepFields = fieldsByStep[currentStepIndex] as any;
    const isValid = await form.trigger(currentStepFields);

    if (isValid) {
      setCurrentStepIndex((prevState) => prevState + 1);
    }
  }

  const { signUp, signIn } = useAuth();

  const handleSubmit = form.handleSubmit(
    async (formData) => {
      try {
        const [day, month, year] = formData.birthDate.split("/");
        const birthDateFormatted = `${year}-${month}-${day}`;

        await signUp({
          height: Number(formData.height),
          weight: Number(formData.weight),
          activityLevel: Number(formData.activityLevel),
          gender: formData.gender,
          goal: formData.goal,
          birthDate: birthDateFormatted,
          account: {
            email: formData.email,
            name: formData.name,
            password: formData.password,
          },
        });
      } catch (error) {
        if (isAxiosError(error)) {
          const errorMessage = error.response?.data?.errors;
          
          if (errorMessage === "User already exists") {
            try {
              await signIn({
                email: form.getValues("email"),
                password: form.getValues("password"),
              });
              
              router.replace("/");
              return;
            } catch (signInError) {
              return Alert.alert("Este e-mail já está em uso. Tente fazer login manualmente.");
            }
          }

          if (typeof errorMessage === 'string') {
            const translations: Record<string, string> = {
              "User already exists": "Usuário já cadastrado.",
              "Invalid credentials": "E-mail ou senha inválidos.",
            };

            return Alert.alert(translations[errorMessage] || errorMessage);
          }
        }

        Alert.alert("Erro ao criar a conta. Tente novamente.");
      }
    },
    () => {
      Alert.alert("Verifique se todos os campos foram preenchidos corretamente.");
    }
  );

  const currentStep = steps[currentStepIndex];
  const isLastStep = currentStepIndex === steps.length - 1;

  console.log(form.formState.errors);

  return (
    <AuthLayout
      icon={currentStep.icon}
      title={currentStep.title}
      subtitle={currentStep.subtitle}
    >
      <View className="flex-1 justify-between">
        <FormProvider {...form}>
          <currentStep.Component onNext={handleNextStep} />
        </FormProvider>

        <View className="flex-row justify-between gap-4">
          <Button size="icon" color="gray" onPress={handlePreviousStep}>
            <ArrowLeftIcon size={20} color={colors.black[700]} />
          </Button>

          {isLastStep ? (
            <Button
              className="flex-1"
              onPress={handleSubmit}
              loading={form.formState.isSubmitting}
            >
              Criar conta
            </Button>
          ) : (
            <Button size="icon" onPress={handleNextStep}>
              <ArrowRightIcon size={20} color={colors.black[700]} />
            </Button>
          )}
        </View>
      </View>
    </AuthLayout>
  );
}
