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
          <button className="flex items-center text-white bg-blue-600 rounded px-2 py-1 hover:bg-blue-500 focus:outline-none focus:shadow-outline">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="ml-1 text-sm text-white">See detail</span>
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
      {/*       <div className="mt-3">
        <h4 className="text-gray-600 text-sm">User Score</h4>
        <span className="mt-2 text-xl font-medium text-gray-800">21%</span>
      </div> */}
      {/* <div className="mt-4">
        <h4 className="text-sm text-gray-600">45 Followers</h4>
        <div className="flex items-center overflow-hidden mt-2">
          <img
            className="inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
            alt=""
          ></img>
          <img
            className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
            src="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt=""
          ></img>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-sm text-gray-600">250 Following</h4>
        <div className="flex items-center overflow-hidden mt-2">
          <img
            className="inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
            alt=""
          ></img>
          <img
            className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
            src="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt=""
          ></img>
        </div>
      </div> */}
    </div>
  );
};

export default CompetitionCard;
