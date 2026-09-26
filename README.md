# FitLog — Workout Library

FitLog is a dark, responsive workout library and workout planning website. Users can browse workouts, view workout details, add exercises to today's plan, save workouts for later, and manage their workout plan.

## Technologies Used

* Next.js
* TypeScript
* React
* Tailwind CSS
* DaisyUI
* Context API
* Sonner
* REST API

## Features

* Browse workout library with workout cards
* View detailed information about each workout
* Add workouts to Today's Plan
* Save workouts for later
* Maximum of five workouts in Today's Plan
* Mark workouts as done
* Remove workouts from the plan or saved list
* Sort workouts by Duration, Calories, or Rating
* Plan and Saved counts update in the navbar
* Data persists using Local Storage
* Responsive design for mobile, tablet, and desktop
* Custom loading and 404 pages
* Toast notifications for workout actions

## Workout Details

Each workout detail page includes:

* Workout image
* Workout name
* Muscle groups
* Equipment
* Difficulty
* Sets
* Reps
* Duration
* Calories
* Rating
* Step-by-step instructions

## API

FitLog uses the FitLog workout API.

All workouts:

https://api.abcz.workers.dev/api/fitlog

Single workout:

https://api.abcz.workers.dev/api/fitlog/:id

## Getting Started

First, install the dependencies:


npm install


Then run the development server:


npm run dev


Open http://localhost:3000 in your browser.

## Build

To create a production build:


npm run build


To start the production server:


npm start


## Project Structure

Project Structure
src
├── app
│   ├── my-plan
│   │   └── page.tsx
│   │
│   ├── workout
│   │   └── [id]
│   │       └── page.tsx
│   │
│   ├── loading.tsx
│   └── not-found.tsx
│
├── components
│   ├── homepage
│   │   ├── Banner.tsx
│   │   ├── Library.tsx
│   │   ├── WorkoutCard.tsx
│   │   └── ...
│   │
│   ├── my-plan
│   │   ├── MyPlanClient.tsx
│   │   └── PlanSort.tsx
│   │
│   ├── shared
│   │   ├── Navbar.tsx
│   │   ├── PlanBadges.tsx
│   │   └── Footer.tsx
│   │
│   └── workout
│       └── WorkoutActions.tsx
│
└── context
    └── PlanContext.tsx

## Project Goal

FitLog was created as a workout library and planning application that helps users discover exercises, organize their daily workouts, save exercises for later, and track completed workouts.
