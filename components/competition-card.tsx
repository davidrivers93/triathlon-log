import React from "react";
import { Competition } from "../models/competition";

const CompetitionCard = ({ competition }: { competition: Competition }) => {
  return (
    <div className="w-full w-full bg-white shadow-md rounded-md px-6 py-4 my-6">
      <div className="sm:flex sm:justify-between">
        <div className="flex items-center">
          <img
            className="h-12 w-12 rounded-full"
            src="https://lh3.googleusercontent.com/a-/AOh14Gi0DgItGDTATTFV6lPiVrqtja6RZ_qrY91zg42o-g"
            alt=""
          ></img>
          <div className="ml-2">
            <h3 className="text-lg text-gray-800 font-medium">
              {competition.name}
            </h3>
            <span className="text-gray-600">{competition.location}</span>
          </div>
        </div>
        <div className="mt-2 sm:mt-0">
          <button class="flex items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
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
            <span>Detail</span>
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <h4 className="text-gray-600 text-sm">Competition type</h4>
          <span className="mt-2 text-xl font-medium text-gray-800">
            {competition.competitionType}
          </span>
        </div>
        <div>
          <h4 className="text-gray-600 text-sm">Distance</h4>
          <span className="mt-2 text-xl font-medium text-gray-800">
            {competition.distance}
          </span>
        </div>
        <div>
          <h4 className="text-gray-600 text-sm">Reviews</h4>
          <span className="mt-2 text-xl font-medium text-gray-800">35</span>
        </div>
      </div>
    </div>
  );
};

export default CompetitionCard;
