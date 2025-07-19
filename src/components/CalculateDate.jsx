export const CalculateDate = (dateString) => {
  const rangeMatch = dateString.match(/(\w+ \d{4})\s*-\s*(\w+ \d{4})/);
  if (rangeMatch) {
    const endDateStr = rangeMatch[2];
    return new Date(endDateStr);
  }
  return new Date(dateString);
};
