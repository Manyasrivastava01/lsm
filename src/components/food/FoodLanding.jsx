// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom"; // Import Link for navigation

// function FoodLanding() {
//   const foodItems = [
//     {
//       name: "Healthy Breakfast",
//       description: "Start your day with a nutritious breakfast.",
//       image: "https://via.placeholder.com/150",
//       link: "/user/food/breakfast", // Link for Healthy Breakfast
//     },
//     {
//       name: "Lunch Ideas",
//       description: "Delicious and balanced lunch recipes.",
//       image: "https://via.placeholder.com/150",
//       link: "/user/food/lunch", // Link for Lunch Ideas
//     },
//     {
//       name: "Dinner Options",
//       description: "Light and healthy dinner options.",
//       image: "https://via.placeholder.com/150",
//       link: "/user/food/dinner", // Link for Dinner Options
//     },
//     {
//       name: "Snacks",
//       description: "Quick and healthy snack ideas.",
//       image: "https://via.placeholder.com/150",
//       link: "/user/food/snacks", // Link for Snacks
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center p-10 bg-white">
//       <h1 className="text-3xl font-bold mb-6">Food Section</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {foodItems.map((item, index) => (
//           <motion.div
//             key={index}
//             className="bg-[#FFF4F4] p-6 rounded-lg shadow-md flex flex-col items-center"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-32 h-32 object-cover rounded-full mb-4"
//             />
//             <h2 className="text-xl font-bold mb-2">{item.name}</h2>
//             <p className="text-center text-gray-600 mb-4">{item.description}</p>
//             <Link to={item.link}>
//               <motion.button
//                 className="bg-[#F38FB1] text-white py-2 px-4 rounded-full"
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 Explore {item.name}
//               </motion.button>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FoodLanding;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import breakfastImg from "../../assets/breakfast.jpg";
import lunchImg from "../../assets/lunch.jpg";
import dinnerImg from "../../assets/d.jpg";
import snacksImg from "../../assets/snacks.jpg";

function FoodLanding() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const foodData = {
    breakfast: [
      "Poha with Peanuts and Vegetables",
      "Idli with Coconut Chutney",
      "Masala Oats with Coriander",
      "Moong Dal Chilla with Mint Chutney",
    ],
    lunch: [
      "Rajma Chawal (Kidney Beans with Rice)",
      "Vegetable Pulao with Raita",
      "Chana Masala with Whole Wheat Roti",
      "Baingan Bharta with Paratha",
    ],
    dinner: [
      "Palak Paneer with Jeera Rice",
      "Dal Tadka with Phulka",
      "Vegetable Khichdi with Curd",
      "Aloo Gobi with Tandoori Roti",
    ],
    snacks: [
      "Bhel Puri with Tamarind Chutney",
      "Masala Makhana (Spiced Fox Nuts)",
      "Sprout Chaat with Lemon",
      "Roasted Chana with Spices",
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Healthy Food Ideas
      </h1>

      <AnimatePresence>
        {!selectedCategory ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            {Object.keys(foodData).map((category) => (
              <motion.div
                key={category}
                className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                <img
                  src={
                    category === "breakfast"
                      ? breakfastImg
                      : category === "lunch"
                      ? lunchImg
                      : category === "dinner"
                      ? dinnerImg
                      : snacksImg
                  }
                  alt={category}
                  className="h-40 w-full object-cover"
                />
                <div className="p-5 w-full text-center">
                  <h2 className="text-xl font-semibold capitalize">
                    {category}
                  </h2>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            <h2 className="text-3xl font-bold mb-4 capitalize">
              {selectedCategory} Ideas
            </h2>
            <ul className="list-disc pl-6">
              {foodData[selectedCategory].map((item, index) => (
                <li key={index} className="text-lg mb-2">
                  {item}
                </li>
              ))}
            </ul>
            <button
              className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={() => setSelectedCategory(null)}
            >
              Back to Categories
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FoodLanding;
