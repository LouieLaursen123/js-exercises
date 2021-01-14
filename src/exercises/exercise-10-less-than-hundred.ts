/**
 * Function that checks if the sum of the two parameters are less than 100
 * @param sumOne - The first number that is to be set of the sum
 * @param sumTwo - The second number that is to be set of the sum
 * @returns Return true if the sum of the two numbers are less than 100, otherwise return false
 */

export const lessThanHundred = (sumOne: number, sumTwo: number): boolean => {
  return sumOne + sumTwo > 100 ? false : true
}
