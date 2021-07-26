import React from "react";
import CompetitionCard from "../../components/competition-card";
import TimelineCard from "../../components/timeline-card";
import { Competition } from "../../models/competition";
import { CompetitionsRepository } from "../../repositories/competitions";
import { convertFirebaseDate } from "../../utils/date";

const Competitions = (props: { competition: Competition }) => {
  const { competition } = props;

  return (
    <div>
      <div>Gráfico</div>
      <div className="container mx-auto my-6">
        <h2 className="text-xl font-semibold">Insights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
          <div className="dark:bg-gray-800 p-6 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-gray-200 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg
                width="50"
                height="50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="stroke-current text-green-700 dark:text-gray-500 transform transition-transform duration-500 ease-in-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>

            <div className="text-right text-gray-500">
              <p className="text-2xl">123</p>
              <p className="text-gray-800">Total time</p>
            </div>
          </div>
          <div className="dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-gray-200 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg
                width="50"
                height="50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="stroke-current text-green-700 dark:text-gray-500 transform transition-transform duration-500 ease-in-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <div className="text-right text-gray-500">
              <p className="text-2xl ">
                {competition.position.position}{" "}
                <span className="text-xs text-gray-300 ">
                  / {competition.position.totalParticipants}
                </span>
              </p>
              <p className="text-gray-800">Position</p>
            </div>
          </div>
          <div className="dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-gray-200 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg
                width="50"
                height="50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="stroke-current text-green-700 dark:text-gray-500 transform transition-transform duration-500 ease-in-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <div className="text-right text-gray-500">
              <p className="text-2xl ">
                {competition.position.categoryPosition}
                <span className="text-xs text-gray-300 ">
                  / {competition.position.totalCategoryParticipants}
                </span>
              </p>
              <p className="text-gray-800">Category position</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-6">
        <h2 className="text-xl font-semibold">Segmentos</h2>
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div
              className="border-2-2 absolute border-opacity-20 border-green-300 h-full border"
              style={{ left: "50%" }}
            ></div>
            {competition.stages?.map((stage, index) => (
              <TimelineCard index={index} stage={stage}></TimelineCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const competitionRepository = new CompetitionsRepository();
  const competitions = await competitionRepository.getAll();
  return {
    paths: competitions.map((competition) => {
      return {
        params: {
          id: competition.id,
        },
      };
    }),
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const competitionRepository = new CompetitionsRepository();
  const competition = await competitionRepository.get();

  return {
    props: {
      competition,
    },
  };
};

export default Competitions;
