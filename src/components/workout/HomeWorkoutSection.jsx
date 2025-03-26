import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cardio from "../../assets/work1.jpg";
import FullBody from "../../assets/work2.jpg";
import belly from "../../assets/work3.jpeg";
import Abs  from "../../assets/work4.jpg";
import FlexibilityImage from "../../assets/work5.jpeg";
import HIITImage from "../../assets/work6.jpeg";
import CardioWorkout from "./CardioWorkout";


function HomeWorkoutSection() {
  const [showCardioWorkout, setShowCardioWorkout] = useState(false);

  const handleCardioClick = () => {
    setShowCardioWorkout(true);
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col p-10 bg-white">
        {/* Back Button */}
        <a
          href="/user"
          className="bg-[#F38FB1] text-white py-2 px-4 rounded-full mb-4 w-32 transition-transform transform hover:scale-105 text-center flex items-center justify-center"
        >
          Back
        </a>

        <AnimatePresence>
          {!showCardioWorkout && (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-4"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
            >
              {/* Cardio Workout */}
              <motion.div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-full">
                <img className="h-40 w-40 object-cover rounded-md mb-3" src={Cardio} alt="Cardio Workout" />
                <button
                  className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white"
                  onClick={handleCardioClick}
                >
                  Cardio Workout
                </button>
              </motion.div>

              {/* Strength Training */}
              <motion.div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-full">
                <img className="h-40 w-40 object-cover rounded-md mb-3" src={FullBody} alt="Strength Training" />
                <button className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white">
                Full Body Workout
                </button>
              </motion.div>

              {/* Yoga */}
              <motion.div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-full">
                <img className="h-40 w-40 object-cover rounded-md mb-3" src={belly} alt="Yoga" />
                <button className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white">
                  Loose your belly fat
                </button>
              </motion.div>

              {/* HIIT */}
              <motion.div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-full">
                <img className="h-40 w-40 object-cover rounded-md mb-3" src={Abs} alt="HIIT" />
                <button className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white">
                10 min Standing Abs Workout
                </button>
              </motion.div>

              {/* Flexibility & Stretching */}
              <motion.div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-full">
                <img className="h-40 w-40 object-cover rounded-md mb-3" src={FlexibilityImage} alt="Flexibility & Stretching" />
                <button className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white">
                Standing ABS + Small Waist Workout
                </button>
              </motion.div>

              {/* HIIT */}
              <motion.div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-full">
                <img className="h-40 w-40 object-cover rounded-md mb-3" src={HIITImage} alt="HIIT" />
                <button className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white">
                HIIT Workout
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show CardioWorkout if button is clicked */}
        <AnimatePresence>
          {showCardioWorkout && (
            <motion.div initial="hidden" animate="visible" exit="exit" variants={variants}>
              <CardioWorkout />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default HomeWorkoutSection;
