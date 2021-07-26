import { Position } from "./position";
import { Stage } from "./stage";

export interface Competition {
  id: string;
  name: string;
  date: string;
  location: string;
  distance: DistanceType;
  competitionType: CompetitionType;
  imageUrl: string;
  position: Position;
  stages?: Stage[];
}

export type DistanceType = "Sprint";

export type CompetitionType = "Triathlon" | "Duathlon";
