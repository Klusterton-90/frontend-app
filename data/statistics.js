export const data = [
  ["Day", "Pending", "Missed", "Taken"],
  ["SUN", 5, 10, 30],
  ["MON", 0, 4, 30],
  ["TUE", 15, 15, 30],
  ["WED", 15, 26, 30],
  ["THUR", 8, 22, 30],
  ["FRI", 20, 18, 30],
  ["SAT", 20, 18, 30],
];

export const genderData = [
  ["Gender", "Percentage"],
  ["Female", "25%"],
  ["Male", "75%"],
];

export const genderOptions = {
  colors: ["#002359", "#4977BD"],
  pieHole: 1.2,
  is3D: false,
  slices: {
    0: { color: "#002359" },
    1: { color: "#4977BD" },
  },
};
export const options = {
  colors: ["#C3C3D8", "#002359", "#4977BD"],
};

export const analysisData = [
  [
    { type: "number", label: "x" },
    { type: "number", label: "values" },
    { id: "i0", type: "number", role: "interval" },
    { id: "i1", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
  ],
  [12.0, 100, 90, 110, 85, 96, 104, 120],
  [12.3, 120, 95, 130, 90, 113, 124, 140],
  [13.0, 130, 105, 140, 100, 117, 133, 139],
  [13.3, 90, 85, 95, 85, 88, 92, 95],
  [14.0, 70, 74, 63, 67, 69, 70, 72],
  [14.3, 30, 39, 22, 21, 28, 34, 40],
  [15.0, 80, 77, 83, 70, 77, 85, 90],
  [15.3, 100, 90, 110, 85, 95, 102, 110],
];

export const analysisOptions = {
  curveType: "function",
  series: [{ color: "#FD3B3B" }],
  intervals: { style: "sticks" },
  legend: "none",
};

export const reports = [
  {
    type: "Checkup Result",
    name: "Kimberly Yung",
    date: "25 Nov, 2023",
  },
  {
    type: "Prescription",
    name: "Chinaza Okeke",
    date: "25 Nov, 2023",
  },
  {
    type: "Appointment",
    name: "Chinaza Okeke",
    date: "25 Nov, 2023",
  },
  {
    type: "Checkup Result",
    name: "Michael Smith",
    date: "25 Nov, 2023",
  },
];
