export const workouts = [
  {
    id: 1,
    name: "HIIT",
    duration: 20,
    location: "Home",
    days: ["Mon", "Wed", "Fri"],
    exercises: [1, 2, 3, 4],
    description: "High-intensity interval training to burn fat and improve cardio"
  },
  {
    id: 2,
    name: "Strength",
    duration: 45,
    location: "Gym",
    days: ["Tue", "Thu", "Sat"],
    exercises: [5, 6, 7, 8],
    description: "Strength training to build muscle and increase metabolism"
  },
  {
    id: 3,
    name: "Cardio",
    duration: 30,
    location: "Home",
    days: ["Mon", "Wed", "Fri"],
    exercises: [9, 10, 11],
    description: "Cardio workout to improve heart health and endurance"
  },
  {
    id: 4,
    name: "Yoga",
    duration: 15,
    location: "Home",
    days: ["Tue", "Thu", "Sun"],
    exercises: [12, 13, 14],
    description: "Yoga session for flexibility and stress reduction"
  }
];

export const exercises = [
  { id: 1, name: "Jumping Jacks", duration: 30, unit: "seconds" },
  { id: 2, name: "Wall Sit", duration: 30, unit: "seconds" },
  { id: 3, name: "Push-ups", duration: 30, unit: "seconds" },
  { id: 4, name: "Crunches", duration: 30, unit: "seconds" },
  { id: 5, name: "Squats", reps: 15, sets: 3 },
  { id: 6, name: "Bench Press", reps: 10, sets: 3 },
  { id: 7, name: "Deadlifts", reps: 8, sets: 3 },
  { id: 8, name: "Shoulder Press", reps: 12, sets: 3 },
  { id: 9, name: "Running", duration: 20, unit: "minutes" },
  { id: 10, name: "Cycling", duration: 15, unit: "minutes" },
  { id: 11, name: "Jump Rope", duration: 10, unit: "minutes" },
  { id: 12, name: "Downward Dog", duration: 60, unit: "seconds" },
  { id: 13, name: "Warrior Pose", duration: 45, unit: "seconds" },
  { id: 14, name: "Child's Pose", duration: 60, unit: "seconds" }
];