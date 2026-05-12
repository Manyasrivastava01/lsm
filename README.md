# SwasthaVerse - Digital Health and Fitness Platform

A React-based web application that promotes a healthier lifestyle through guided yoga, meditation, workouts, nutrition planning, and curated reading resources.

---

## Features

- Landing page with about section and how-it-works walkthrough
- User signup, login, and profile pages
- Activity dashboard with six modules:
  - **Meditation** - Mindful, movement, mantra, and self-love meditation guides
  - **Yoga** - Trimester-based pose selection (child pose, bridge pose, butterfly pose, garland pose, ankle rotation)
  - **Workouts** - Cardio, full body, abs, belly, flexibility, and HIIT routines
  - **Food** - Meal planning with breakfast, lunch, dinner, and snack ideas
  - **Reading** - Curated books and articles/stories section
  - **Music** - Music section (placeholder)
- Smooth page transitions and hover animations using Framer Motion
- Sidebar navigation for the user dashboard
- Contact page

## Built With

- React 18 with React Router v6
- Tailwind CSS 3
- Framer Motion for animations
- React PDF for document viewing

## Setup

```bash
git clone https://github.com/Manyasrivastava01/lsm.git
cd lsm
npm install
npm start
```

The app runs at `http://localhost:3000`.

## Routes

| Path | Page |
|------|------|
| `/` | Landing page |
| `/login` | Login |
| `/signup` | Signup |
| `/user` | Activity dashboard |
| `/user/meditation` | Meditation section |
| `/user/yoga` | Yoga section |
| `/user/workout` | Workout section |
| `/user/food` | Food/nutrition section |
| `/user/reading` | Reading section |
| `/contacts` | Contact page |

