import { Competition } from "../models/competition";
import {
  getCompetition,
  getRandomCompetitions,
} from "../utils/mocks/competition";
import { Repository } from "./repository";

export class CompetitionsRepository implements Repository<Competition> {
  async getAll(): Promise<Competition[]> {
    /*     const entries = await db.collection(DATABASE_CONST.TRIATHLONS).get();
    const competitions = entries.docs.map((entry) => {
      const competition: Competition = entry.data();
      return {
        ...competition,
        date: convertFirebaseDate(entry.data().date),
      } as Competition;
    }); */

    return getRandomCompetitions();
  }

  async create(body: Competition): Promise<Competition> {
    throw new Error("Method not implemented.");
  }

  async get(id: string = "1"): Promise<Competition> {
    return getCompetition();
  }
}
