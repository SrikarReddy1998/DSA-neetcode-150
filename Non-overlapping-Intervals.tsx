class Solution {
  /**
   * @param intervals
   * @return number
   */
  eraseOverlapIntervals(intervals: number[][]): number {
    // Sort by end time
    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let prevEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
      const [start, end] = intervals[i];

      if (start < prevEnd) {
        // Overlap → must remove this interval
        count++;
      } else {
        // No overlap → keep it
        prevEnd = end;
      }
    }

    return count;
  }
}
