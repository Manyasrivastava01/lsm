// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Landing from "./pages/landing.jsx";
// import Login from "./pages/login.jsx";
// import Signup from "./pages/Signup.jsx";
// import Profile from "./pages/profile.jsx";

// import Contacts from "./pages/Contacts.jsx"; // Import Contacts page
// import ReadingSection from "./components/reading/ReadingSection"; // Import ReadingSection
// import JournalMain from "./components/journal/JournalMain"; // Import JournalMain
// import MeditationSection from "./components/meditation/MeditationSection"; // Import MeditationSection
// import YogaSection from "./components/yoga/yogaa"; // Import YogaSection

// function App() {
//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Landing />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/user" element={<Profile />} />
//           <Route path="/contacts" element={<Contacts />} /> {/* Add Contacts route */}
//           {/* Define routes for sections */}
//           <Route path="/user/reading" element={<ReadingSection />} />
//           <Route path="/user/journal" element={<JournalMain />} />
//           <Route path="/user/meditation" element={<MeditationSection />} />
//           <Route path="/user/yoga" element={<YogaSection />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/Signup.jsx";
import Profile from "./pages/profile.jsx";
import Contacts from "./pages/Contacts.jsx";

import ReadingSection from "./components/reading/ReadingSection";
// import JournalMain from "./components/journal/JournalMain";
import HomeWorkoutSection from "./components/workout/HomeWorkoutSection"; // Import HomeWorkoutSection

import MeditationSection from "./components/meditation/MeditationSection"; // Import MeditationSection
import YogaSection from "./components/yoga/yogaa"; // Import YogaSection
import FoodLanding from "./components/food/FoodLanding"; // Import FoodLanding

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<Profile />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/user/reading" element={<ReadingSection />} />
          {/* <Route path="/user/journal" element={<JournalMain />} /> */}
          <Route path="/user/meditation" element={<MeditationSection />} />
          <Route path="/user/yoga" element={<YogaSection />} />
          <Route path="/user/workout" element={<HomeWorkoutSection />} />{" "}
          {/* Add HomeWorkoutSection route */}
          <Route path="/user/food" element={<FoodLanding />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
