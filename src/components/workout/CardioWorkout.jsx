// src/components/workout/CardioWorkout.jsx

// import React from "react";

import React, { useState } from "react";
import { motion } from "framer-motion"; 

function CardioWorkout() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Cardio Workout</h2>
      <p className="mb-2">Get your heart pumping with these cardio exercises:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Jumping Jacks - 3 sets of 30 seconds</li>
        <li>High Knees - 3 sets of 30 seconds</li>
        <li>Burpees - 3 sets of 10 reps</li>
        <li>Mountain Climbers - 3 sets of 30 seconds</li>
        <li>Skipping Rope - 3 sets of 1 minute</li>
      </ul>
      <a
        href="/user"
        className="mt-4 inline-block bg-[#F38FB1] text-white py-2 px-4 rounded-full transition-transform transform hover:scale-105"
      >
        Back
      </a>
    </div>
  );
}

export default CardioWorkout;
