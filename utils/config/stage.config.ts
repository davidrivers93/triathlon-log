import { StageType } from "../../models/stage";

interface StageConfig {
  bgColor: string;
  bgCardColor: string;
  textColor: string;
  textCardColor: string;
}

type OptionRequirements = {
  [key in StageType]: StageConfig;
};

export const StageConfig: OptionRequirements = {
  [StageType.SWIM]: {
    bgColor: "bg-green-300",
    bgCardColor: "bg-green-700",
    textColor: "text-black",
    textCardColor: "text-gray-100",
  },
  [StageType.CYCLING]: {
    bgColor: "bg-green-300",
    bgCardColor: "bg-green-700",
    textColor: "text-black",
    textCardColor: "text-gray-100",
  },
  [StageType.RUN]: {
    bgColor: "bg-green-300",
    bgCardColor: "bg-green-700",
    textColor: "text-black",
    textCardColor: "text-gray-100",
  },
  [StageType.TRANSITION]: {
    bgColor: "bg-green-300",
    bgCardColor: "bg-green-700",
    textColor: "text-black",
    textCardColor: "text-gray-100",
  },
};
