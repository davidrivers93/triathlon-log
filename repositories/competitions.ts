import { Competition } from "../models/competition";
import { convertFirebaseDate } from "../utils/date";
import db from "../utils/db";
import { DATABASE_CONST } from "../utils/db/consts";
import { Repository } from "./repository";

export class CompetitionsRepository implements Repository<Competition> {
  async getAll(): Promise<Competition> {
    const entries = await db.collection(DATABASE_CONST.TRIATHLONS).get();
    const competitions = entries.docs.map((entry) => {
      const competition: Competition = entry.data();
      return {
        ...competition,
        date: convertFirebaseDate(entry.data().date),
      } as Competition;
    });

    return competitions;
  }

  async create(body: Competition): Promise<Competition> {
    throw new Error("Method not implemented.");
  }

  async get(id: string): Promise<Competition> {
    throw new Error("Method not implemented.");
  }
}
