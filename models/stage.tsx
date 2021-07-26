import { Position } from "./position";

export enum StageType {
  SWIM = "Swim",
  CYCLING = "Cycling",
  RUN = "Run",
  TRANSITION = "Transition",
}

export interface Stage {
  type: StageType;
  distance: number;
  time: number;
  position: Position;
}
