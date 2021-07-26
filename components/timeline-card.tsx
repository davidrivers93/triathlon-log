import React from "react";

import { Stage } from "../models/stage";
import { StageConfig } from "../utils/config/stage.config";

const cardSide = (index: number): string =>
  index % 2 === 0
    ? "mb-8 flex justify-between items-center w-full right-timeline"
    : "mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline";

const TimelineCard = ({ stage, index }: { stage: Stage; index: number }) => {
  return (
    <div className={cardSide(index)}>
      <div className="order-1 w-5/12"></div>
      <div
        className={`z-20 flex items-center order-1 shadow-xl w-8 h-8 rounded-full ${
          StageConfig[stage.type].bgCardColor
        }`}
      >
        <h1
          className={`mx-auto font-semibold text-lg ${
            StageConfig[stage.type].textCardColor
          }`}
        >
          {index + 1}
        </h1>
      </div>
      <div
        className={`order-1 ${
          StageConfig[stage.type].bgColor
        } rounded-lg shadow-xl w-5/12 px-6 py-4`}
      >
        <h3
          className={`mb-3 font-bold text-xl ${
            StageConfig[stage.type].textColor
          }`}
        >
          {stage.type} segment
        </h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
          <div>
            <p className="flex items-end content-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="text-md">Position:</span>
            </p>
            <span>
              {stage.position.position}/{stage.position.totalParticipants}
            </span>
          </div>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Category position:{" "}
            <span>
              {stage.position.categoryPosition}/
              {stage.position.totalCategoryParticipants}
            </span>
          </p>
          <p>
            Time: <span>{stage.time}</span>
          </p>
        </p>
      </div>
    </div>
  );
};

export default TimelineCard;
