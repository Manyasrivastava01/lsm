// import React, { useState } from 'react';

// const JournalEntry = ({ selectedDay }) => {
//   const [entry, setEntry] = useState('');
//   const [saved, setSaved] = useState(false);

//   const handleSave = () => {
//     // For now, just display a save message. Implement actual save logic if needed.
//     setSaved(true);
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">{selectedDay}</h2>
//       <textarea
//         className="w-full h-48 p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
//         value={entry}
//         onChange={(e) => setEntry(e.target.value)}
//         placeholder="Write your journal entry here..."
//       ></textarea>
//       <button
//         className="mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition-colors"
//         onClick={handleSave}
//       >
//         Save Entry
//       </button>
//       {saved && <p className="mt-4 text-green-500">Your entry has been saved!</p>}
//     </div>
//   );
// };

// export default JournalEntry;



// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import CardioImage from "../../assets/book10.jpg";
// import StrengthImage from "../../assets/book10.jpg";
// import YogaImage from "../../assets/book10.jpg";
// import HIITImage from "../../assets/book10.jpg";
// import FlexibilityImage from "../../assets/book10.jpg";
// import CardioWorkout from "./workout/CardioWorkout";

// function HomeWorkoutSection() {
//   const [showCardioWorkout, setShowCardioWorkout] = useState(false);

//   const handleCardioClick = () => {
//     setShowCardioWorkout(true);
//   };

//   const variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//     exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
//   };

//   return (
//     <div className="flex h-screen">
//       <div className="flex-1 flex flex-col p-10 bg-white">
//         {/* Back Button */}
//         <a
//           href="/user"
//           className="bg-[#F38FB1] text-white py-2 px-4 rounded-full mb-4 w-32 transition-transform transform hover:scale-105 text-center flex items-center justify-center"
//         >
//           Back
//         </a>

//         <AnimatePresence>
//           {!showCardioWorkout && (
//             <motion.div
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-4"
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               variants={variants}
//             >
//               {/* Cardio Workout */}
//               <motion.div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-full">
//                 <img className="h-40 w-40 object-cover rounded-md mb-3" src={CardioImage} alt="Cardio Workout" />
//                 <button
//                   className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white"
//                   onClick={handleCardioClick}
//                 >
//                   Cardio Workout
//                 </button>
//               </motion.div>

//               {/* Strength Training */}
//               <motion.div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-full">
//                 <img className="h-40 w-40 object-cover rounded-md mb-3" src={StrengthImage} alt="Strength Training" />
//                 <button className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white">
//                   Strength Training
//                 </button>
//               </motion.div>

//               {/* Yoga */}
//               <motion.div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-full">
//                 <img className="h-40 w-40 object-cover rounded-md mb-3" src={YogaImage} alt="Yoga" />
//                 <button className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white">
//                   Yoga
//                 </button>
//               </motion.div>

//               {/* HIIT */}
//               <motion.div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-full">
//                 <img className="h-40 w-40 object-cover rounded-md mb-3" src={HIITImage} alt="HIIT" />
//                 <button className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white">
//                   HIIT
//                 </button>
//               </motion.div>

//               {/* Flexibility & Stretching */}
//               <motion.div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-full">
//                 <img className="h-40 w-40 object-cover rounded-md mb-3" src={FlexibilityImage} alt="Flexibility & Stretching" />
//                 <button className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white">
//                   Flexibility & Stretching
//                 </button>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Show CardioWorkout if button is clicked */}
//         <AnimatePresence>
//           {showCardioWorkout && (
//             <motion.div initial="hidden" animate="visible" exit="exit" variants={variants}>
//               <CardioWorkout />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

// export default HomeWorkoutSection;
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardioImage from "../../assets/book10.jpg";
import StrengthImage from "../../assets/book10.jpg";
import YogaImage from "../../assets/book10.jpg";
import HIITImage from "../../assets/book10.jpg";
import FlexibilityImage from "../../assets/book10.jpg";
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
                <img className="h-40 w-40 object-cover rounded-md mb-3" src={CardioImage} alt="Cardio Workout" />
                <button
                  className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white"
                  onClick={handleCardioClick}
                >
                  Cardio Workout
                </button>
              </motion.div>

              {/* Strength Training */}
              <motion.div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-full">
                <img className="h-40 w-40 object-cover rounded-md mb-3" src={StrengthImage} alt="Strength Training" />
                <button className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white">
                  Strength Training
                </button>
              </motion.div>

              {/* Yoga */}
              <motion.div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-full">
                <img className="h-40 w-40 object-cover rounded-md mb-3" src={YogaImage} alt="Yoga" />
                <button className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white">
                  Yoga
                </button>
              </motion.div>

              {/* HIIT */}
              <motion.div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-full">
                <img className="h-40 w-40 object-cover rounded-md mb-3" src={HIITImage} alt="HIIT" />
                <button className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white">
                  HIIT
                </button>
              </motion.div>

              {/* Flexibility & Stretching */}
              <motion.div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 h-full">
                <img className="h-40 w-40 object-cover rounded-md mb-3" src={FlexibilityImage} alt="Flexibility & Stretching" />
                <button className="bg-[#F38FB1] w-full py-3 rounded-full my-3 font-bold text-white">
                  Flexibility & Stretching
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
