import React from "react";
import CompetitionCard from "../../components/competition-card";
import { Competition } from "../../models/competition";
import { convertFirebaseDate } from "../../utils/date";
import db from "../../utils/db";
import { DATABASE_CONST } from "../../utils/db/consts";

const Competitions = (props: { competitions: Competition[] }) => {
  const { competitions } = props;

  return (
    <div>
      {competitions.map((entry: Competition) => (
        <div key={entry.id}>
          <CompetitionCard competition={entry}></CompetitionCard>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const entries = await db.collection(DATABASE_CONST.TRIATHLONS).get();
  const competitions = entries.docs.map((entry) => {
    const competition: Competition = entry.data();
    return {
      ...competition,
      date: convertFirebaseDate(entry.data().date),
    } as Competition;
  });

  console.log(competitions);

  return {
    props: { competitions },
    revalidate: 10,
  };
};

export default Competitions;
