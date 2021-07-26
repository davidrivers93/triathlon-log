import { Competition, CompetitionType } from "../../models/competition";

import { address, name, image, datatype } from "faker/locale/es";
import { getRandomStages } from "./stage";
import { createPosition } from "./position";

const competitionTypes = ["triathlon", "duathlon"];

const createCompetition = (): Competition => ({
  id: "1",
  competitionType: competitionTypes[
    Math.floor(Math.random() * competitionTypes.length)
  ] as CompetitionType,
  date: new Date().toString(),
  distance: "Sprint",
  location: address.city(),
  name: name.title(),
  imageUrl: image.sports(30, 30),
  position: createPosition(),
});

export const getRandomCompetitions = (length = 10) =>
  new Promise<Competition[]>((r, re) =>
    r(Array.from({ length }, createCompetition))
  );

export const getCompetition = (withStage = true) =>
  new Promise<Competition>(async (r, re) =>
    r({ ...createCompetition(), stages: await getRandomStages(10) })
  );
