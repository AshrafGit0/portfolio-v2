export const getCurrentExperience = () => {
  const start = new Date("2025-03-07");
  const now = new Date();
  const monthsDiff =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());
  const years = Math.floor(monthsDiff / 12);
  const months = monthsDiff % 12;

  if (years > 0) {
    return {
      value: years + "+",
      unit: years === 1 ? "Year" : "Years",
    };
  } else {
    return {
      value: months + "+",
      unit: months === 1 ? "Month" : "Months",
    };
  }
};
