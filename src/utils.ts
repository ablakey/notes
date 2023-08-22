/**
 * Get today as an integer using EST. Yes, this is for just me. It breaks others. And isn't quite right for
 * Daylight Saving. I don't really care to implement more complex date handling that I don't need.
 */
export function getToday() {
  return Math.floor((Date.now() - 1.44e7) / 8.64e7) + 1; // minus 5 hours.
}

export function dayToDate(day: number) {
  return new Date(8.64e7 * day);
}

console.log(dayToDate(getToday()));
