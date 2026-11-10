// merges arrays from bonusContent.js & concepts.js to one array
const units = [
  ...chapters.map((chapter, index) => ({
    ...chapter,
    label: ["Measurement", "Vectors", "1D Motion", "2D & 3D Motion"][index],
    concepts: chapter.sections.flatMap(section => section[4]),
    practice: chapter.sections.map(section => section[5]),
    quiz: chapter.sections.map(section => section[6])
  })),
  ...bonusUnits
];
