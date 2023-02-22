// Fake database (API)
const database = [
  {
    name: "Kunal Raut",
    grade: "FYJC",
    teacher: "sanket",
    year: 2022,
    marksObtained: [80, 56, 49, 67, 92],
  },
  {
    name: "Sarvesh Gawade",
    grade: "SYJC",
    teacher: "bhavesh",
    marksObtained: [40, 96, 61, 87, 70],
    year: 2021,
  },
  {
    name: "Ritesh Parab",
    grade: "BAFF",
    teacher: "sanket",
    marksObtained: [40, 96, 61, 87, 70],
    year: 2021,
  },
  {
    name: "Vidya Jogi",
    grade: "Trader",
    teacher: "sarvesh",
    marksObtained: [40, 96, 61, 87, 70], //E, A, D, B, C
    year: 2021,
  },
];

module.exports = { database };
