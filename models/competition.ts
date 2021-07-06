export interface Competition {
  name: string;
  date: Date;
  location: string;
  distance: DistanceType;
  competitionType: CompetitionType;
}

export type DistanceType = "Sprint";

export type CompetitionType = "Triathlon" | "Duathlon";
