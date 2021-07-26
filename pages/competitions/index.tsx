import React from "react";
import CompetitionCard from "../../components/competition-card";
import { Competition } from "../../models/competition";
import { CompetitionsRepository } from "../../repositories/competitions";

const Competitions = (props: { competitions: Competition[] }) => {
  const { competitions } = props;

  return (
    <div className="container">
      <div className="flex justify-end">
        <button className="float-right flex items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          <span className="mr-1">
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </span>
          <span>Create</span>
        </button>
      </div>
      <div>
        {competitions.map((entry: Competition) => (
          <div key={entry.id} className="py-2">
            <CompetitionCard competition={entry}></CompetitionCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const competitionRepository = new CompetitionsRepository();
  const competitions = await competitionRepository.getAll();
  return {
    props: {
      competitions,
    },
  };
};

export default Competitions;
