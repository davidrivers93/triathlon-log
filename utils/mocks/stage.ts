import { datatype, random } from "faker/locale/es";
import { Stage, StageType } from "../../models/stage";
import { createPosition } from "./position";

const createStage = (): Stage => ({
  distance: datatype.number(10000),
  time: datatype.number(10000),
  type: random.arrayElement(Object.values(StageType)),
  position: createPosition(),
});

export const getRandomStages = (length = 10) =>
  new Promise<Stage[]>((r, re) => r(Array.from({ length }, createStage)));
