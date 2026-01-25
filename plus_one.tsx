one;
class Solution {
  /**
   * @param digits
   * @return digits after +1
   */
  plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < 9) {
        digits[i] += 1;
        return digits;
      }
      digits[i] = 0; // carry over
    }

    // If we reach here, all digits were 9
    digits.unshift(1);
    return digits;
  }
}
